import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 340px;
  margin: auto;
  padding: 80px 60px;
  background-color: #00802043;
  border-radius: 10px;
`;

export const Description = styled.div`
  width: 190px;
  height: 220px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  width: 100px;
  display: block;
  margin: 0 auto 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 15px;
  color: darkgray;
`;

export const Location = styled.p`
  text-align: center;
  color: darkgray;
`;

export const Stats = styled.ul`
  width: 302px;
  height: 100px;
  background-color: gainsboro;
  margin: 0 auto;
  padding: initial;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
   margin-bottom: 10px;
   color: darkgray;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

`;