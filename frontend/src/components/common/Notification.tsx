import { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from '~/store/store'
import { commonStore } from '~/store'

const typeStyles = {
  error: 'border-red-400 bg-red-100 text-red-700',
  info: 'border-blue-400 bg-blue-100 text-blue-700',
  warning: 'border-amber-400 bg-amber-100 text-amber-700',
  success: 'border-green-400 bg-green-100 text-green-700'
}

type NotificationType = {
  isShow: boolean
  type: keyof typeof typeStyles
  message: string
}

function Notification({ children }: PropsWithChildren) {
  const dispatch = useDispatch()
  const { isShow = false, type = 'info', message }: NotificationType = useSelector((state) => state.common.notification)

  const handleClose = () => {
    dispatch(commonStore.actions.resetNotification())
  }

  useEffect(() => {
    isShow &&
      setTimeout(() => {
        dispatch(commonStore.actions.resetNotification())
      }, 5000)
  }, [isShow])

  return (
    <>
      {isShow && (
        <div
          className={`absolute right-2 top-2 flex items-center justify-between rounded border px-4 py-3 ${typeStyles[type]}`}
          role='alert'
        >
          <span className='block sm:inline'>{message}</span>
          <span className='pl-3' onClick={handleClose}>
            <svg className='h-6 w-6 fill-current' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <title>Close</title>
              <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
            </svg>
          </span>
        </div>
      )}
      {children}
    </>
  )
}

export default Notification
