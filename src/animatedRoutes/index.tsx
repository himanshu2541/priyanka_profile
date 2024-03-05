import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import {Layout} from "../pages/Layout.tsx";
import {About, BookReview, Conferences, Home, Teaching, Translations} from "../pages";
import {NotFound} from "../components";
import React from "react";
import {motion} from "framer-motion";
import {Articles} from "../pages";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path={'conferences'} element={<Conferences />} />
            <Route path={'teaching'}  element={<Teaching />} />
            <Route path={'publications/articles'} element={<Articles />} />
            <Route path={'publications/translations'} element={<Translations />} />
            <Route path={'publications/book-reviews'} element={<BookReview />} />
            <Route path={'teaching'} element={<Teaching />} />
            <Route path={'conferences'} element={<Conferences />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}




export const Animation = ({children} : {children: React.ReactNode;}) => {
  return (
    <motion.div
      initial = {{opacity: 0, scale: 0.90, y:50}}
      animate={{opacity: 1, scale: 1, y:0}}
      transition={{duration: 0.2}}
    >
      {children}
    </motion.div>
  )
}
