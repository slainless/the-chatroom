// @ts-expect-error
import { createConsumer } from '@rails/actioncable'

import { Action, allowedRooms, stores } from '#Atoms/chat'
import { Model } from '#Models/chat'

export const WS = createConsumer(import.meta.env.VITE_ACTION_CABLE_PATH)
for (const room of allowedRooms) {
  WS.subscriptions.create(
    { channel: `PublicChatChannel`, room_id: room },
    {
      received(data: Model.Message) {
        console.log(WS)
        stores[room].set(Action.pushChat, data)
      },
    }
  )
}
