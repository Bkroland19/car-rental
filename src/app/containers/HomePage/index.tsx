import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
${tw`
   flex flex-col items-center  w-full h-full overflow-x-hidden
`}
`;


export default function HomePage() {
    return (
        <PageContainer>
        <h1>Hello World</h1>
        </PageContainer>
    );
    }
