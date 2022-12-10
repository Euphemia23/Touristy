import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <p className="reditouristy">ReDI Touristy</p>
            </Link>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#recommend">Recommendations</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <Link to="/dataform">
          <button className="btn">Add Attractions</button>
        </Link>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Attractions
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <Link to="/dataform">
              Add Data
            </Link>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

// make the navbar sticky to the top of the page

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  .reditouristy {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
    text-decoration: none;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    .container {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #000000;
      img {
        width: 3rem;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    list-style: none;
    a {
      text-decoration: none;
      font-size: 1.2rem;
      color: #000000;
    }
  }
  .btn {
    padding: 0.5rem 1rem;
    background: #000000;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: #ffffff;
      color: #000000;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    .brand {
      .container {
        font-size: 1.2rem;
      }
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.state ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    z-index: 3;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      list-style: none;
      a {
        text-decoration: none;
        font-size: 1.2rem;
        color: #000000;
      }
    }
  }
`;

