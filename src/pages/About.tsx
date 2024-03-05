export const About = () => {
  return (
    <>
      <div className={'flex flex-col gap-8 items-center justify-center max-w-[1000px] mx-auto text-center mt-20'}>
        {/*<div>*/}
        {/*  <span className={'text-gray-400'}>Home {`>`} About {`>`}</span>*/}
        {/*</div>*/}
        <h1 className={'text-3xl font-bold'}>About Me!<hr className={'w-full h-1 mt-2 bg-black-primary'} /></h1>
        <p className={'text-xl text-gray-700'}>
          I am a <b>Ph.D. student</b> in the Department of English at <span className={'font-bold text-accent-primary'}>George Washington University</span> in Washington D.C. I received my bachelor’s degree from North Bengal University and master’s and M.Phil. degrees from Central University of Odisha, India. My research interests are: Postcolonial Environmental Literature, South Asian Literature, Borderlands and Migration Studies, Comparative Literature, Gender Studies, and Digital Humanities.
        </p>
      </div>
    </>
  );
};
