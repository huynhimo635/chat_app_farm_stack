import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { TbSend } from 'react-icons/tb'
import { Input } from './form'

import { useSelector } from '~/store'
import { WS_BASE_URL } from '~/utils/constant'

const ChatBox = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const selfProfile = useSelector((state) => state.user.user)
  const wsSubUrl = useSelector((state) => state.chat.subUrl)

  const socket = io(WS_BASE_URL, {
    path: '/ws/socket.io/',
    transports: ['websocket', 'polling']
  })

  const activeSocket = () => {
    socket.on('connect', () => {})

    socket.on('disconnect', () => {})

    socket.on('chat', (data) => {
      setMessages((prevMessages) => [...prevMessages, data.message])
    })
  }

  const handleChangeInput = (event) => {
    const value = event.target.value.trim()
    setMessage(value)
  }

  const handleSend = () => {
    if (message && message.length) {
      socket.emit('chat', message)
    }
    setMessage('')
  }

  useEffect(() => {
    activeSocket()
  }, [])

  return (
    <div className='flex w-full flex-1 flex-col justify-between bg-gray-200 text-sm'>
      <ul className='m-2 h-full overflow-y-auto md:m-4'>
        {/* Other message */}
        <li className='py-3 text-left'>
          <div className='flex items-center gap-4'>
            <p className='font-semibold'>Huynh nguyen</p>
            <small className='text-tertiary-color'>06/06/2022 11:15</small>
          </div>
          <div className='ml-6 w-max rounded-3xl bg-white px-1 py-2'>{'Connected'}</div>
        </li>

        {/* Self message */}
        <li className='py-3 text-right'>
          <div className='mr-2'>
            <span className='rounded-3xl bg-primary-btn-color px-1 py-2 text-white'>`1`</span>
          </div>
        </li>

        {messages.map((message, index) => {
          return (
            <li className='py-3 text-right' key={index}>
              <div className='mr-2'>
                <span className='rounded-3xl bg-primary-btn-color px-1 py-2 text-white'>{message}</span>
              </div>
            </li>
          )
        })}
      </ul>
      <div className='w-full border-t-[0.5px] border-solid border-gray-300 bg-secondary-color px-2 py-2 md:px-4'>
        <Input placeholder='Type a message' inputStyle='pl-4' value={message} onChange={handleChangeInput}>
          <span
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-xl font-bold duration-200 ease-in hover:bg-slate-300'
            onClick={handleSend}
          >
            <TbSend />
          </span>
        </Input>
      </div>
    </div>
  )
}

export default ChatBox
