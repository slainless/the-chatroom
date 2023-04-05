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
  prefixUrl: 'http://localhost:3000/api',
  hooks: {
    beforeRequest: [setAuthorization],
  },
})

export default Rest
