import { Helmet, Input } from '~/components'

import { HiHome } from 'react-icons/hi'
import { TbSend } from 'react-icons/tb'

function Chats() {
  return (
    <Helmet title='Chat Box'>
      <main className='relative grid h-screen w-screen grid-cols-12'>
        {/* Left Menu */}
        <section className='hidden border-r-[0.5px] border-solid border-gray-300 md:col-span-4 md:block'>
          <div className='flex h-16 w-full items-center justify-between border-b-[0.5px] border-solid border-gray-300 px-2 md:h-20 md:px-4'>
            <p className='text-lg font-semibold'>Chat App</p>
            <div>
              <p>Huynh Nguyen</p>
              <p className='cursor-pointer text-right text-sm text-tertiary-color hover:underline'>Log out</p>
            </div>
          </div>

          <div className='pl-4 '>
            <p className='pt-3 text-sm font-semibold text-tertiary-color'>All Message</p>
            <ul className='pl-4'>
              <li className='px-2 py-1 hover:bg-gray-200 hover:font-semibold'>Huynh Nguyen</li>
              <li className='px-2 py-1 hover:bg-gray-200 hover:font-semibold'>Huynh Nguyen</li>
              <li className='px-2 py-1 hover:bg-gray-200 hover:font-semibold'>Huynh Nguyen</li>
            </ul>
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
          <div className='flex w-full flex-1 flex-col justify-between bg-gray-200 text-sm'>
            <ul className='m-2 h-full overflow-y-auto md:m-4'>
              <li className='py-3 text-left'>
                <div className='flex items-center gap-4'>
                  <p className='font-semibold'>Huynh nguyen</p>
                  <small className='text-tertiary-color'>06/06/2022 11:15</small>
                </div>
                <div className='ml-6 w-max rounded-3xl bg-white px-1 py-2'>1</div>
              </li>
              <li className='py-3 text-right'>
                <div className='mr-2'>
                  <span className='rounded-3xl bg-primary-btn-color px-1 py-2 text-white'>`1`</span>
                </div>
              </li>
              <li className='py-3 text-left'>
                <span className='rounded-3xl bg-white px-1 py-2'>1</span>
              </li>
              <li className='py-3 text-left'>
                <span className='rounded-3xl bg-white px-1 py-2'>1</span>
              </li>
              <li className='py-3 text-left'>
                <span className='rounded-3xl bg-white px-1 py-2'>1</span>
              </li>
            </ul>
            <div className='w-full border-t-[0.5px] border-solid border-gray-300 bg-secondary-color px-2 py-2 md:px-4'>
              <Input placeholder='Type a message' inputStyle='pl-4'>
                <span className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-xl font-bold duration-200 ease-in hover:bg-slate-300'>
                  <TbSend />
                </span>
              </Input>
            </div>
          </div>
        </section>
      </main>
    </Helmet>
  )
}

export default Chats
