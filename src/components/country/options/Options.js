import Link from "next/link";
import Divider from "@/components/ui/divider/Divider";

const Options = ({ data, title = "Nepal Information" }) => {
  if (title !== "Nepal Information") {
    return (
      <>
        <h2 className="text-3xl leading-tight mb-1">{title}</h2>
        <Divider />
        <div className="flex flex-wrap gap-5 mt-10">
          {
            data.map((information, i) => (
              <Link key={i} href={information.link.url} target="_blank" className={`w-fit break-keep bg-sky-500 px-3 py-1 font-semibold text-white rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300`} >
                <span className="mt-px" style={{ whiteSpace: 'nowrap' }}>{information.link.title}</span>
              </Link>
            ))
          }
        </div>
      </>
    )
  }
  return <div className="container">
    <h2 className="text-3xl leading-tight mb-1">{title}</h2>
    <Divider />
    <div className="flex flex-wrap gap-5 mt-10">
      {
        data.map((information, i) => (
          <Link key={i} href={information.link.url} target="_blank" className={`w-fit break-keep bg-sky-500 px-3 py-1 font-semibold text-white rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300`} >
            <span className="mt-px" style={{ whiteSpace: 'nowrap' }}>{information.link.title}</span>
          </Link>
        ))
      }
    </div>
  </div>
}

export default Options;
