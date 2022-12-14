import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  const location = useLocation();	

  useEffect(() => {
    const elementId = location.hash.replace("#", "");
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);


  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 ReDI Touristy by Euphemia Agwa.</span>
      <ul className="links">
      <li>
            <Link to={{ pathname: "/", hash: "#home" }}>Home</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#services" }}>Services</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#recommend" }}>Recommendations</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#testimonials" }}>Testimonials</Link>
          </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
