import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { Helmet, ChatBox } from '~/components'
import { HiHome } from 'react-icons/hi'

import userApi from '~/api/userApi'
import { commonStore, userStore, useSelector } from '~/store'

import type { UserType } from '~/models'
import conversationApi from '~/api/conversationApi'

function Chats() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [conversations, setConversations] = useState([])

  const userProfile: UserType = useSelector((state) => state.user?.user)

  const handleLogout = () => {
    Cookies.remove('access_token')
    navigate('/sign-in', { replace: true })
  }

  const getProfile = async () => {
    try {
      dispatch(commonStore.actions.setLoading(true))
      const res = await userApi.getProfile()
      const resData = res.data
      dispatch(userStore.actions.setProfile(resData?.user))
    } catch (error) {
      dispatch(
        commonStore.actions.displayNotification({
          type: 'error',
          message: error
        })
      )
      // logout to rest old values
      handleLogout()
    } finally {
      dispatch(commonStore.actions.setLoading(false))
    }
  }

  const getConversations = async () => {
    try {
      dispatch(commonStore.actions.setLoading(true))
      const res = await conversationApi.getAll()
      const resData = res.data
      setConversations(resData?.conversations)
    } catch (error) {
      dispatch(
        commonStore.actions.displayNotification({
          type: 'error',
          message: error
        })
      )
    } finally {
      dispatch(commonStore.actions.setLoading(false))
    }
  }

  useEffect(() => {
    // Check if not has user data yet, call api to get
    if (!userProfile) getProfile()
    getConversations()
  }, [])

  return (
    <Helmet title='Chat Box'>
      <main className='relative grid h-screen w-screen grid-cols-12'>
        {/* Left Menu */}
        <section className='hidden border-r-[0.5px] border-solid border-gray-300 md:col-span-4 md:block'>
          <div className='flex h-16 w-full items-center justify-between border-b-[0.5px] border-solid border-gray-300 px-2 md:h-20 md:px-4'>
            <p className='text-lg font-semibold'>Chat App</p>
            <div>
              <p className='font-semibold capitalize'>{userProfile?.full_name}</p>
              <p
                className='cursor-pointer text-right text-sm text-tertiary-color hover:underline'
                onClick={handleLogout}
              >
                Log out
              </p>
            </div>
          </div>

          <div>
            <div className='pl-4'>
              <p className='cursor-pointer pt-3 font-semibold uppercase text-tertiary-color hover:font-semibold hover:text-primary-color'>
                General #
              </p>
            </div>

            <div className='pl-4'>
              <p className='pt-3 text-sm font-semibold uppercase text-tertiary-color'>All Messages</p>
              <ul className='pl-4'>
                {conversations?.map((value, index) => {
                  const talker = value?.members.find((mem) => mem?.id !== userProfile.id)

                  return (
                    <li
                      key={index}
                      className='cursor-pointer rounded-l-2xl px-2 py-4 hover:bg-gray-200 hover:font-semibold'
                    >
                      {talker?.full_name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className='col-span-full flex flex-col items-start justify-between md:col-span-8'>
          {/* Chat box */}
          <div className='flex h-16 w-full items-center justify-between border-b-[0.5px] border-solid border-gray-300 px-2 md:h-20 md:px-4'>
            <p className='text-lg font-semibold'>Name</p>
            <span className='text-xl md:hidden'>
              <HiHome />
            </span>
          </div>
          <ChatBox />
        </section>
      </main>
    </Helmet>
  )
}

export default Chats
