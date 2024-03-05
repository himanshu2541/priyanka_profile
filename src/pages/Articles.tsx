import {Animation} from "../animatedRoutes";
import {ARTICLE_NAMES, MANUSCRIPT} from "../constants";

export const Articles = () => {
  return (
    <Animation>
      <div className={"flex flex-col max-w-[1200px] mx-auto text-md sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12"}>
        <h1 className={'text-2xl sm:text-3xl lg:text-4xl mt-12 font-bold'}>
          Articles
        </h1>
        <div className={'mt-8'}>
          <ul className={'list-disc flex flex-col gap-3'}>
            {
              ARTICLE_NAMES.map((article, index) => (

                <li key={index}><span className={'font-semibold'}>{article.line01}</span>
                  <br/>
                  <span>{article.line02}</span>
                </li>

              ))
            }
          </ul>

          <h1 className={'text-2xl sm:text-3xl lg:text-4xl mt-12 font-bold'}>
          Manuscripts and Preparation
        </h1>
        <div className={'mt-8'}>
          <ul className={'list-disc flex flex-col gap-3'}>
            {
              MANUSCRIPT.map((manuscript, index) => (

                <li key={index}><span className={''}>{manuscript}</span>
                </li>

              ))
            }
          </ul>

        </div>

      </div>
      </div>

    </Animation>
  );
};
