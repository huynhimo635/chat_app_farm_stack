import { PropsWithChildren } from 'react'

import BgImage from '~/assets/images/login-img.png'

const SignInLayout = (props: PropsWithChildren) => {
  return (
    <main className='h-screen w-screen px-8 md:px-0 grid grid-cols-12 gap-4'>
      <div className='hidden md:flex md:justify-center md:items-center md:col-span-5 bg-gray-100'>
        <img src={BgImage} alt="Sign In / Sign Up Background image" className='object-cover w-4/5' />
      </div>
      <div className='col-span-full md:col-span-7 flex flex-col justify-center items-center gap-2 h-full'>{props.children}</div>
    </main>
  )
}

export default SignInLayout
