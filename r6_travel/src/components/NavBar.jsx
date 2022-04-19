import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
export default function NavBar() {
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={logo} />
            Land of Morning Calm
          </div>
          <div className='toggle'></div>
        </div>
        <ul>
          <li>
            <a href='#home'>Home</a>{" "}
          </li>
          <li>
            <a href='#services'>About</a>{" "}
          </li>
          <li>
            <a href='#recommend'>Places</a>{" "}
          </li>
          <li>
            <a href='#Testimonials'>Testimonials</a>{" "}
          </li>
        </ul>
        <button>Connect</button>
      </Nav>
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
        color: #07A30C;
        font-size: 1.2rem;
        transition: 0.2ms ease-in-out;
        &:hover {
          color: #08A30C;
          font-weight: 600;
        }
      }
      &:first-of-type {
        a {
          color: #07A30C;
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
    background-color: #07A30C;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #bced91;
      color: black;
    }
  }
`;
