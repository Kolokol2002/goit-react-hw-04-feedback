import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-decoration: column;
`;

export const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  width: 100px;
  font-size: 18px;
  transition: background-color 0.3s;
  :hover {
    background-color: #ff8716;
  }
`;
