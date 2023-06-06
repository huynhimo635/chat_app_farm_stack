import { BaseInputProps } from './type'

function BaseInput({ inputStyle, icon: Icon, name = '', type = 'text', children, ...inputProps }: BaseInputProps) {
  const className = `w-full rounded-lg bg-gray-200 pr-2 pl-12 py-3 text-sm duration-300 ease-linear focus:border-primary-btn-color ${inputStyle}`

  return (
    <div className='relative'>
      {Icon && (
        <label htmlFor={name} className='absolute left-2 top-1/2 -translate-y-1/2 rounded-lg bg-secondary-color p-2'>
          <Icon />
        </label>
      )}

      <input type={type} {...inputProps} className={className} />

      {children}
    </div>
  )
}

export default BaseInput
