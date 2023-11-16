import { Star } from "@/components/ui/star";
import Link from "next/link";

const PriceInfo = () => (
  <div className="text-3xl font-bold flex flex-col">
    <span className="text-xl text-gray-500 line-through">$1800</span>
    <span>
      $1200 <span className="font-normal text-sm">/ per person</span>
    </span>
  </div>
);

const RatingInfo = () => (
  <div className="flex items-center mt-2">
    <Star filled={true} />
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold">4.8</span>
      <span className="text-xs">(100 reviews)</span>
    </div>
  </div>
);

const BookingInfo = () => (
  <p className="prose prose-a:text-sky-600 mt-5">
    Please choose a <a href="#booking">designated date</a> or{" "}
    <Link href="/booking">reach out to us</Link> to arrange private dates or a
    tailor-made itinerary.
  </p>
);

const SidebarButton = ({ color, label }) => (
  <button
    className={`bg-${color}-500 w-full p-2 font-semibold rounded-lg text-white hover:bg-${color}-600 focus:outline-none focus:ring focus:ring-${color}-300 focus:ring-opacity-80`}
  >
    {label}
  </button>
);

const Sidebar = () => (
  <div className="border-2 border-gray-300 rounded-xl p-5 sticky top-[120px] mb-10 lg:mb-0">
    <PriceInfo />
    <RatingInfo />
    <BookingInfo />
    <div className="space-y-2 mt-5">
      <SidebarButton color="green" label="Ask a question" />
      <SidebarButton color="orange" label="Plan your custom trip" />
    </div>
  </div>
);

export default Sidebar;
