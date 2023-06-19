import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  animation: open 0.3s;

  @keyframes open {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Items = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  font-weight: bold;
  animation: change_item 0.3s;
  display: flex;

  @keyframes change_item {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const BrandComponent = styled.span`
  display: block;
  margin-left: 5px;
  width: fit-content;
  background-color: #ff8716;
`;
