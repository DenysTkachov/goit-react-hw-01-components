import {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableRow,
  TableCell,
} from './TransactionHistory.styled.js';



export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableHeadRow>
      </TableHead>

      <tbody>
        {items.map(transaction => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
