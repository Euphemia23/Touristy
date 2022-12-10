import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          We recently used this website to plan our vacation, and we were so impressed with the range of attractions it showed us. It made it easy to find things to do in the area, and we were able to discover some hidden gems that we wouldn't have known about otherwise. The website was user-friendly and the information was up-to-date and accurate. We would definitely use it again to plan our next trip!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Euphemia Agwa</h4>
              <span>ReDi School Student</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          This website was a lifesaver when it came to planning our vacation. It showed us so many different options for attractions, and we were able to compare prices and reviews to make the best choices. We had a wonderful time at the attractions we visited, and we couldn't have done it without this website. Highly recommend!
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
            <h4>Euphemia Agwa</h4>
              <span>ReDi School Student</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          We had a great time on our vacation thanks to this website. It made it easy to find and book tickets to the attractions we wanted to see, and the map feature was really helpful for planning our itinerary. We also appreciated the discounts and deals we found on the website. Overall, a fantastic resource for anyone planning a trip.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
            <h4>Euphemia Agwa</h4>
              <span>ReDi School Student</span>
            </div>
          </div>
        </div>
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
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
