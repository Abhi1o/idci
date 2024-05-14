import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

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
              <h4>idci</h4>
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
            <li className=""> <Link href="/" nClick={() => active("home")}>Home</Link>
              {/* <a href="#" o>
                Home
              </a>
              <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="/">IT Company</Link>
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
              <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            <li className="#"><a href="services" onClick={() => active("services")}>
                services
              </a>
              {/* <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="services">Services One</Link>
                </li>
                <li>
                  <Link href="services2">Services Two</Link>
                </li>
                <li>
                  <Link href="service-details">service details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            {/* <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Project
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link href="project-grid">Project Grid</Link>
                </li>
                <li>
                  <Link href="project-masonry">Project Masonry.</Link>
                </li>
                <li>
                  <Link href="project-details">Project Details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("shop")}>
                shop
              </a>
              <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li> */}
            <li className=""><a href="blog" onClick={() => active("blog")}>
                blog
              </a>
              {/* <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div> */}
            </li>
            {/* <li className=""><a href="about" onClick={() => active("blog")}>
                About us
              </a>
              </li> */}
            <li className="dropdown"><a href="contact" onClick={() => active("pages")}>
                Contact us
              </a>
              {/* <ul style={activeSubMenu("pages")}>
                <li>
                  <Link href=""></Link>
                </li>
                <li>
                  <Link href=""></Link>
                </li>
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="faqs">faqs</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="404">404 error</Link>
                
              </ul>
              <div className="dropdown-btn" onClick={() => active("pages")}>
                <span className="fas fa-chevron-down" />
              </div> */}


            </li>

            
                <li className="">
              <a href="faqs" onClick={() => active("blog")}>
                Faqs
              </a>
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
            <h5>idci</h5>
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
          <li className="#"><Link href="/">Home</Link>
            {/* <a href="#">Home</a>
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
            <a href="services">services</a>
            {/* <ul>
              <li>
                <Link href="">Services One</Link>
              </li>
              <li>
                <Link href="services2">Services Two</Link>
              </li>
              <li>
                <Link href="service-details">service details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="">
            <a href="project-grid">client</a>
            {/* <ul>
              <li>
                <Link href="">Client</Link>
              </li>
              <li>
                <Link href="project-masonry">Project Masonry.</Link>
              </li>
              <li>
                <Link href="project-details">Project Details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <a href="blog-details">Client Review</a>
            {/* <ul>
              <li>
                <Link href="shop">shop grid</Link>
              </li>
              <li>
                <Link href="product-details">product details</Link>
              </li>
              <li>
                <Link href="cart">cart page</Link>
              </li>
              <li>
                <Link href="checkout">checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <a href="blog">blog</a>
            {/* <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
          </li>
          <li className="dropdown">
            <a href="contact">Contact Us</a>
            {/* <ul>
              <li>
                <Link href="about">About us</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
              <li>
                <Link href="team">Team</Link>
              </li>
              <li>
                <Link href="faqs">faqs</Link>
              </li>
              <li>
                <Link href="pricing">Pricing Plan</Link>
              </li>
              <li>
                <Link href="404">404 error</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div> */}
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
