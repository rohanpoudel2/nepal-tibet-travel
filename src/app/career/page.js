import PostingCard from '@/components/career/PostingCard/PostingCard'

const Career = () => {
  return (
    <div>
      <div className='md:h-screen flex flex-col gap-[50px] items-center justify-start mt-12'>
        <div className='flex flex-col justify-center items-center gap-2 text-center'>
          <h1 className='text-4xl tracking-wider'>We're Hiring!</h1>
          <span className='text-lg text-gray-700 md:tracking-wider'>We are looking for awesome people to join us</span>
        </div>
        <div className='container w-full'>
          <PostingCard />
          <PostingCard />
          <PostingCard />
        </div>
      </div>
    </div>
  )
}

export default Career