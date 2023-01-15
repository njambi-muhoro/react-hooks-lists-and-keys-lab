import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return(
    <nav>
{links.map((navbarLinks)=>{
  return(
  <a key={navbarLinks} href={"#"+navbarLinks}> {navbarLinks} </a>)
})}
</nav>
)
}
  
 

        
 



  
    



export default NavBar;
