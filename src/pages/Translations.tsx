import {Animation} from "../animatedRoutes";
import {TRANSLATIONS} from "../constants";

export const Translations = () => {
  return (
    <Animation>
      <div className={'max-w-[1200px] mx-auto mt-24 text-md sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12'}>
        <h1 className={'font-bold text-2xl sm:text-3xl lg:text-4xl mb-4'}>Translations</h1>
        <ul className={'list-disc'}>
          {
            TRANSLATIONS.map((translation, i) => {
              return (
                <li key={i} className={''}>
                  {translation}
                </li>
              )
            })
          }
        </ul>
      </div>
    </Animation>
  );
};
