import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import _ from "lodash";
import history from "../assets/history.png";
import leisure from "../assets/Lesuire.png";
import nature from "../assets/Nature.png";
import memorial from "../assets/Memorial.png";
import museum from "../assets/Museum.png";
import art from "../assets/Art.png";
import star from "../assets/star.png";
import hstar from "../assets/half-star.png";
import { useNavigate } from "react-router-dom";

export default function Recommend() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const images = [art, leisure, history, nature, memorial, museum];
  const selectedImages = [];
   while (selectedImages.length < 3) {
     const randomIndex = Math.floor(Math.random() * images.length);
     const selectedImage = images[randomIndex];
     if (!selectedImages.includes(selectedImage)) {
       selectedImages.push(selectedImage);
     }
   }
 
   useEffect(() => {
     axios.get('http://localhost:8000/attraction')
       .then((response) => {
         // flatten the response data array using lodash
         const flattenedData = _.flattenDeep(response.data.data);
         
         // return random 6 items from the flattened array
         const randomData = _.sampleSize(flattenedData, 6);
         setData(randomData);
       })
     .catch((error) => {
       // handle error
       console.error(error);
     });
 }, []);
 
   return (
     <Section id="recommend">
       <div className="title">
         <h2>Recommended Destinations</h2>
       </div>
       <div className="packages">
       </div>
       <div className="destinations">
         {data.map((destination) => {
           const stars = [];

 
           // Loop through the rating score to create the number of stars needed
           for (let i = 0; i < Math.floor(destination.rating); i++) {
             stars.push(<img src={star} alt="star" key={i} />);
           }
           // If there is a decimal value, add a half star
           if (destination.rating % 1 !== 0) {
             stars.push(<img src={hstar} alt="half star" key={destination.rating} />);
           }
           return (
             <div 
             className="destination"
             onClick={() => navigate("/details", { state: { destination } })
            }
             >
               <img className="destinationImage" src={destination.images[0].url} alt=""/>
               <h3>{destination.name}</h3>
               <p>{destination.description.substring(0,80)}...</p>
               <div className="info">
                 <div className="services">
                 <React.Fragment>
                   {images
                     .sort(() => 0.5 - Math.random())
                     .slice(0, 3)
                     .map((image, index) => (
                       <img src={image} key={index} alt="" />
                     ))}
                 </React.Fragment>
                 </div>
                 <span className="stars">
                   {stars}
                 </span>
               </div>
               <div className="distance">
                 <span>{destination.address.city}</span>
                 <span>{destination.address.state}</span>
               </div>
             </div>
           );
         })}
       </div>
     </Section>
   );
 }
 
 const Section = styled.section`
   padding: 2rem 0;
   .title {
     text-align: center;
     color: #4468E2;
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
         border-bottom: 0.5rem solid #8338ec;
       }
     }
   }
   .destinationImage {
     width: 100%;
     height: 30vh;
     object-fit: cover;
     border-radius: 1rem;
   }
   .stars {
     display: flex;
     justify-content: flex-end;
     gap: 0.2rem;
     width: 5%;
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
       background-color: #8338ec14;
       border-radius: 1rem;
       transition: 0.3s ease-in-out;
       &:hover {
         transform: translateX(0.4rem) translateY(-1rem);
         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         cursor: pointer;
       }
       img {
         width: 100%;
       }
       .info {
         display: flex;
         align-items: center;
         .services {
           display: flex;
           gap: 0.3rem;
           img {
             border-radius: 1rem;
             background-color: #4d2ddb84;
             width: 2rem;
             /* padding: 1rem; */
             padding: 0.3rem 0.4rem;
           }
         }
         display: flex;
         justify-content: space-between;
       }
       .distance {
         display: flex;
         justify-content: space-between;
       }
     }
    }
   @media screen and (min-width: 280px) and (max-width: 768px) {
     .packages {
       ul {
         li {
           padding: 0 0.5rem;
           font-size: 2vh;
           padding-bottom: 1rem;
         }
         .active {
           border-bottom-width: 0.3rem;
         }
       }
     }
     .destinations {
       grid-template-columns: 1fr;
       padding: 0;
     }
   }
 `;
 