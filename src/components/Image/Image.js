"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import Image from "next/image"

const ImageComponent = ({ image_link, width, height, alt, className = "", skeletonRadius = "" }) => {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={image_link}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        className={`${className} rounded-lg`}
      />
      {isLoading && <Skeleton className={`w-full h-full absolute top-0 rounded-inherit ${skeletonRadius}`} />}
    </div>
  )
}

export default ImageComponent