import s from "./styles.module.scss";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const clampedRating = Math.max(0, Math.min(rating, 5));
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < clampedRating ? 'full' : 'empty';
  });

  return (
    <div className={s.rating}>
      <div className={s.starContainer}>
      {stars.map((status, index) => (
        <span
          key={index}
          className={`${s.star} ${status === 'full' ? s.full : ''}`}
        >
          ★
        </span>
      ))}
      </div>
      <span className={s.ratingText}>{` ${rating}/5 Stars`}</span>
    </div>
  );
};

export default Rating;
