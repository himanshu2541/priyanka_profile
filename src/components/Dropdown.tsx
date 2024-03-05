import React, {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

interface DropdownItems {
  title: string;
  to: string;
}

export const Dropdown = ({items, children}: {
  items: DropdownItems[];
  children: React.ReactNode;
}) => {


  const [show, setShow] = useState(false);

  const boxVariants = {
    "hidden": {
      opacity: 0,
    },
    "visible": {
      opacity: 1,
    }
  }

  // useEffect(() => {
  //   const close = () => {
  //     setShow(false);
  //   }
  //   window.addEventListener('click', close)
  //   return () => window.removeEventListener('click', close)
  // })
  return (
    <motion.div className="relative" >
      <motion.button
        onMouseEnter={() => setShow(true)}
        onClick={() => show ? setShow(false) : setShow(true)}
      >{children}</motion.button>
      <motion.div
        variants={boxVariants}
        animate={show ? "visible" : "hidden"}
        onMouseLeave={() => setShow(false)}
        className={'bg-gray-100 absolute top-8 flex flex-col items-center justify-center p-4 rounded-md shadow-sm gap-3 h-40 w-40 border-gray-600 border-[1px]'}
      >

        {
          items.length> 0 &&(
            items.map((item, index) => {
              return (
                <Link to={item.to} className={`text-nowrap`} hidden={!show} key={index}>{item.title}</Link>
              )
            })
          )
        }

      </motion.div>
    </motion.div>
  );
};
