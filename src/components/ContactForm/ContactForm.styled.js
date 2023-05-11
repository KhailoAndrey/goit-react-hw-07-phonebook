import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;  
  color: #3361C3;
  font-style: italic;
`;

export const AddBox = styled.form`
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  width: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h3`
  margin: 8px 0;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color: #7C17DA;
`;

export const AddContactButton = styled.button`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
border-radius: 4px;
background-color: grey;
opacity: 0.7;
cursor: pointer;
width: 70%;
&:hover {
opacity: 1;
color: lightgreen;
  transform: scale(1.2);

}
`;

export const Input = styled.input`
background-color: #ACB5C8;
`