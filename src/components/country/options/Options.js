import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"


const Options = ({ data }) => {

  return (
    <div className="flex gap-5 p-5 w-full md:justify-center overflow-scroll sticky top-[100px] bg-white">
      {
        data.map((information, i) => (
          <Link href={information.link} className={`${badgeVariants({ variant: "custom" })} md:py-3`} key={i}>
            <div className="mt-px">{information.title}</div>
          </Link>
        ))
      }
    </div>
  )
}

export default Options