import "./footer.css"
import linkedin from "../../assests/images/linkedin.png"


function Footer() {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/catherine-sibley-93677926/" target="_blank" rel="noreferrer">
                <img alt="linkedin link" src={linkedin} />
            </a>
            <a>Woodland Consulting LLC</a>
        </footer>
    )
}

export default Footer;