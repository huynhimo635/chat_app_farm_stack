import { PropsWithChildren } from 'react'

import BgImage from '~/assets/images/login-img.png'

const SignInLayout = (props: PropsWithChildren) => {
  return (
    <main className='grid h-screen w-screen grid-cols-12 gap-4 px-8 md:px-0'>
      <section className='hidden bg-gray-100 md:col-span-5 md:flex md:items-center md:justify-center'>
        <img src={BgImage} alt='Sign In / Sign Up Background image' className='w-4/5 object-cover' />
      </section>
      <section className='col-span-full flex h-full flex-col items-center justify-center gap-2 md:col-span-7'>
        {props.children}
      </section>
    </main>
  )
}

export default SignInLayout
