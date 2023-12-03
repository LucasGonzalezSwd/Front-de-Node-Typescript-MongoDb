import { Link } from "react-router-dom"

export const NavBar = () => {

  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
    
      });
    }
  };

  return ( 
    <div className="w-screen justify-evenly flex text-white h-[3rem] items-center">
<ul className="w-screen flex justify-evenly ">
    <li> <button onClick={() => scrollToSection("card")} >Create Card</button></li>
    <li> <button onClick={() => scrollToSection("about")} >About Us</button> </li>
    <li> <Link to="https://porfolio-lucas-swd-lucasgonzalezswd.vercel.app/" target="_blank"><button>Portfolio</button></Link> </li>
</ul>
         
         
         
    </div>
  )
}
