import React, { useState, useEffect } from "react";
import { QuoteC } from "./components/QuoteC";
import Spinner from './components/Spinner';

const initialQuote = {
  text: '',
  author: '',
}

function App() {
  
  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(true)

  const updateQuote = async () => {
    setLoading(true)

    const url = 'https://www.breakingbadapi.com/api/quote/random';
    const res = await fetch(url);
    const [data] = await res.json();
    
    setQuote({
      text: data.quote,
      author: data.author
    })

    setLoading(false)
  }

  useEffect(() => {
    updateQuote();
  }, [])
  

  return (
    <div className="app">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      { loading ? <Spinner/> : <QuoteC quote={quote}/> }

      <button onClick={() => updateQuote()}> next </button>
    </div>
  );
}

export default App;
