import { Star } from "./star";

export const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
};
