import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import BasicModal from "./BasicModal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navItems = [
    { title: "HOME", path: "/", className: "home" },
    {
      title: "SERVICES",
      path: "/services",
      className: "services_product_contact",
    },
    {
      title: "OUR PRODUCTS",
      path: "/products",
      className: "services_product_contact",
    },
    {
      title: "CONTACT",
      path:"/BContactUs",
      className: "services_product_contact",
      onclick: handleOpen,
    },
    // {
    //   title: "SIGN IN / SIGN UP",
    //   path: "/sign-in",
    //   className: "services_product_contact",
    // },

    {
      title: "SIGN IN ",
      path: "/BSignIn",
      className: "services_product_contact",
    },

    {
      title: "SIGN UP ",
      path: "/BSignUp",
      className: "services_product_contact",
    }

  ];

 
  return (
    <div className="nav-bar">
      {open && <BasicModal open={open} handleClose={handleClose} />}

      <div className="toolbar" id="Home">
        <img
          src={require("../images/toolbar_coffee.png")}
          className="toolbar_coffee"
        />
         
        <div className="toolbar_text">
          <ul className="desktop-only">
            {navItems.map(
              ({ title, path, className, onclick = false }, index) => (
                <li>
                  <Link
                    onClick={onclick}
                    to={path}
                    className={className}
                  >
                    {title}
                  </Link>
                </li>
              )
            )}
          </ul>
          <ul className="mobile-only">
            <li>
            <a
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
              
               className={'services_product_contact'}
             >
             <MenuIcon />
             </a>
             
            </li>
          </ul>
        
        </div>
        <div className="social_media desktop-only">
          <ul>
            <li>
              <img
                src={require("../images/toolbar_instagram.png")}
                className="instagram"
              />
            </li>
            <li>
              <img
                src={require("../images/toolbar_facebook.png")}
                className="facebook"
              />
            </li>
            <li>
              <img
                src={require("../images/toolbar_twitter.png")}
                className="twitter"
              />
            </li>
            <li>
              <img
                src={require("../images/toolbar_whatsApp.png")}
                className="whatsapp"
              />
            </li>
            <li className=""></li>
          </ul>
        </div>
        <div></div>
      </div>

     

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
       
        <div className="offcanvas-body">
          
          <ul className="mobile-only">
            {navItems.map(
              ({ title, path, className, onclick = false }, index) => (
                <li>
                  <Link
                    onClick={onclick}
                    to={path}
                    spy={true}
                    offset={50}
                    duration={500}
                    className={className}
                  >
                    {title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
