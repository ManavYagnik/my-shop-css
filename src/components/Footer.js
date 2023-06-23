import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { useLocation } from "react-router-dom";

function Footer() {

  const { pathname } =useLocation()
  if (pathname === "/contact" || pathname === "/users"){
     return(<div></div>)
   }
else{
    return (
      <div className="Footer">
        <div className="w3-amber  w3-panel w3-padding-64 w3-center w3-orange t">
       <Box sx={{ color: "red"}}> Copyright ©  2023 Manav Yagnik. All rights reserved. <div className="icons"> <Link to ="https://www.facebook.com/FortuneFoods"> <FacebookIcon /> </Link>  <Link to="fortune@adaniwilmar.in">  </Link> </div></Box>
              
            </div>

        

      </div>
    );
  }
}
  export default Footer;