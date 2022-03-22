import styled from '@emotion/styled';

export const Table = styled.table`
  width: 80%;
  min-width: 270px;
  background-color: #fff;
  color: rgb(150, 150, 150);
  margin: auto;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 0px 2px 3px rgb(80 100 200);
`;

export const TableHeadCss = styled.thead`
  background-color: rgb(60, 150, 240);
  color: #fff;
  text-transform: uppercase;
`;

export const TR = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(230, 230, 250, 0.8);
  }
`;

export const TH = styled.th`
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  &:nth-of-type(2) {
    border-right: 1px solid rgb(220, 220, 220);
    border-left: 1px solid rgb(220, 220, 220);
  }
`;

export const TD = styled.td`
  padding: 10px 0;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(2) {
    border-right: 1px solid rgb(220, 220, 220);
    border-left: 1px solid rgb(220, 220, 220);
  }
`;
