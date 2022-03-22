import PropTypes from 'prop-types';
import { TD, TR } from 'components/transactions/Transactions.styled';

export const TableRow = ({ type, amount, currency }) => {
  return (
    <TR>
      <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </TR>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
