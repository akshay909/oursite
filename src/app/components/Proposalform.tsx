"use client"
import { useState } from 'react';
export default function Proposalform() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from reloading the page
    setSubmittedValue(inputValue); // Update the state with the submitted value
    setInputValue(''); // Clear the input after submission
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="inputField"
          type="text"
          className='px-3'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Your website"
        />
        <button className='mainbtn' type="submit">Send Me a Proposal</button>
      </form>
      {/* {submittedValue && (
        <div>
          <h2>You submitted: {submittedValue}</h2>
        </div>
      )} */}
    </>
  );
}