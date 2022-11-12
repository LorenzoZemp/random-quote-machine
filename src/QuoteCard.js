import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
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
    //Empty Quote and Quote Details
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
    <div className="card">
      <div className="spacer"></div>
      <div className="quote-wrapper">
        <div className="quote">
          <span className="quotation-mark">"</span>
          {quote.quote}
          <span className="quotation-mark">"</span>
        </div>
        <div className="author">
          <span className="bold">Character</span> {quote.author}
        </div>
        <div className="anime">
          <span className="bold">Anime</span> {quote.anime}
        </div>
      </div>
      <div className="spacer"></div>
      <div className="button-wrapper">
        <a
          href={`https://www.twitter.com/intent/tweet?hashtags=AniQuotes&text=${encodeURI(
            quote.quote
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btns"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <button
          onClick={handleRandomClick}
          disabled={
            quote.quote === "" || quote.quote === undefined ? true : false
          }
          className="btns"
        >
          <FontAwesomeIcon icon={faShuffle} />
        </button>
      </div>
    </div>
  );
}
