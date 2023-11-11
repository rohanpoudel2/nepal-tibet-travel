import { blogCardDate } from "@/utils/dates";

const Terms = ({ title, updatedOn, content }) => {
  return (
    <div className='h-full'>
      <div className='bg-[#47A5CF]'>
        <div className='container py-[50px]'>
          <div className='text-white'>
            <h1 className='text-3xl'>{title}</h1>
            <h3 className='text-base font-normal'>Last Updated: {blogCardDate(updatedOn, true)}</h3>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="prose lg:prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </div>
  )
}

export default Terms