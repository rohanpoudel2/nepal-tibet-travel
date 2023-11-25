"use client"
import Link from "next/link";

const ToID = () => {
  return (
    <p className="prose prose-a:text-sky-600 mt-5">
      Please choose a <span onClick={() => window.scrollTo(0, document.getElementById("booking").offsetTop - 100)} className="text-sky-600 font-medium underline cursor-pointer" href="#booking">designated date</span> or{" "}
      <Link href="/booking">reach out to us</Link> to arrange private dates or a
      tailor-made itinerary.
    </p>
  )
}

export default ToID