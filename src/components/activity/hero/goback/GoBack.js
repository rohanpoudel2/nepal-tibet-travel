"use client"
import { useRouter } from "next/navigation";

const GoBack = ({ className }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  }
  return (
    <button onClick={handleGoBack} className={`border-2 border-gray-500 rounded-full px-5 py-2 flex gap-2 items-center text-sm active:scale-95 select-none ${className}`}>
      <i className="fa-solid fa-chevron-left" />
      Go Back
    </button>
  )
}

export default GoBack