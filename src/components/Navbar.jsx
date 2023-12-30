import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header sticky top-0 z-10'>
      <NavLink to='/'>
    <img
  src={logo}
  alt='logo'
  className='w-40 h-12 object-contain'
/>

      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact Me
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
