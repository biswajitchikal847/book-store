import { Link } from "react-router-dom";
import "./Navbar.css"

const links = [
  {
    title: "Home",
    link: "/",
  },
  //   add the other link as well
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div className="Navbar">
      {links.map((el,index) => (
        <Link to={el.link} key={index}>
          <p>{el.title}</p>
        </Link>
      ))}
    </div>
  );
};