import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="relative flex sm:max-w-[16rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <Image
            src="https://images.pexels.com/photos/2856273/pexels-photo-2856273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Blog Card Image"
            width={400}
            height={300}
            className="w-full h-[300px] sm:h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h4 className="block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Trekking Through the Himalayas
          </h4>
          <p className="mt-3 text-sm font-normal leading-relaxed text-gray-700 line-clamp-2 antialiased">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, corporis fugiat placeat veritatis sequi id nihil? Iusto explicabo eligendi, ex in dicta sapiente placeat qui, non itaque, soluta laborum velit.
          </p>
        </div>
        <div className="flex items-center justify-between p-4 pt-2">
          <div className="flex items-center -space-x-3">
            <Image
              src="https://images.unsplash.com/photo-1585422548899-86a408bf6242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
              alt="Blog Card Image"
              width={50}
              height={50}
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center"
            />
          </div>
          <p className="block text-sm font-normal leading-relaxed text-inherit antialiased">
            January 10
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard