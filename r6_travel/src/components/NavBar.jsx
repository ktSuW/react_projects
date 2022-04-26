import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function NavBar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={logo} />
            日本
          </div>
          <div className='toggle'>
            {navbarState ? (
              <VscChromeClose
                onClick={() => {
                  setNavbarState(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  setNavbarState(false);
                }}
              />
            )}
          </div>
        </div>
        <ul>
          <li>
            <a href='#hero'>Home</a>{" "}
          </li>
          <li>
            <a href='#destinations'>Destinations</a>{" "}
          </li>
          <li>
            <a href='#services'>Services</a>{" "}
          </li>
          <li>
            <a href='#testimonials'>Testimonials</a>{" "}
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href='#hero' onClick={() => setNavbarState(false)}>
              Home
            </a>{" "}
          </li>
          <li>
            <a href='#destinations' onClick={() => setNavbarState(false)}>
              Destinations
            </a>{" "}
          </li>
          <li>
            <a href='#services' onClick={() => setNavbarState(false)}>
              Services
            </a>{" "}
          </li>
          <li>
            <a href='#testimonials' onClick={() => setNavbarState(false)}>
              Testimonials
            </a>{" "}
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    .toggle {
      display: none;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: #07a30c;
        font-size: 1.2rem;
        transition: 0.2ms ease-in-out;
        &:hover {
          color: #08a30c;
          font-weight: 600;
        }
      }
      &:first-of-type {
        a {
          color: #07a30c;
          font-weight: 700;
        }
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    font-weight: 600;
    background-color: #07a30c;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #bced91;
      color: black;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul,
    button {
      display: none;
    }
  }
`;


const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 100%;
  height : 30vh;
  align-items : center;
  transition : 0.3ms ease-in-out;
  top : ${({state}) => state ? "50px" : "-400px"};
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        color : #023e8a;
        font-weight : 700;
      }
    }
  }
`;