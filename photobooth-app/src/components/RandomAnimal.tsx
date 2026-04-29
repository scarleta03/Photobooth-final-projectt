//Lingyin Li

import { useState } from "react";
import styled from "styled-components";

// Wrapper div that centers the cat card on the page
const CatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

// Styled img tag for the cat photo
const CatImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: 10px ridge #B562BAFF;
    border-radius: 60px;
`;

// All valid HTTP status codes that http.cat has a cat photo for

export default function RandomAnimal({randomAnimal}: string) {
    // Pick a random code once when the component first mounts and never change it

    return (
        <CatWrapper>
            {/* Label above the image */}
            <h1>Your HTTP Cat Picture</h1>

            {/* Fetches the cat image from http.cat using the random code */}
            <CatImg
                src={`https://http.cat/${randomAnimal}`}
                alt={`http cat ${randomAnimal}`}
            />
        </CatWrapper>
    );
}