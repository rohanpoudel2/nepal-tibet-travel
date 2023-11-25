import { Star } from "@/components/ui/star";
import Link from "next/link";
import QuestionButton from "./QuestionButton/QuestionButton";
import ToID from "./toidlink/ToID";

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
  <ToID />
);

const Sidebar = () => (
  <div className="border-2 border-gray-300 rounded-xl p-5 sticky top-[120px] mb-10 lg:mb-0">
    <PriceInfo />
    <RatingInfo />
    <BookingInfo />
    <div className="space-y-2 mt-5">
      <QuestionButton />
    </div>
  </div>
);

export default Sidebar;
