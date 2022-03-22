import styled from '@emotion/styled';

export const FriendListCss = styled.ul`
  display: grid;
  grid-gap: 10px;
  width: 80%;
  min-width: 270px;
  margin: auto auto 70px auto;
  padding: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgb(80 100 200);
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  min-height: 76px;
  padding: 15px;
  box-shadow: 2px 2px 5px rgb(80 100 200);
`;

export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin: 0 15px 0 15px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
