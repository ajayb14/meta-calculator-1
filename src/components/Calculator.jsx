import React, { useState } from 'react';

// Calculator component
const Calculator = () => {
    // State to keep track of input / displayed value
    const [input, setInput] = useState('');

    // Handle numeric and operator input
    const handleInput = (value) => {
        setInput(input + value);
    };

    // Calculate the result when "=" is pressed
    const calculateResult = () => {
        try {
            // eslint-disable-next-line
            const result = eval(input);
            setInput(String(result));
        } catch (error) {
            // Handle errors (e.g., malformed expressions)
            setInput('Error');
        }
    };

    // Clear the input
    const clearInput = () => {
        setInput('');
    };

    return (
        <div>
            <h1>Simple Calculator</h1>
            <div>
                <input type="text" value={input} readOnly />
            </div>
            <div>
                {/* Number and operator buttons */}
                {'789+456-123*0/.='.split('').map((char) => {
                    return (
                        <button key={char} onClick={() => char === '=' ? calculateResult() : handleInput(char)}>
                            {char}
                        </button>
                    );
                })}
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
