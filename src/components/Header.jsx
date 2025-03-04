
import { Link,Outlet } from "react-router"

export default function Header(){


    return(
        <>
        
        <nav className="myNavBar">
            <Link to="/">Badge</Link>

            <Link to="banner">Banner</Link>
            <Link to="card">Cards</Link>
            <Link to="testimonial">Testimonils</Link>
        </nav>

        <Outlet/>
        
        </>
    )


}