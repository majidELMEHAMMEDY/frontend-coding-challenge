import React,{useState,useEffect}from 'react';
import axios from 'axios'
import Container from './components/Container';
import config from './config'
import './App.css';
import styled from "styled-components";


export const MainContainer = styled.div`
    margin: 0 auto;
    width:100%;
    min-height:100vh;
    background-color: #F2F4F6;
`;

function App() {
  const [Data,setData] = useState([]);
  const [pageIndex,setPageIndex] = useState(1);

  const GenerateStarDate = () =>{
    let date = new Date();
    date.setDate(date.getDate() - 30);
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();
    if(day.length<2)
      day="0"+day;
    if(month.length<2)
      month="0"+month;
    const stringDate = date.getFullYear()+"-"+month+"-"+day;
    return stringDate;
  }

  const Paginate = () =>{
    setPageIndex(pageIndex+1)
  }

  const fetchData = async ()=>{
    const startdate = GenerateStarDate();
    const API_REQUEST=`${config.GITHUB_API_ENDPOINT}?q=created:>${startdate}&sort=stars&order=desc&page=${pageIndex}`;
    const { data } = await axios.get(API_REQUEST);
    setData([...Data,...data.items]);
  }

  useEffect(() => {
    fetchData();
  }, [pageIndex]);




  return (
      <MainContainer>
        <Container onPageChange={Paginate} repositories={Data} className="App"/>
      </MainContainer>
  );
}

export default App;
