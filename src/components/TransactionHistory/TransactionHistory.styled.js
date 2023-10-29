import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  width: 800px;
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

export const TableHeadRow = styled.tr`
  text-align: left;
`;

export const TableHeadCell = styled.th`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;
