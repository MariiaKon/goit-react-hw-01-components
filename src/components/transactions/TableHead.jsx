import { TableHeadCss, TH } from 'components/transactions/Transactions.styled';

export const TableHead = () => {
  return (
    <TableHeadCss>
      <tr>
        <TH>Type</TH>
        <TH>Amount</TH>
        <TH>Currency</TH>
      </tr>
    </TableHeadCss>
  );
};
