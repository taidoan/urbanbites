import s from "./styles.module.scss"
import Rating from "./Rating"
import Author from "./Author"
import Avatar from "./AuthorAvatar"
import { formatDistanceToNow } from "date-fns"

type ReviewProps = {
  rating: number,
  author: string,
  children: React.ReactNode,
  date: string
}

const Review = ({rating, author, children, date}: ReviewProps) => {
  const parsedDate = parseDate(date);
  const timeAgo = formatDistanceToNow(parsedDate, { addSuffix: true });

  return(
    <div className={s.reviewBody}>
      <Rating rating={rating} />
      {children}
      <div className={s.author}>
        <Avatar fullName={author} />
        <div>
          <Author name={author} />
          <span className={s.date}>{timeAgo}</span>
        </div>
      </div>
    </div>
  )
}

const parseDate = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}


export default Review