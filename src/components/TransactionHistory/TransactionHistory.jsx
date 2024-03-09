import React from 'react'
import css from './TransactionHistory.module.css';
function TransactionHistory({ transactionsHistory }) {
    const operationClasses = {
        withdrawal: css.withdrawalClass,
        invoice: css.invoiceClass,
        payment: css.paymentClass,
        deposit: css.depositClass,
    }
  return (
      <div>
<table className={css.tableDeco}>
  <thead>
    <tr className={css.tableHeader}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactionsHistory.map((transactionHistory)=>{return <tr key={transactionHistory.id} className={operationClasses[transactionHistory.type] }>
        <td className={css.transactionType}>{transactionHistory.type}</td>
      <td>{transactionHistory.amount}</td>
      <td>{transactionHistory.currency}</td>
    </tr>})}
   
  </tbody>
</table>
</div>
  )
}

export default TransactionHistory