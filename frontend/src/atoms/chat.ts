import { plainToInstance } from 'class-transformer'
import { atom, createStore, getDefaultStore } from 'jotai'
import { atomWithCache } from 'jotai-cache'
import { atomWithImmer } from 'jotai-immer'

import API from '#Functions/api'
import { Model } from '#Models/chat'

export const allowedRooms = ['welcome', 'ask', 'general'] as const
type RoomId = (typeof allowedRooms)[number]

export namespace Param {
  /** All cursor */
  export const cursor = atom<Model.Message | null>(null)
  /** All cursor */
  // export const cursor = atomWithImmer<Record<string, Model.Message>>({})
  /** Indicate current room */
  export const room = atom<RoomId>('welcome')
}

export namespace Data {
  /** All chat container */
  export const chats = atom<Model.Message[]>((get) => {
    // console.log('get:batches', get(batches), get(batches).flat())
    return get(batches).flat()
  })
  /** All chat container */
  export const batches = atomWithImmer<Model.Message[][]>([])

  /** Pagination query result. Depends on cursor and current room */
  export const query = atomWithCache(async (get) => {
    const cursor = get(Param.cursor)
    const room = get(Param.room)
    const messages = await API.get(`room/${room}`, {
      searchParams: `cursor=${cursor?.created_at ?? ''}&direction=before`,
    }).json()
    // console.log('query:messages', cursor, room, messages)
    return plainToInstance(Model.Message, (messages as any)?.messages as any[])
  })
}

export namespace Action {
  /** Setter atom to load current query then append it to chat data */
  export const loadChats = atom(null, async (get, set) => {
    const query = await get(Data.query)
    const batches = get(Data.batches)

    // console.log('action:load_chat_to_batches', query, batches)
    set(Data.batches, (draft) => {
      // skip if item already inputted
      if (batches.includes(query)) return
      draft.unshift(query)
    })
  })
}

export const stores: Record<RoomId, any> = Object.create(null)
for (const room of allowedRooms) {
  const store = createStore()
  store.set(Param.room, room as RoomId)
  stores[room as RoomId] = store
}
