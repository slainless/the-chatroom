import { plainToInstance } from 'class-transformer'
import { atom } from 'jotai'
import { atomWithCache } from 'jotai-cache'
import { atomWithStorage } from 'jotai/utils'

import API from '#Functions/api'
import { Model } from '#Models/user'

const preload = () => {
  try {
    return JSON.parse(localStorage.getItem('user') ?? 'null')
  } catch {
    return null
  }
}

export namespace Data {
  export const user = atomWithStorage<Model.User | null>('user', preload())
}

export namespace Action {
  export const create = atom(null, async (get, set) => {
    const user = await API.post('user').json<Model.User>()
    set(Data.user, plainToInstance(Model.User, user))
  })
}
