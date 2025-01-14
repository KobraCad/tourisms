
import { NavLink } from "react-router-dom"


export const Navbar = () => {

    const navLinkStyle = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }

    }
  return (
    <nav>
        <NavLink  style={navLinkStyle} to='/'>Home</NavLink>
        <NavLink style={navLinkStyle} to='/service'>Service</NavLink>
        <NavLink style={navLinkStyle} to='/about'>About</NavLink>
        {/* <NavLink style={navLinkStyle} to='/product:clothes'>Products</NavLink> */}

    </nav>
    
  )
}
