import Navtabs from "../Navtabs"
import logo from "../../assets/images/logo/WoodlandConsulting_logo_sm-nog.png"
import "./header.css"

function Header(props) {
return (
<header>
<div className="logozone">
<img src={logo} alt="logo"/>
<h2>Woodland Consulting LLC</h2>
</div>
<Navtabs></Navtabs>
</header>
)};

export default Header;
