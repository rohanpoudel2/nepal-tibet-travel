import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Facebook from "@/../public/images/facebook.png";
import Instagram from "@/../public/images/Instagram.png";
import X from "@/../public/images/twitter.png";
import Reddit from "@/../public/images/reddit.png";

const ShareDropDown = () => {
  return (
    <div className="px-2 py-1 border-2 border-gray-300  tracking-wide transition-colors duration-300 transform rounded-lg ">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 font-medium outline-none">
          <i className="fa-solid fa-arrow-up-from-bracket" />
          Share
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex items-center gap-2 font-semibold cursor-pointer">
            <Image
              src={Facebook}
              alt="Facebook Icon"
              width={20}
              height={20}
            />
            <span>Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 font-semibold cursor-pointer">
            <Image
              src={Instagram}
              alt="Instagram Icon"
              width={20}
              height={20}
            />
            <span>Instagram</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 font-semibold cursor-pointer">
            <Image
              src={X}
              alt="X Icon"
              width={20}
              height={20}
            />
            <span>X</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 font-semibold cursor-pointer">
            <Image
              src={Reddit}
              alt="Reddit Icon"
              width={20}
              height={20}
            />
            <span>Reddit</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="flex items-center gap-2 font-semibold cursor-pointer">
            <i className="fa-regular fa-copy" />
            Copy Link
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ShareDropDown