import { useState } from 'react'

import { CiRead as ShowPassIcon, CiUnread as HidePassIcon } from 'react-icons/ci'
import BaseInput from './BaseInput'

import { PassInputProps } from './type'

function PassInput({ showHidePass = false, ...baseInputProps }: PassInputProps) {
  const [showPass, setShowPass] = useState(showHidePass)

  const handlingToggleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <BaseInput {...baseInputProps} type={showPass ? 'text' : 'password'} inputStyle='pr-12'>
      <span
        onClick={handlingToggleShowPass}
        className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 font-bold duration-200 ease-in hover:bg-slate-300'
      >
        {showPass ? <HidePassIcon /> : <ShowPassIcon />}
      </span>
    </BaseInput>
  )
}

export default PassInput
