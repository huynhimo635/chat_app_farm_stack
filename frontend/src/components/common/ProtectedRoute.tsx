import { PropsWithChildren, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import commonApi from '~/api/commonApi'

interface Props extends PropsWithChildren {
  hrefTo: string
  requireSignedIn: boolean
}

function ProtectedRoute({ hrefTo, requireSignedIn = true, children }: Props): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(true)

  const checkSignedIn = async () => {
    try {
      await commonApi.healthCheckProtected()
      setIsSignedIn(true)
    } catch (error) {
      setIsSignedIn(false)
    }
  }

  useEffect(() => {
    checkSignedIn()
  }, [])

  if (isSignedIn !== requireSignedIn) {
    return <Navigate to={hrefTo} replace />
  }
  return <>{children}</>
}

export default ProtectedRoute
