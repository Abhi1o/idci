import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Image from "next/image";
import logo from "../../../public/assets/CompanyLogo/COMAsset1.png";
import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <Image src={logo} alt="logo" width={100}/>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="">
              
              <Link href="/" onClick={() => active("home")}>
                Home
              </Link>
            </li>
            <li className="#">
              <Link href="services" onClick={() => active("services")}>
                services
              </Link>
            </li>
            <li className="">
             <Link href="blog" onClick={() => active("blog")}>
                blog
             </Link>
            </li>
            <li className="dropdown">
             <Link href="contact" onClick={() => active("pages")}>
                Contact us
             </Link>
            </li>
            <li className="">
             <Link href="faqs" onClick={() => active("blog")}>
                Faqs
             </Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
        <Link href="/">
              <Image src={logo} alt="logo" width={0}/>
            </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="#">
            <Link href="/">Home</Link>
            {/*<Link href="#">Home</a>
            <ul>
              <li>
                
              </li>
              <li>
                <Link href="index2">IT Solutions</Link>
              </li>
              <li>
                <Link href="index3">IT Services</Link>
              </li>
              <li>
                <Link href="index4">IT Agency</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
           <Link href="services">services</Link>
          </li>
          <li className="">
           <Link href="client">client</Link>
          </li>
          <li className="dropdown">
           <Link href="client-review">Client Review</Link>
          </li>
          <li className="dropdown">
           <Link href="blog">blog</Link>
          </li>
          <li className="dropdown">
           <Link href="contact">Contact Us</Link>
          </li>
          <li>
            <Link href="faqs">Faqs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
