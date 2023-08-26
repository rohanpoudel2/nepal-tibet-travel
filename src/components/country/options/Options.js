import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"


const Options = () => {

  return (
    <div className="flex gap-5 p-5 w-full md:justify-center overflow-scroll sticky top-[100px] bg-white">
      <Link href="#access" className={`${badgeVariants({ variant: "custom" })} md:py-3`}>
        <div className="mt-px">Access to Nepal</div>
      </Link>
      <Link href="#visa" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Visa for Nepal</div>
      </Link>
      <Link href="#transportation" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Transportation</div>
      </Link>
      <Link href="#transportation" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Accommodation</div>
      </Link>
      <Link href="#transportation" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Food</div>
      </Link>
      <Link href="#transportation" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Clothing</div>
      </Link>
      <Link href="#transportation" className={badgeVariants({ variant: "custom" })}>
        <div className="mt-px">Trekking Permits</div>
      </Link>
    </div>
  )
}

export default Options