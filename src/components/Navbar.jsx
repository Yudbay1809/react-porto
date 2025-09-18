import logo from "../assets/YBPLogo.png"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className=" flex flex-shrink-0 items-center">
        <img className=" mx-2 w-16 " src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/yudhabayuprastyo/">
      <FaLinkedin/>
      </a>
      <a href="https://github.com/Yudbay1809">
      <FaGithub/>
      </a>
      <a href="https://www.instagram.com/la._chesism/">
      <FaInstagram/>
      </a>
      <a href="https://wa.me/6285731643104">
      <FaWhatsapp/>
      </a>
    </div>
  </nav>
}

export default Navbar