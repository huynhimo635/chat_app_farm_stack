import { Helmet, SignInLayout } from '~/components'

function Login() {
  return (
    <Helmet title='Login'>
      <SignInLayout>
        <section className='md:w-2/3 lg:w-1/2'>
          {/* Title */}
          <div>
            <h2 className='text-3xl font-bold mb-4 md:mb-8 lg:mb-12'>Welcome back!</h2>
            <span className='text-tertiary-color'>
              Never alone when you have a chat app!
            </span>
          </div>

          {/* Login Form */}
          <form action='' className='my-12 md:my-16 lg:my-24 flex flex-col gap-4'>
            <input type='text' name='' id='' />
            <input type='password' name='' id='' />
            <button type='submit'>Log in</button>
          </form>

          {/* Sign up Text */}
          <p className='text-center text-tertiary-color mt-12 md:mt-16 lg:mt-24'>
            Don't you have an account?{' '}
            <a className='text-blue-700 hover:underline' href='#'>
              Sign up
            </a>
          </p>  
        </section>
      </SignInLayout>
    </Helmet>
  )
}

export default Login
