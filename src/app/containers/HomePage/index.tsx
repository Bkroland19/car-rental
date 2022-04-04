import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "../../components/navbar";

const PageContainer = styled.div`
${tw`
   flex flex-col items-center  w-full h-full overflow-x-hidden
`}
`;


export default function HomePage() {
    return (
        <PageContainer>
        <NavBar/>
        </PageContainer>
    );
    }
