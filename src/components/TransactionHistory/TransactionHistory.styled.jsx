import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  border: 3px solid black;
  width: 340px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color:  #00802043;
    font-weight: bold;
  }

  & td {
    background-color: white;
  }

  & tr:nth-of-type(even) {
    background-color: lightblue;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }
`;