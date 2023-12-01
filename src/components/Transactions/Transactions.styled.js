import styled from 'styled-components';

export const Table = styled.table`
  width: 740px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;
  pading: 0;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 10px;
  background-color: #edf1f4;

  font-size: 19px;
  width: calc(100% / 3);
  border-collapse: collapse;
`;

export const Tr = styled.tr`

text-transform: capitalize;
  color: #727f8b;
    background-color: white;
    height: 40px;
    text-align: center;

    &:nth-child(even){
        color: #5B5859;
          background-color: #edf1f4;;`;

export const Td = styled.td`
  border-collapse: collapse;
`;
