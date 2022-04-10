import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
    
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }

  ${tw`px-6`};
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export default function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt = "jeep" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
        Offering contemporary styling, power, comfort,
         entertainment and enhanced safety features, 
         the New Jeep® Renegade Sport is a genuine all-rounder.
          Must-have standard features include cruise control, 
          lane departure warning-plus and the UconnectTM 5.0”
         Radio and Bluetooth® handsfree control.




         The Uconnect™ 7” radio offers an efficient and easy to use experience to ensure every driver and passenger has an enhanced journey.
          Apple Carplay and Android Auto allows you to choose the soundtrack to your adventure. 
          Stay connected to your vehicle with Uconnect™ Services, 
          offering increased levels of safety and security as well as peace of mind.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}