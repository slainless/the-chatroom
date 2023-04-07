import dayjs from 'dayjs'
import { useAtomValue } from 'jotai'
import { Fragment } from 'react'

import { Data } from '#Atoms/user'
import Bubble from '#Components/Chat/Bubble'
import { generateAvatar } from '#Functions/theme'
import { Model } from '#Models/chat'

interface Args {
  messages: Model.Message[]
}

export default function ChatRenderer(props: Args) {
  const user = useAtomValue(Data.user)
  return (
    <Fragment>
      {props.messages.map((message, index, arr) => {
        const prevMessage = props.messages[index - 1]
        const currentTime = dayjs(message.created_at)
        const deltaTime = currentTime.diff(dayjs(prevMessage?.created_at))
        const showAll =
          Number.isNaN(deltaTime) ||
          deltaTime < 0 ||
          deltaTime > 120000 ||
          prevMessage.user_id !== message.user_id

        return (
          <Bubble
            align={message.user_id + '' == user?.user_id ? 'right' : 'left'}
            key={index}
            avatar={generateAvatar(message.user_id + '')}
            name={showAll ? `@${message.user_id}` : undefined}
            time={currentTime.format('hh:mm A')}
          >
            {message.body}
          </Bubble>
        )
      })}
    </Fragment>
  )
}
