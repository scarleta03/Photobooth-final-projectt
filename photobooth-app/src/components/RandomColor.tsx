import styled from "styled-components";


// import {useState} from "react";


const StyledBlock = styled.div`
 background-color: ${(props)=>props.color};
`
interface RandomColorProps {
    photoTaken: boolean
}

export default function RandomColor({ photoTaken }: RandomColorProps) {
    // const [color] = useState<string>("#" + Math.floor(Math.random() * 0xffffff).toString(16));
    if (!photoTaken) return (<></>)
    return(
        <div>
            <h1>Your color is:</h1>
            <StyledBlock>

            </StyledBlock>
        </div>
    );

}