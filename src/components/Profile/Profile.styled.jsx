import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: 340px;
`;

export const Description = styled.div`
  width: 240px;
`;

export const Avatar = styled.img`
  width: 100px;
`;

export const Name = styled.p`
  text-align: center;
`;

export const Tag = styled.p`
  text-align: center;
`;

export const Location = styled.p`
  text-align: center;
`;

export const Stats = styled.ul`
  width: 302px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;