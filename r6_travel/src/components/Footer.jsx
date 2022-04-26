import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 Japan Travel.</span>
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
      <ul className='social__links'>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsLinkedin />
        </li>
        <li>
          <BsInstagram />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #bced91;
  padding: 2.5rem;
  border-radius: 0.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      ${"" /* color: #07a30c; */}
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;

        &:hover {
          color: darkgreen;
          cursor: pointer;
        }
        svg {
          font-size: 1.3rem;
          transition: 0.3s ease-in-out;
          color: black;
          &:hover {
            color: black;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1020px) {
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
