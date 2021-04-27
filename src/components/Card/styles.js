import styled from 'styled-components'

export const CardWraper = styled.div`
  display:flex;
  padding: 2rem;
  box-sizing:border-box;
  margin:20px 0;
  background: #fff;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #DADDE1;
  border-radius: 5px;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.11);
  p {
    color: #707070;
    padding:10px;
  }
  h3 {
    color: #000;
    margin-top:0;
  }

`;

export const Description = styled.div`
    margin-left:25px;
    
`;

export const Avatar = styled.img`
    width:120px;
    border-radius: 50%;
    background-color: #F2F4F6;
`;

export const Badge = styled.span`
    background-color:#FAFBFC;
    border-radius:5px;
    border-style: solid;
    border-width: 1px;
    border-color: #DADDE1;
    padding:5px;
    margin:5px 10px;
    color: #000;
    text-decoration: none;
  
`;

export const SubmissionDetails = styled.span`
  color: #707070;
`

  

