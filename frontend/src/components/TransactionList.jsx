import React from 'react';

export default function TransactionList({ transactions }) {
  return (
    <table className="w-full text-center border gap-4">
      <thead>
        <tr>
          <th className="border-b p-4">Description</th>
          <th className="border-b p-4">Amount</th>
          <th className="border-b p-4">Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.id} className="hover:bg-gray-50">
            <td className="p-2 font-medium">{tx.description}</td>
            <td className="p-2">${tx.amount}</td>
            <td className="p-2 text-gray-500">{tx.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
