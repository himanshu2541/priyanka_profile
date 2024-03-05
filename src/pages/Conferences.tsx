import {Animation} from "../animatedRoutes";
import {CONFERENCES} from "../constants";

export const Conferences = () => {
  return (
    <Animation>
      <div className={"flex flex-col max-w-[1200px] mx-auto text-md sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12"}>
        <h1 className={'text-2xl sm:text-3xl lg:text-4xl mt-12 font-bold'}>
          Conferences Talks
        </h1>
        <div className={'mt-8'}>
          <ul className={'list-disc flex flex-col gap-3'}>
            {
              CONFERENCES.map((conference, index) => (

                <li key={index}><span className={'font-medium'}>{conference.line1}</span>
                  <br/>
                  <span>{conference.line2}</span>
                </li>

              ))
            }
          </ul>
        </div>
      </div>
    </Animation>
  );
};
