import { getDefaultStore } from 'jotai'
import ky from 'ky'

// import Store from '#Atoms/global'
import { Data } from '#Atoms/user'

function setAuthorization(request: Request) {
  // read user atom via global store
  const token = getDefaultStore().get(Data.user)?.token
  if (token) request.headers.set('Authorization', token)
}

const Rest = ky.extend({
  method: 'get',
  prefixUrl: import.meta.env.VITE_API_PATH,
  hooks: {
    beforeRequest: [setAuthorization],
  },
})

export default Rest
