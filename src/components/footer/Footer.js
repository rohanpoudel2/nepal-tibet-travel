"use client"
import Link from "next/link";
import { useParams } from "next/navigation";

import { useEffect } from "react";
import HomeFooter from "./HomeFooter";
import SlimFooter from "./SlimFooter";

const Footer = () => {
  const params = useParams();

  if (Object.keys(params).length === 0) {
    return (
      <HomeFooter />
    )
  }

  return (
    <SlimFooter />
  )
}

export default Footer