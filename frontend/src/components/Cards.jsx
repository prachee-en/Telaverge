// src/components/Card.jsx
import React from 'react';

const Card = ({ flight }) => {
  return (
    <div className="card" style={styles.card}>
      <h3 style={styles.title}>{flight.airline}</h3>
      <p style={styles.details}>{flight.origin} → {flight.destination}</p>
      <p style={styles.details}>Date: {flight.date}</p>
      <p style={styles.price}>Price: ${flight.price}</p>
      <button style={styles.button}>Book Now</button>
    </div>
  );
};

// Basic inline styles for the card
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '18px',
    margin: '0 0 10px',
  },
  details: {
    margin: '5px 0',
  },
  price: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
  },
};

export default Card;

