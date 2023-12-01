import styled from 'styled-components';

export const List = styled.ul`
  width: 330px;
  margin: 0 auto;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li`
  background-color: white;
  width: 300px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.$status) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return 'white';
    }
  }};
`;

export const Avatar = styled.img`
  border-radius: 4px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
