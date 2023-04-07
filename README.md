# The Chatroom

Idk, just a normal anonymous chatroom. Currently, only featuring public rooms. Later, will add feature to create and destroy private room.

## Backend

Built with Rails v7. Nothing complex, consists of:

- Create/read operation for chat messages. Read operation is cursor-based.
- Simple JWT authentication.
- Stateless user data
- Websocket communication

## Frontend

Built with ReactJS v18.

- `vite` as React environment.
- UI built using Atlassian Design System (`@atlaskit`) and resources.
- Using `@emotions` for CSS & styling solution.
- `jotai` for state management and state action.
- `ky` for REST communication and `@rails/action-cable` for WS communication.
