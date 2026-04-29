import styled from "styled-components";


const StyledRandColor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

interface StyledBlockProps {
    color?: any
}

const StyledBlock = styled.div`
    background-color: ${props => props.color};
    width: 400px;
    height: 400px;
    border: 10px ridge #B562BAFF;
    border-radius: 60px;
`
//

export default function RandomColor({randomColor}: string) {
    return (
        <StyledRandColor>
            <h1>Your Color Is</h1>
            <StyledBlock color={randomColor}/>
        </StyledRandColor>
    );

}