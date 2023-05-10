import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
list-style: none;
font-size: 18px;
font-weight: 500;
width: 90%;

`;

export const ListItem = styled.li`
margin-bottom: 10px;
display: flex;
justify-content: space-between;
gap: 8px;
`;

export const Button = styled.button`
border-radius: 4px;
background-color: grey;
opacity: 0.5;
cursor: pointer;
&:hover {
  transform: scale(1.2);
opacity: 1;
color: red;
}
`