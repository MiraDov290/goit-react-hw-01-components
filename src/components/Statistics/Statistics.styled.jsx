import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
  padding: 60px 60px;
   background-color: #00802043;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  width: 240px;
`;

export const StatList = styled.ul`
  width: 302px;
  height: 100px;
  background-color: gainsboro;
  margin: 0 auto;
  padding: initial;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
   color: darkgray;
`;

export const Percentage = styled.span`
  font-size: 16px;
  margin-top: 5px;
`;