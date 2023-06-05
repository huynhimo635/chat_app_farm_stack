/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'

/**
 * This page just clone from https://tailwindcomponents.com/component/404-page-not-found
 * Use to display when user access with wrong url
 */
function NotFound() {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]'>
      <h1 className='text-9xl font-extrabold tracking-widest text-white'>404</h1>
      <div className='absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm'>Page Not Found</div>
      <button className='mt-5'>
        <a className='group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500'>
          <span className='absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>

          <span className='relative block border border-current bg-[#1A2238] px-8 py-3'>
            {/* <router- to='/'>Go Home</router-> */}
            <Link to='/login'>Go home!</Link>
          </span>
        </a>
      </button>
    </main>
  )
}

export default NotFound
