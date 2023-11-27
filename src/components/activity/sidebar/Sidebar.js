import { Star } from "@/components/ui/star";
import QuestionButton from "./QuestionButton/QuestionButton";
import ToID from "./toidlink/ToID";

const PriceInfo = ({ price, sale_price }) => (
  <div className="text-3xl font-bold flex flex-col">
    <span className="text-xl text-gray-500 line-through">${price}</span>
    <span>
      ${sale_price} <span className="font-normal text-sm">/ per person</span>
    </span>
  </div>
);

const RatingInfo = ({ ratings, reviews }) => (
  <div className="flex items-center mt-2">
    <Star filled={true} />
    <div className="flex items-center gap-1">
      <span className="text-sm font-semibold">{ratings}</span>
      <span className="text-xs">({reviews} reviews)</span>
    </div>
  </div>
);

const BookingInfo = () => (
  <ToID />
);

const Sidebar = ({ prices, ratings, reviews }) => (
  <div className="border-2 border-gray-300 rounded-xl p-5 sticky top-[120px] mb-10 lg:mb-0">
    <PriceInfo price={prices.price} sale_price={prices.sale_price} />
    <RatingInfo ratings={ratings} reviews={reviews} />
    <BookingInfo />
    <div className="space-y-2 mt-5">
      <QuestionButton />
    </div>
  </div>
);

export default Sidebar;
