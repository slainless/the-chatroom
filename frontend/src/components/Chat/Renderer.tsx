import dayjs from 'dayjs'
import { Fragment } from 'react'

import Bubble from '#Components/Chat/Bubble'
import { Model } from '#Models/chat'

interface Args {
  messages: Model.Message[]
}

export default function ChatRenderer(props: Args) {
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
            // align="right"
            key={index}
            avatar={showAll}
            name={showAll ? message.user_id : undefined}
            time={currentTime.format('hh:mm A')}
          >
            {message.body}
          </Bubble>
        )
      })}
    </Fragment>
  )
}
