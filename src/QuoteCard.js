import React, { useEffect } from "react";
import { useState } from "react";

export default function QuoteCard() {
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

  //Handle Random Click Event
  function handleRandomClick(event) {
    setQuote(() => {
      return {
        quote: "",
        author: "",
        anime: "",
      };
    });
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
  }

  return (
    <div>
      <div className="quote-wrapper">
        <div className="quote">{quote.quote}</div>
        <div className="author">Character: {quote.author}</div>
        <div className="anime">Anime: {quote.anime}</div>
      </div>
      <button>
        <a
          href={`https://www.twitter.com/intent/tweet?hashtags=AniQuotes&text=${encodeURI(
            quote.quote
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          tweet
        </a>
      </button>
      <button
        onClick={handleRandomClick}
        disabled={
          quote.quote === "" || quote.quote === undefined ? true : false
        }
      >
        random
      </button>
    </div>
  );
}
