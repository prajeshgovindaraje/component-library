
import { NavLink,Outlet,useLocation } from "react-router"
import clsx from "clsx"

export default function Header(){

  
  

    return(
        <>
        
        <nav className="myNavBar">
            <NavLink  to="/" className={({isActive})=>(isActive)?"active-link":"link"}>BADGE</NavLink>
            <NavLink  to="banner" className={({isActive})=>(isActive)?"active-link":"link"}>BANNER</NavLink>
            <NavLink  to="card" className={({isActive})=>(isActive)?"active-link":"link"}>CARDS</NavLink>
            <NavLink  to="testimonial" className={({isActive})=>(isActive)?"active-link":"link"}>TESTIMONIALS</NavLink>
        </nav>

        <Outlet/>
        
        </>
    )


}