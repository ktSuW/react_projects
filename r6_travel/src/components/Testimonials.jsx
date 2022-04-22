import React from "react";
import styled from 'styled-components';
import avatarImage1 from "../assets/avatarImage1.png";
import avatarImage2 from "../assets/avatarImage2.png";
import avatarImage3 from "../assets/avatarImage3.png";
export default function Testimonials() {
  const data = [
    {
      key: 1,
      review:
        "As it was my first trip to Japan, I found so many aspects of the built environment, culture, character of the people, food and scenery fascinating.",
      image: avatarImage1,
      reviewerName: "Lili",
      occupation: "Japan's lover",
    },
    {
      key: 2,
      review:
        "We had a fantastic time in Japan. The itinerary and excursions organised were perfect, and we got to experience so much of Japan.",
      // image: "/assets/avatarImage2.png",
      image: avatarImage2,
      reviewerName: "Phillip & Harry",
      occupation: "Anime fans",
    },
    {
      key: 3,
      review:
        "The scenery was amazing and everything was done to make our experience memorable. We even went out in our kimonos to an evening onsen",
      image: avatarImage3,
      reviewerName: "Sue & Sam",
      occupation: "Own pace travellers",
    },
  ];
  return (
    <Section>
      <div className='title'>
        <h2>Travellers Review</h2>
      </div>
      <div className='testimonials'>
        {data.map((data) => {
          return (
            <div className='testimonial'>
              <p>{data.review}</p>
              <div className='info'>
                <img src={data.image} alt='' />
                <div className='details'>
                  <h4>{data.reviewerName}</h4>
                  <span>{data.occupation}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px;
      }
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          height: 4rem;
          border-radius: 4rem;
          margin: 1rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
