import React, { useState } from "react";

function History() {
  const [history, setHistory] = useState([]); // start empty

  return (
    <div className="container">
      <h2>Your Food History</h2>
      {history.length === 0 ? (
        <p className="empty">No history yet. Start scanning foods!</p>
      ) : (
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className="history-card">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
                />
              )}
              <h3>{item.name}</h3>
              <p>Calories: {item.calories} kcal</p>
              <p>Protein: {item.protein} g</p>
              <p>Carbs: {item.carbs} g</p>
              <p>Fat: {item.fat} g</p>
              <p className="date">Date: {item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
