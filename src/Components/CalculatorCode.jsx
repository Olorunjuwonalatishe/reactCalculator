import React, { useState } from 'react';

const CalculatorCode = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay((prevDisplay) =>
        parseFloat(eval(prevDisplay).toFixed(6)).toString()
      );
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleDelete = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };

  const handlePercentage = () => {
    setDisplay((prevDisplay) => (parseFloat(prevDisplay) / 100).toString());
  };

  const handleOperation = (operation) => {
    setDisplay((prevDisplay) => prevDisplay + operation);
  };

  const handleDecimal = () => {
    // Prevent adding multiple decimal points
    if (!display.includes('.')) {
      setDisplay((prevDisplay) => prevDisplay + '.');
    }
  };

  // Create an array of numbers from 0 to 9
  const numbers = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blueviolet',
      }}
    >
      <div
        className="container"
        style={{
          height: '650px',
          width: '400px',
          background: 'black',
          borderRadius: '12px',
          padding: '3rem',
          border: '10px ridge rgba(28, 19, 67, 0.641)',
        }}
      >
        <div
          id="input"
          className="result"
          style={{
            padding: '2rem 1rem 0 0',
            width: '100%',
            height: '5rem',
            background: 'white',
            textAlign: 'right',
            borderRadius: '12px',
            fontSize: '1.5rem',
            fontWeight: 300,
          }}
        >
          {display}
        </div>
        <div
          className="buttons"
          style={{
            height: '75%',
            width: '100%',
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // Display buttons in 4 columns
            gap: '0.5rem',
          }}
        >
          <button
            className="button clear"
            onClick={handleClear}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            AC
          </button>
          <button
            className="button perc"
            onClick={() => handlePercentage()}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            %
          </button>
          <button
            className="button delete"
            onClick={handleDelete}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            DEL
          </button>
          {numbers.map((number) => (
            <button
              key={number}
              className="button"
              onClick={() => handleButtonClick(number.toString())}
              style={{
                borderRadius: '30px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 400,
                color: 'indigo',
              }}
            >
              {number}
            </button>
          ))}
          <button
            className="button"
            onClick={() => handleOperation('+')}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            +
          </button>
          <button
            className="button"
            onClick={() => handleOperation('-')}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            -
          </button>
          <button
            className="button"
            onClick={() => handleOperation('*')}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            *
          </button>
          <button
            className="button"
            onClick={() => handleOperation('/')}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            /
          </button>
          <button
            className="button"
            onClick={handleDecimal}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            .
          </button>
          <button
            className="button equal"
            onClick={handleEqual}
            style={{
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'indigo',
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorCode;
