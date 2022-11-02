import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <h3>Main page</h3>
      <ul>
        <Link to="/about">
          <li>about</li>
        </Link>
        <Link to="/mypage">
          <li>mypage</li>
        </Link>
      </ul>
      <Footer />
    </>
  );
};

export default Main;
