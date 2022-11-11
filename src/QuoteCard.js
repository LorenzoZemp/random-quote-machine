import React from "react";
import Quote from "./Quote";

export default function QuoteCard() {
  return (
    <div>
      <Quote /> {/* Contains Quote, Author and Anime*/}
      <button>tweet</button>
      <button>random</button>
    </div>
  );
}
