import dayjs from 'dayjs'
import { atom } from 'jotai'

import { IChatMessage } from '#Models/chat'

const msg = (string: string, time: string): IChatMessage => ({
  name: 'Arthur',
  message: string,
  timestamp: time,
})
const messages: IChatMessage[] = [
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('jawab kalau dichat ko!', dayjs().subtract(1, 'minute').toISOString()),
  msg(
    `
  Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.
  `,
    dayjs().subtract(0.5, 'minute').toISOString()
  ),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
  msg('Wooooyyy', dayjs().subtract(10, 'minute').toISOString()),
]

export const messagesAtom = atom<IChatMessage[] | null>(messages)
