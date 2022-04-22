import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save money and get amazing discount!",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle: "All our partners hotels and accommodation are covid safe!",
    },

    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        "There are variety of payment methods. Pick your preferred payment method!",
    },
    {
      icon: service4,
      title: "Find the best destination",
      subTitle:
        "There are many hotels near your best destination. Select your choice!",
    },
  ];
  return (
    <Section id='services'>
      <div className='title'>
        <h2>Our Services</h2>
      </div>
      <div className='services'>
        {data.map((service) => {
          return (
            <div className='service'>
              <div className='icon'>
                <img src={service.icon} alt='' />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction :column;
  .title {
    text-align: center;
  }
  .services {
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    .service {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;
      background-color: #d2f8d2;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .icon {
        img {
          height: 2.5rem;
        }
      }
    }
  }
`;
