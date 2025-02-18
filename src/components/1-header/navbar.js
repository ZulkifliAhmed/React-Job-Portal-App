import { NavLink } from "react-router-dom";
const Links = [
  {
    id: 1,
    name: "الرئسية",
    path: "/"
  },
  {
    id: 1,
    name: "نصائح",
    path: "/advice"
  },
  {
    id: 1,
    name: "من نحن",
    path: "/about"
  },
  {
    id: 1,
    name: "تواصل معنا",
    path: "/contact"
  },
];
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
       {Links.map(({id , name , path})=>{
        return(
            <li key={id}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        )
       })}
      </ul>
    </nav>
  );
}

export default Navbar;
