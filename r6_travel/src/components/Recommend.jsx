import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      key: 1,
      image: Destination1,
      title: "Historic Kyoto",
      subTitle:
        "One of Japan's most visited cities, lovely Kyoto,Japan's most important cultural center ",
      cost: "$100",
      duration: "2 nights",
    },
    {
      key: 2,
      image: Destination2,
      title: "Nara",
      subTitle:
        "Home to a large number of historic buildings, along with important national treasures",
      cost: "$120",
      duration: "2 nights",
    },
    {
      key: 3,
      image: Destination3,
      title: "Chūbu-Sangaku National Park",
      subTitle:
        "One of the country's most spectacular National Parks in the center of Honshu. Paradise for hikers",
      cost: "$100",
      duration: "2 nights",
    },
    {
      key: 4,
      image: Destination4,
      title: "Hokkaido",
      subTitle:
        "Island's largest city,hub of cultural activity, hosting many excellent events and festivals",
      cost: "$100",
      duration: "2 nights",
    },
    {
      key: 5,
      image: Destination5,
      title: "Hakone",
      subTitle:
        "Stunning mountains and tranquil hot spring resorts and open air museum. Georgous scenery",
      cost: "$180",
      duration: "2 nights",
    },
    {
      key: 6,
      image: Destination6,
      title: "Matsumoto Castle, Nagano",
      subTitle:
        "Matsumoto is located in the city of Nagano. Spring is one of the best time to visit",
      cost: "$130",
      duration: "2 nights",
    },
  ];

  const packages = [
    "Weekend getaway",
    "Package Holiday",
    "Group Tour",
    "Long term own pace travel",
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id='destinations'>
      <div className='title'>
        <h2>Destinations</h2>
      </div>
      <div className='packages'>
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='destinations'>
        {data.map((destination) => {
          return (
            <div className='destination'>
              <img src={destination.image} alt='Destination image' />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className='info'>
                <div className='services'>
                  <img src={info1} alt='' />
                  <img src={info2} alt='' />
                  <img src={info3} alt='' />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className='distance'>
                <span>1000 kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #d2f8d2;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;

    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #e5fbe5;
      border-radius: 1.2rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            width: 2rem;
            border-radius: 1rem;
            background-color: #07a30c;
            padding: 0.2rem 0.4rem;
          }
        }
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 760px) {
    .packages {
      ul {
        li {
          padding : 0 0.5rem;
          font-size : 2vh;
          padding-bottom : 1rem;
        }
        .active {
          border-bottom-width : 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns : 1fr;
      padding : 0;
    }
  }
`;
