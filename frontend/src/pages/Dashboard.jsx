import React, { useState } from 'react'
import Header from '../components/Header'
import AddTransactionForm from '../components/AddTransactionForm'
import TransactionList from '../components/TransactionList';

export default function Dashboard() {

  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    console.log("New transaction added:", newTransaction);
    setTransactions(prev => [...prev,newTransaction]);
  }

  return (
    <div>
      <Header/>
      <AddTransactionForm onAdd={handleAddTransaction} />
      <TransactionList transactions={transactions}/>
    </div>
  )
}
