import React, { useState, useEffect } from 'react';
import "./Styles.css";

const App = () => {
    const [quotes, setQuotes] = useState("");

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            let randomNum = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNum]);
        });
    };

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className = "App">
            <div className = "quote">
                <p>{quotes.text}</p>
                <p>Autor: {quotes.author}</p>
                <div className= "btnContainer">
                    <button onClick = {getQuote} className= "btn">Apretá acá bb</button>
                </div>
            </div>
        </div>
    );
};

export default App
