import {Animation} from "../animatedRoutes";
import {BOOK_REVIEWS} from "../constants";

export const BookReview = () => {
  return (
    <Animation>
      <div className={'max-w-[1200px] mx-auto mt-24 text-md sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12'}>
        <h1 className={'font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'}>Book Reviews</h1>
        <ul className={'list-disc flex flex-col gap-3'}>
          {
            BOOK_REVIEWS.map((book, i) => {
              return (
                <li key={i} className={''}>
                  {book}
                </li>
              )
            })
          }

        </ul>
      </div>
    </Animation>
  );
};
