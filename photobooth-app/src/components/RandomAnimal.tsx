import styled from "styled-components";
import { useState } from "react";

const CatWrapper = styled.div`
    width: 260px;
    min-height: 320px;
    background-color: #6b3d3d;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 1rem;
    margin: 2rem auto;
`;

const CatImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 12px;
`;

const codes = [100, 200, 201, 204, 301, 302, 400, 401, 403, 404, 418, 500];

export default function RandomAnimal(props: { photoTaken: boolean }) {
    const [randomCode] = useState(
        () => codes[Math.floor(Math.random() * codes.length)]
    );

    if (!props.photoTaken) {
        return <CatWrapper>this is your cat</CatWrapper>;
    }

    return (
        <CatWrapper>
            <CatImg
                src={`https://http.cat/${randomCode}`}
                alt={`http cat ${randomCode}`}
            />
            <p>HTTP Cat: {randomCode}</p>
        </CatWrapper>
    );
}