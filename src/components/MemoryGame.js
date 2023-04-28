import React, { useState, useEffect } from "react";
import Card from "./Card";

const MemoryGame = ({ images }) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    initializeCards();
  }, []);

  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTime]);

  const initializeCards = () => {
    let newCards = images
      .concat(images)
      .map((img, index) => ({ id: index, image: img, flipped: false }))
      .sort(() => 0.5 - Math.random());
    setCards(newCards);
  };

  const handleClick = (id) => {
    if (flippedCards.length === 2 || cards[id].flipped) return;

    const newCards = cards.map((card) => {
      if (card.id === id) card.flipped = true;
      return card;
    });

    setCards(newCards);
    setFlippedCards((prev) => [...prev, id]);

    if (!startTime) setStartTime(Date.now());

    if (flippedCards.length === 1) {
      setMoves((prev) => prev + 1);
      if (cards[flippedCards[0]].image === cards[id].image) {
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(
            newCards.map((card) => {
              if (card.id === flippedCards[0] || card.id === id)
                card.flipped = false;
              return card;
            })
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            flipped={card.flipped}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl">Moves: {moves}</h2>
        <h2 className="text-xl">Time: {timeElapsed}s</h2>
      </div>
    </div>
  );
};

export default MemoryGame;
