import { useState } from 'react'
import './App.css'
import RandomMeme from './components/RandomMeme'
import RandomAnimal from './components/RandomAnimal'
import Webcam from './components/Webcam'
import RandomColor from "./components/RandomColor.tsx";
import styled from "styled-components"
import PhotoStrip from "./components/Photostrip.tsx";


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: -20px;
`
const StyledButton = styled.button`
    margin: 20px;
    padding: 10px 30px;
    background-color: #dd9fe3;
    color: white;
    border: 5px outset #b562ba;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #c872d5;
    }
`


const StyledBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
 
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`
const StyledImg = styled.img`
    border: 10px ridge #B562BAFF;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 8px 8px 0px #111;
`
const StyledComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledComponent = styled.div`
    background-color: ${props => props.color};
    width: 400px;
    height: 400px;
    border: 10px ridge #B562BAFF;
    border-radius: 60px;

`

const StyledHeader = styled.header`
    width: 100%;
    background-color: #b562ba;
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`




function App() {
    const [capturedImage, setCapturedImage] = useState('')
    const [randomColor,setRandomColor] = useState('');
    const [randomAnimal, setRandomAnimal] = useState(0);
    const [memeUrl, setMemeUrl] = useState('')

  return (
      <>
          <StyledHeader>Selfie Generator</StyledHeader>
          <div>

              <StyledContainer>
                  <h1>snap a pic</h1>
                  {!capturedImage && (
                      <Webcam
                          changeCapturedImage={setCapturedImage}
                      />
                  )}
                  {capturedImage && <StyledImg src={capturedImage}/>}
                  {capturedImage && <StyledButton onClick={() => setCapturedImage(null)}>Retake</StyledButton>}
              </StyledContainer>
          </div>
          <div className="heyy">
          <StyledBox>
              {capturedImage && (
                  <>

                      <RandomMeme  changeMemeUrl={setMemeUrl} />
                      <StyledComponentWrapper>
                          <RandomColor changeRandomColor ={setRandomColor}/>
                      </StyledComponentWrapper>

                      <RandomAnimal changeRandomAnimal = {setRandomAnimal}/>
                </>
              )}

          </StyledBox>
              {capturedImage && memeUrl && (
                  <PhotoStrip
                      selfieUrl={capturedImage}
                      memeUrl={memeUrl}
                      randomColor={randomColor}
                      catUrl={`https://http.cat/${randomAnimal}`}
                  />
              )}
          </div>

      </>
  )
}

export default App