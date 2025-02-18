import { NavLink } from "react-router-dom";
function logo() {
  return (
    <div className='logo'>
        <NavLink to='/'>نشر <span>وظائف</span></NavLink>
    </div>
  )
}

export default logo;
