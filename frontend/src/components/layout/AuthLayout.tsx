import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '~/components'
import { loginPageInfo, registerPagePageInfo } from '~/utils/constant'

import BgImage from '~/assets/images/login-img.png'
import { FcGoogle } from 'react-icons/fc'

interface Props extends PropsWithChildren {
  isLoginPage: boolean
}

const AuthLayout = ({ isLoginPage = false, children }: Props) => {
  const pageInfo = isLoginPage ? loginPageInfo : registerPagePageInfo
  return (
    <main className='grid h-screen w-screen grid-cols-12 gap-4 px-8 md:px-0'>
      <section className='hidden bg-gray-100 md:col-span-5 md:flex md:items-center md:justify-center'>
        <img src={BgImage} alt='Sign In / Sign Up Background image' className='w-4/5 object-cover' />
      </section>
      <section className='col-span-full flex h-full flex-col items-center justify-center gap-2 md:col-span-7'>
        <section className='w-4/5 md:w-2/3 lg:w-1/2'>
          {/* Title */}
          <div>
            <h2 className='mb-4 text-3xl font-bold md:mb-4 lg:mb-6'>{pageInfo.title}</h2>
            <span className='text-tertiary-color'>{pageInfo.helpText}</span>
          </div>

          {/* Login/Register form */}
          {children}

          {/* Login with Google account */}
          <div className='mb-8 mt-6'>
            <Button type='button' variant='outlined' color='info' startIcon={FcGoogle}>
              Sign in with Google
            </Button>
          </div>

          {/* Sign up Text */}
          {isLoginPage && (
            <p className='text-center text-tertiary-color '>
              Don't you have an account?{' '}
              <Link to='/sign-up' className='text-blue-700 hover:underline'>
                Sign up
              </Link>
            </p>
          )}
        </section>
      </section>
    </main>
  )
}

export default AuthLayout
