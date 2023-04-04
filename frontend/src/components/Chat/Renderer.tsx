import dayjs from 'dayjs'
import { Fragment } from 'react'

import Bubble from '#Components/Chat/Bubble'

import { IChatMessage } from '#Models/chat'

interface Args {
  messages: IChatMessage[]
}

export default function ChatRenderer(props: Args) {
  return (
    <Fragment>
      {props.messages.map((message, index, arr) => {
        const prevMessage = props.messages[index - 1]
        const currentTime = dayjs(message.timestamp)
        const deltaTime = currentTime.diff(dayjs(prevMessage?.timestamp))
        const showAll =
          Number.isNaN(deltaTime) ||
          deltaTime < 0 ||
          deltaTime > 120000 ||
          prevMessage.name !== message.name

        return (
          <Bubble
            // align="right"
            key={index}
            avatar={showAll}
            name={showAll ? message.name : undefined}
            time={currentTime.format('hh:mm A')}
          >
            {message.message}
          </Bubble>
        )
      })}
    </Fragment>
  )
}
