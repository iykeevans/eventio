import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from 'jwt-decode'

import { useAuth } from '../context/auth'
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

export default function useFetchUser() {
  const router = useRouter()
  const { dispatch, state } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (state.isLoggedIn) {
      if (router.pathname.includes('auth')) {
        router.replace('/')
      }
      setLoading(false)
      return
    }

    if (token) {
      const decoded: Idecoded = jwt_decode(token || '')
      // if decoded exp time > current time move forward
      if (Number(`${decoded.exp}000`) > Number(Date.now())) {
        dispatch({ type: ACTIONS.LOGIN, payload: decoded.user })
        router.replace('/')
      }
      // else redirect to refresh page
      else {
        router.replace('/app-refresh')
      }
    } else {
      router.replace('/auth/sign-in')
    }
    setLoading(false)
  }, [])

  return { loading }
}
