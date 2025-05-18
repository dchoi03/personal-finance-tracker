import React, { useState } from 'react'

export default function AddTransactionForm({ onAdd }) {

  const [amount, setAmount] = useState(0)
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState()

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    onAdd({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    })
    console.log("Added ")
    //Clear form once submitted
    setAmount("");
    setDescription("");
    setCategory("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name='description'
        placeholder='Enter Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
        />
      <input
        type='number'
        name='Amount'
        placeholder='Enter Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>
      <button
        type='submit'
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  )
}
