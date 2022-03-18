import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 270px;
  margin: auto auto 70px auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgb(80, 100, 200);
  font-size: 14px;
  font-weight: 500;
  color: rgb(150, 150, 150);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 100%;
`;

export const Avatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: rgb(60, 60, 60);
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
`;

export const Stats = styled.ul`
  display: inline-flex;
  width: 100%;
  background-color: rgb(240, 240, 240);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: rgb(60, 60, 60);
`;

export const StatsList = styled.li`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(270px / 3);
  border: 1px solid rgb(220, 220, 220);
  border-bottom: none;
`;
