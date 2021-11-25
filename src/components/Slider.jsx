import styled from 'styled-components'
import {ArrowLeftOutlined} from '@material-ui/icons'
import { sliderItems } from '../data';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    background-color: #fff7f7;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === 'left' && "10px" };
    right: ${props=> props.direction === 'right' && "10px" };
    cursor: pointer;
    opacity: 0.5;
    z-index: 2
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${ props=> props.bg};
`;


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 80%;
`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 10px;
`;

const Title = styled.h1`
    font-size: 70px;
    
`;


const Desc = styled.p`
    margin: 50px 10px 50px 0px;
    
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: 500;
`;

const Button = styled.button`
     padding: 10px;
     font-size: 20px;
     background-color: transparent;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };


    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
            
            {sliderItems.map((item)=>(

             <Slide bg={item.bg} key={item.id}>  
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>

                <InfoContainer>
                    <Title> {item.title}</Title>
                    <Desc>{item.Desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
               </Slide> 

            ))
            } 

            </Wrapper>

             <Arrow  direction="right"  onClick={()=> handleClick("right")}>
                <ArrowLeftOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider

// at 36 min