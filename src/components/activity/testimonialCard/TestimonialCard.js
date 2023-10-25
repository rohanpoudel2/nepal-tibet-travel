import styles from "./testimonialcard.module.scss";
import Image from "next/image";
import { StarRating } from "@/components/ui/starrating";

const TestimonialCard = ({ data }) => {
  const testimonial = data.testimonial;
  return (
    <div className={styles.card}>
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <Image
            src={testimonial.customer_picture.sizes.medium}
            width={100}
            height={50}
            alt="Narayan Poudel"
            className="relative inline-block h-[50px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {testimonial.customer_name}
              </h5>
              {
                <StarRating rating={testimonial.customers_review_stars} />
              }
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
              {testimonial.customers_job}
            </p>
          </div>
        </div>
        <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {testimonial.customer_review}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard