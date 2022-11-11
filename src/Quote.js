import React, { useEffect } from "react";
import { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState([]);

  //Called on component load once
  useEffect(() => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quoteObject) => {
        setQuote(() => {
          return {
            quote: quoteObject.quote,
            author: quoteObject.character,
            anime: quoteObject.anime,
          };
        });
      });
  }, []);

  return (
    <div>
      <div className="quote">{quote.quote}</div>
      <div className="author">{quote.author}</div>
      <div className="anime">{quote.anime}</div>
    </div>
  );
}
