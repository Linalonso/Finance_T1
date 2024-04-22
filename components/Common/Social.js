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
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
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
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z' />
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
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d="m14.792 10.775l-3.668-2.112A1.417 1.417 0 0 0 9 9.89v4.222c-.003.506.267.974.706 1.224a1.41 1.41 0 0 0 1.419.002l3.667-2.112a1.413 1.413 0 0 0 0-2.45zm-.5 1.582l-3.666 2.113a.414.414 0 0 1-.419 0a.408.408 0 0 1-.207-.36V9.89a.408.408 0 0 1 .207-.359a.402.402 0 0 1 .418 0l3.667 2.113a.41.41 0 0 1 0 .714zM19 4H5a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V7a3.003 3.003 0 0 0-3-3zm2 13a2.003 2.003 0 0 1-2 2H5a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2h14a2.003 2.003 0 0 1 2 2v10z"/>
        </svg>
      </Link>

    </div>
  )
}

export default Social
