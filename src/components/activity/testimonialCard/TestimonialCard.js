import styles from "./testimonialcard.module.scss";
import Image from "next/image";
import { StarRating } from "@/components/ui/starrating";

const TestimonialCard = ({ data }) => {
  const testimonial = data.testimonial;
  return (
    <blockquote
      className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
    >
      <div>
        <StarRating rating={4} />
        <div className="mt-4">
          <span className="text-2xl font-bold text-sky-600 sm:text-3xl">
            {testimonial.customer_review.title}
          </span>
          <p className="mt-4 leading-relaxed text-gray-700 line-clamp-3">
            {testimonial.customer_review.desc}
          </p>
        </div>
      </div>
      <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
        &mdash; {testimonial.customer_name}
      </footer>
    </blockquote>
  )
}

export default TestimonialCard