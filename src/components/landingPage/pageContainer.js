import React, {useState} from 'react' ;
import styled from 'styled-components';
import Header from './header';
import CardContainer from '../cards/cardContainer';

const PageContainer = styled.div `
display:flex;
justify-content:flex-start;
    width:90%;
    margin-left:3%;
    @media (max-width:750px){
        flex-direction:column;
        width:100%;
        margin-left:0%;
    }
`;


const Page =() =>{
    const [start , setStart] = useState(true)
    const [carouselId , setCarouselId] = useState('')
    const [previous , setPrevious] = useState(carouselId)
    const animate = (value) => {
        setStart(value)


    }
    return(
        <PageContainer>{
        }
        <Header  animateCard = {animate} setCarouselId = {setCarouselId} previous={carouselId} setPrevious={setPrevious} />

        <div>
        <CardContainer  displayed= {start} cardToDisplay={carouselId} setCarouselId={setCarouselId} previousToShut ={previous}/>
        </div> 
        </PageContainer>
    )

}

export default Page;