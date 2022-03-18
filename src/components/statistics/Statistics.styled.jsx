import styled from '@emotion/styled';
import data from 'components/statistics/data.json';
import { setRandomHexColor } from 'components/statistics/setRandomColor';

export const StatSection = styled.section`
  box-shadow: 0px 0px 3px rgb(80, 100, 200);
  margin: auto auto 70px auto;
`;

export const Title = styled.h2`
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  color: rgb(80, 80, 80);
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: flex;
  color: #fff;
  text-shadow: 1px 1px black;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: calc(100% / ${data.length});
  background-color: ${setRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
