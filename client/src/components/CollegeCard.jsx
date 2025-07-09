// src/components/CollegeCard.jsx
import React from 'react';

const CollegeCard = ({ college }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.2s ease',
      transform: 'scale(1)',
    },
    cardHover: {
      transform: 'scale(1.03)',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '15px',
    },
    title: {
      fontSize: '1.2rem',
      color: '#1d4ed8',
      fontWeight: 'bold',
      marginBottom: '6px',
    },
    location: {
      fontSize: '0.95rem',
      color: '#555',
      marginBottom: '6px',
    },
    description: {
      fontSize: '0.9rem',
      color: '#666',
    },
    footer: {
      marginTop: '12px',
    },
    button: {
      display: 'inline-block',
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '10px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'background-color 0.2s',
    },
    buttonHover: {
      backgroundColor: '#1e40af',
    },
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={college.image || 'https://via.placeholder.com/400x200'}
        alt={college.name}
        style={styles.image}
      />
      <h2 style={styles.title}>{college.name}</h2>
      <p style={styles.location}>{college.location}</p>
      <p style={styles.description}>
        {college.description?.slice(0, 100)}...
      </p>
      <div style={styles.footer}>
        <a
          href={`/colleges/${college._id}`}
          style={{
            ...styles.button,
            ...(hovered ? styles.buttonHover : {}),
          }}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default CollegeCard;
