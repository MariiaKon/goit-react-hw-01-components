import PropTypes from 'prop-types';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { Table } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead />
      <tbody>
        {items.map(item => (
          <TableRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
