import Cookies from 'js-cookie'
import { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import userApi from '~/api/userApi'
import { userStore } from '~/store'

function ProtectedRoute({ children }: PropsWithChildren): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkSignedIn = async () => {
    try {
      if (!Cookies.get('access_token')) navigate('/sign-in', { replace: true })

      const res = await userApi.getProfile()
      const resData = res.data
      dispatch(userStore.actions.setProfile(resData?.user))
    } catch (error) {
      navigate('/sign-in', { replace: true })
    }
  }

  useEffect(() => {
    checkSignedIn()
  }, [])

  return <>{children}</>
}

export default ProtectedRoute
