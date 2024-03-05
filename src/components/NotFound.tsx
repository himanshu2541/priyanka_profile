import {Link} from "react-router-dom";

export const NotFound = () => {
  return (
    <div className={'flex flex-col gap-2 items-center justify-center w-full h-screen'}>
      <h3 className={'font-semibold text-4xl'}>404</h3>
      <p className={'text-2xl'}>Page Not Found</p>
      <Link to="/" className={'underline text-accent-primary hover:text-red-700'}>Back to Home</Link>
    </div>
  );
};
