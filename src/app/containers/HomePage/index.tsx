import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import Footer from "../../components/footer";
import { Marginer } from "../../components/marginer";
import NavBar from "../../components/navbar";
import AboutUs from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import TopCars from "./topCars";
import TopSection from "./topSection";

const PageContainer = styled.div`
${tw`
   flex flex-col items-center  w-full h-full overflow-x-hidden
`}
`;


export default function HomePage() {
    return (
        <PageContainer>
        <NavBar/>
        <TopSection/>
        <Marginer direction="vertical" margin = "4em"/>
        <BookCard/>
        <Marginer direction="vertical" margin = "5em"/>
        <BookingSteps/>
        <Marginer direction="vertical" margin = "5em"/>
        <AboutUs/>
        <Marginer direction="vertical" margin = "5em"/>
       <TopCars/>

       <Marginer direction="vertical" margin = "5em"/>
       <Footer/>
        </PageContainer>
    );
    }
