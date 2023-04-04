import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { Action, Data } from '#Atoms/user'

export default function UserManager() {
  const user = useAtomValue(Data.user)
  const createUser = useSetAtom(Action.create)

  useEffect(() => {
    if (user == null) createUser()
  }, [user])

  return null
}
