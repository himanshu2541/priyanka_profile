import {Animation} from "../animatedRoutes";

export const Teaching = () => {
  return (
    <Animation>
      <div className={'max-w-[1200px] mx-auto mt-24 text-md sm:text-lg md:text-xl lg:text-2xl px-8 md:px-12'}>
        <h1 className={'text-2xl sm:text-3xl lg:text-4xl mt-12 font-bold'}>
          Teaching Experience & Outreach
        </h1>
        <div className={'mt-8'}>
          <div className={'flex justify-between'}>
            <span>Faculty Participant and Representative from DPS Dharan | British Council </span>
            <span>2019</span>
          </div>
          <ul className={'list-disc pl-8 lg:pl-16 mt-4'}>
            <li className={'text-sm sm:text-md md:text-lg lg:text-xl'}>Organized two ‘Beyond the Classroom’ programs for Class 10 students</li>
          </ul>
        </div>

        <div className={'mt-8'}>
          <div className={'flex justify-between'}>
            English Teacher (Classes 8 to 12)
          </div>
          <ul className={'list-disc pl-8 lg:pl-16 text-sm sm:text-md md:text-lg lg:text-xl mt-4'}>
            <li>
              Modi Public School, Siliguri, India (2019-21)
            </li>
            <li>
              Delhi Public School (DPS), Dharan, Nepal (2017-19)
            </li>
            <li>
              Central School (Kendriya Vidyalaya), Sunabeda, India (2016-17)
            </li>
          </ul>
        </div>

      </div>
    </Animation>
  );
};
