import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'

import { useAuth } from '../context/auth'
import { refreshToken } from '../services/auth-api'
import { IUser } from '../utils/types/users'
import { ACTIONS } from '../enums/constants'

interface Idecoded {
  iat: string
  exp: string
  iss: string
  user: IUser & {
    _id: string
    _v: string
    candidateId: string
  }
}

export default function useUser() {
  const router = useRouter()
  const { dispatch, state } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (state.isLoggedIn) {
      setLoading(false)
      return
    }

    if (token) {
      const decoded: Idecoded = jwt_decode(token || '')
      // if decoded exp time > current time move forward
      if (Number(`${decoded.exp}000`) > Number(Date.now())) {
        dispatch({ type: ACTIONS.LOGIN, payload: decoded.user })
        router.push('/')
      }
      // else refresh the token
      else {
        refreshToken()
          .then((response) => {
            console.log('res', response)
            dispatch({ type: ACTIONS.LOGIN, payload: response })
            router.push('/')
          })
          .catch((err) => console.log(err))
      }
    } else {
      router.push('/auth/sign-in')
    }
    setLoading(false)
  }, [])

  return { loading }
}
