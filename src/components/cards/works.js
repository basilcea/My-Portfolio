import React, {useState} from 'react';
import {WorksInfo} from '../../data'
import Project from './projectcard'
import { FaSignOutAlt } from "react-icons/fa";
import styled from 'styled-components'
const Div = styled.div`
display:flex;
width:80%;
margin:10%;
flex-wrap:wrap;
justify-content:space-evenly;
@media (max-width:1200px){
    justify-content:space-between;
    width:90%;
    margin-left:5%;
}
@media (max-width:1024px){
    justify-content:center;
    width:90%;
    margin-left:5%;
}
@media (max-width:500px){
    justify-content:space-between;
    width:90%;
    flex-direction:column;
    margin-left:5%;
}
`;
const Actiondiv = styled.div`
display :flex;
width:100%;
justify-content:space-between;

`;
const Previous = styled.div`
 text-align: left;
  margin: 0%;
  font-size: 1.5em;
  transform:rotateY(180deg);
`;
const Next = styled.div`
  text-align: right;
  margin: 0%;
  font-size: 1.5em;
`;

const Works  = (props) => {
    const [currentPage , setCurrent] = useState(0)
 

    const goNext =()=>{
        currentPage  < WorksInfo.length-1 && setCurrent(currentPage+1)
        currentPage === WorksInfo.length-1 && props.action(2)
    }
    const goPrevious = ()=>{
        currentPage >0 && setCurrent(currentPage-1)
        currentPage === 0 && props.action(0)
    }
    return(
        <Div> 

        {WorksInfo[currentPage].info.map(work => <Project key = {work.id} 
            {...work} /> )
        }
     
        <Actiondiv>{
        }
        <Previous onClick ={() => goPrevious()}> <FaSignOutAlt /></Previous>
        <Next onClick ={() => goNext()}> <FaSignOutAlt /></Next>
        </Actiondiv>
            </Div>
         
    )
}
export default Works