import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Helmet, AuthLayout, Input, PasswordInput, Button } from '~/components'
import { CiLock, CiMail, CiUser } from 'react-icons/ci'

import { commonErrorMessages as erMessages } from '~/utils/constant'

import type { RegisterRequestType } from '~/models'

const schema = yup
  .object({
    first_name: yup.string().required(erMessages.require).max(20, erMessages.maxLength(20)),
    last_name: yup.string().required(erMessages.require).max(20, erMessages.maxLength(20)),
    email: yup.string().email(erMessages.emailFormat).required(erMessages.require).max(50, erMessages.maxLength(50)),
    password: yup.string().required(erMessages.require).min(8, erMessages.minLength(8)),
    password_confirm: yup.string().required(erMessages.require)
  })
  .required()

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterRequestType>({ resolver: yupResolver(schema), mode: 'onSubmit' })

  const onSubmit = (data: RegisterRequestType) => console.log({ data })

  return (
    <Helmet title='Register'>
      <AuthLayout isLoginPage={false}>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col md:mt-6 lg:mt-8'>
          <Input
            {...register('first_name')}
            errorText={errors.first_name?.message}
            label='First Name'
            placeholder='First Name'
            icon={CiUser}
            autoCompleteAsName
          />
          <Input
            {...register('last_name')}
            errorText={errors.last_name?.message}
            label='Last Name'
            placeholder='Last Name'
            icon={CiUser}
            required
            autoCompleteAsName
          />
          <Input
            {...register('email')}
            errorText={errors.email?.message}
            label='Email'
            type='email'
            placeholder='example@example.com'
            icon={CiMail}
            required
            autoCompleteAsName
          />
          <PasswordInput
            {...register('password')}
            errorText={errors.password?.message}
            label='Password'
            placeholder='At least 8 characters'
            icon={CiLock}
            required
            autoCompleteAsName
          />
          <PasswordInput
            {...register('password_confirm')}
            errorText={errors.password_confirm?.message}
            label='Reconfirm Password'
            placeholder='Repeat password'
            icon={CiLock}
            required
            autoCompleteAsName
          />

          <Button type='submit' color='info'>
            Register
          </Button>
        </form>
      </AuthLayout>
    </Helmet>
  )
}

export default Register
