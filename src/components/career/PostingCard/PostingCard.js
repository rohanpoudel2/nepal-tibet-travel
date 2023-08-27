import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const PostingCard = () => {
  return (
    <div>
      <Separator />
      <div className='flex items-center justify-between py-5'>
        <h3 className='text-xl'>
          Senior Climbing Guide
        </h3>
        <Button className="bg-sky-100 text-sky-600 hover:bg-sky-200">
          Apply Now
        </Button>
      </div>
      <div className='mb-5'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum voluptatum explicabo est officiis dolor possimus, earum sunt excepturi, consectetur iste dicta enim nemo expedita exercitationem nobis dolores distinctio culpa.
        </p>
      </div>
    </div>
  )
}

export default PostingCard