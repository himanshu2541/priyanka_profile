import {BrowserRouter} from "react-router-dom";
import {AnimatedRoutes} from "./animatedRoutes";
import {Footer, Navbar} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
