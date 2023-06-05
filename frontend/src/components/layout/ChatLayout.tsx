import { PropsWithChildren } from 'react'

const ChatLayout = (props: PropsWithChildren) => {
  return <main className='grid h-screen w-screen grid-cols-12 px-8 md:px-0'>{props.children}</main>
}

export default ChatLayout
