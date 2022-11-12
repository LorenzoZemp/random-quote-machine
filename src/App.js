import React from "react";
import QuoteCard from "./QuoteCard";
import "./App.css";

export default function App() {
  return (
    <main>
      <QuoteCard className="quote-card" />
      <div>
        <h4 className="info">
          made by{" "}
          <a href="https://lorenzozemp.com" target="_blank" rel="noreferrer">
            Lorenzo
          </a>
        </h4>
      </div>
    </main>
  );
}
