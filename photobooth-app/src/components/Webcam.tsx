import ReactWebcam from "react-webcam"
import styled from "styled-components";



const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #aa3bff;
    border-radius: 5px;
`

export const StyledButton = styled.button`
    margin: 12px 0;
    padding: 10px 28px;
    background-color: #dd9fe3;
    color: white;
    border-style: outset;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #dd9fe3;
    }
`

const Webcam = ({setCapturedImage} : any) => (
    <StyledDiv>
        <ReactWebcam
            audio={false}
            mirrored
            height={360}
            screenshotFormat="image/jpeg"
            width={640}
            videoConstraints={videoConstraints}
        >
            {/* @ts-expect-error */}
            {({ getScreenshot }) => (
                <>
                    <StyledButton
                        onClick={() => {
                            const imageSrc = getScreenshot()
                            setCapturedImage(imageSrc)
                        }}
                    >
                        Capture photo
                    </StyledButton>
                    {/*<StyledButton onClick={() => setCapturedImage(null)}>*/}
                    {/*    Retake*/}
                    {/*</StyledButton>*/}
                </>
            )}
        </ReactWebcam>
    </StyledDiv>
)

export default Webcam

