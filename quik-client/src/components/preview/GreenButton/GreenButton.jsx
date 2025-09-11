import React from 'react';
import styles from './PostMessage.module.css';

const PostMessageGreen = ({ message, onSend }) => { const [inputValue, setInputValue] = React.useState(''); const handleSubmit = (e) => { e.preventDefault(); if (inputValue.trim()) { onSend(inputValue); setInputValue(''); } }; return ( <div className={`p-4 ${styles.container}`}> <form onSubmit={handleSubmit} className="flex gap-2"> <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message..." className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" /> <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200" > Send </button> </form> {message && ( <div className="mt-4 p-4 bg-gray-100 rounded-lg"> <p className="text-gray-800">{message}</p> </div> )} </div> ); };

export default PostMessageGreen;
