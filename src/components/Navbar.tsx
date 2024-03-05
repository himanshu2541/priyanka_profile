import {Link, useLocation} from "react-router-dom";
import {Dropdown} from "./Dropdown.tsx";


interface navlinksProps {
  title: string,
  to: string,
}

export const Navbar = () => {
  const location = useLocation();

  const navigation1: navlinksProps[] = [
    {title: "Home", to: "/"},
    {title: "About Me", to: "/about"},
  ]
  const navigation2: navlinksProps[] = [
    {title: "Conferences", to: "/conferences"},
    {title: "Teaching", to: "/teaching"},
  ]

  const dropDownLink: navlinksProps[] = [
    {title: "Articles", to: "/articles"},
    {title: "Book Reviews", to: "/book-reviews"},
    {title: "Translations", to: "/translations"}
  ]


  return (
    <>
      <div
        className={'h-24 bg-white-primary text-black-primary flex justify-center items-center w-full border-b border-b-gray-600'}>

        <div className={'flex justify-between items-center w-full max-w-[1200px] px-6'}>
          <Link to={'/'}
                className={'font-bold text-2xl'}
          >
            Priyanka.
          </Link>
          <div className={'flex gap-4 '}>
            {
              navigation1.map((link: navlinksProps) => {
                return (<Link
                  to={link.to}
                  key={link.to}
                  className={`${location.pathname === link.to ? 'font-bold' : ''}`}>{link.title}</Link>
                )
              })
            }
            <Dropdown items={dropDownLink} >Publications</Dropdown>

            {
              navigation2.map((link: navlinksProps) => {
                return (<Link
                    to={link.to}
                    key={link.to}
                    className={`${location.pathname === link.to ? 'font-bold' : ''}`}>{link.title}</Link>
                )
              })
            }

          </div>
        </div>
        {/*Logo or name*/}

      </div>
    </>
  );
};
