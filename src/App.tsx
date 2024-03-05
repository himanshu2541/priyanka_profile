import {About, Conferences, Home, Teaching} from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout.tsx";
import {NotFound} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path={'conferences'} element={<Conferences />} />
            <Route path={'teaching'}  element={<Teaching />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
