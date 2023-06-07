import { Helmet, AuthLayout, Button, Input, PasswordInput } from '~/components'

import { CiLock, CiMail } from 'react-icons/ci'

function Login() {
  return (
    <Helmet title='Login'>
      <AuthLayout isLoginPage>
        <form action='' className='mt-4 flex flex-col md:mt-6 lg:mt-8'>
          <Input name='email' type='email' id='email' placeholder='example@example.com' icon={CiMail} />
          <PasswordInput name='password' id='password' placeholder='At least 8 characters' icon={CiLock} />
          <Button type='submit' color='info'>
            Log in
          </Button>
        </form>
      </AuthLayout>
    </Helmet>
  )
}

export default Login
