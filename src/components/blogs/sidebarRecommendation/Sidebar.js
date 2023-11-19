import { Fragment } from "react";
import Link from "next/link"

const Sidebar = ({ top = false, data }) => {
  if (data) {
    return (
      <div className={`mt-8 lg:w-1/4 lg:mt-0 lg:px-6 ${top ? 'hidden lg:block' : "block lg:hidden"}`}>
        {
          data.recommended.map((d, i) => (
            <Fragment key={i}>
              <div>
                <Link href={`/blogs/${d.post_name}`} className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500" target="_blank" >
                  <h3 className="text-sky-500 capitalize">{d.post_title}</h3>
                </Link>
              </div>
              <hr className="my-6 border-gray-200 " />
            </Fragment>
          ))
        }
        {
          data.others.map((d, i) => (
            <Fragment key={i}>
              <div>
                <Link href={d.url} className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500" target="_blank" >
                  <h3 className="text-sky-500 capitalize">{d.title}</h3>
                </Link>
              </div>
              <hr className="my-6 border-gray-200 " />
            </Fragment>
          ))
        }
      </div>
    )
  }
  return ""
}

export default Sidebar