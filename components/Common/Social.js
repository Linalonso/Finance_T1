import Link from 'next/link'
import BLOG from '@/blog.config'

const Social = () => {
  return (
    <div className='flex gap-4'>

      <Link
        href={`${BLOG.socialLink.telegram}`}
        scroll={false}
        target='_blank'
        aria-label='Telegram'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns='http://www.w3.org/2000/svg'
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
      </Link>

      <Link
        href={`${BLOG.socialLink.twitter}`}
        scroll={false}
        target='_blank'
        aria-label='Twitter'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns='http://www.w3.org/2000/svg'
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </Link>

      <Link
        href={`${BLOG.socialLink.youtube}`}
        scroll={false}
        target='_blank'
        aria-label='Github'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns='http://www.w3.org/2000/svg'
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" /><path d="M10 9l5 3l-5 3z" />
        </svg>
      </Link>

      <Link
        href={`${BLOG.socialLink.linktree}`}
        scroll={false}
        target='_blank'
        aria-label='Linktree'
        className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
      >
        <svg
          className='w-5 h-5'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns='http://www.w3.org/2000/svg'
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 10h16" /><path d="M6.5 4.5l11 11" /><path d="M6.5 15.5l11 -11" /><path d="M12 10v-8" /><path d="M12 15v7" />
        </svg>
      </Link>
            
    </div>
  )
}

export default Social
