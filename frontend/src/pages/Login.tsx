import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Helmet, AuthLayout, Button, Input, PasswordInput } from '~/components'
import { CiLock, CiMail } from 'react-icons/ci'

import { commonErrorMessages as erMessages } from '~/utils/constant'
import authApi from '~/api/authApi'
import { commonStore } from '~/store'

import type { LoginRequestType, LoginResponseType } from '~/models'

const schema = yup
  .object({
    email: yup.string().email(erMessages.emailFormat).required(erMessages.require).max(50, erMessages.maxLength(50)),
    password: yup.string().required(erMessages.require).min(8, erMessages.minLength(8))
  })
  .required()

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginRequestType>({ resolver: yupResolver(schema), mode: 'onSubmit' })

  const onSubmit = async (data: LoginRequestType) => {
    try {
      dispatch(commonStore.actions.setLoading(true))
      const res = await authApi.login(data)
      const resData: LoginResponseType = res.data
      Cookies.set('access_token', resData.access_token)
      navigate('/chats')
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

  return (
    <Helmet title='Login'>
      <AuthLayout isLoginPage>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col md:mt-6 lg:mt-8'>
          <Input
            {...register('email')}
            errorText={errors.email?.message}
            type='email'
            placeholder='example@example.com'
            icon={CiMail}
            required
            autoCompleteAsName
          />
          <PasswordInput
            {...register('password')}
            errorText={errors.password?.message}
            placeholder='At least 8 characters'
            icon={CiLock}
            required
            autoCompleteAsName
          />
          <Button type='submit' color='info'>
            Log in
          </Button>
        </form>
      </AuthLayout>
    </Helmet>
  )
}

export default Login
