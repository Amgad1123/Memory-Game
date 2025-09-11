import '../styles/Card.css';
import { useEffect, useState } from 'react';

async function getImage(gifId, name) {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/${gifId}?api_key=6cOCLZEwxGvJjvqlxwkXzUqvvcZk0IbT`,
        { mode: 'cors' }
    );
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return {url : result.data.images.original.url, name : name}
}

export default function Card() {
    const [cardList, setCardList] = useState([]);
    const [error, setError] = useState(null);

    function handleClick(index) {
        //check if the card is already clicked 
        
        //if it has change the score to 0 

        //else increment score and update best score accordingly 
        //set clicked to true 

        //randomize the order of the buttons

    }
    useEffect(() => {
        const initialCards = [{gifId :'OapNdFPJMxn0c', name : 'Chicken'}, {gifId : '14lyRxMNopIAZW', name: "nuggets"}]
        Promise.all(initialCards.map((card) => getImage(card.gifId, card.name)))
            .then(urls => {
                const cards = urls.map((card, index) => ({
                    id: index,
                    src: card.url, 
                    name: card.name,
                    clicked : false
                }));
                setCardList(cards);
            })
            .catch(err => {
                console.error("Error fetching images:", err);
                setError(err.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="card-container">
            {cardList.map(card => (
                <button key={card.id} className="card" onClick={handleClick(card.index)}>
                    <img src={card.src} alt={`GIF ${card.id}`} />
                    <h2>{card.name}</h2>
                </button>
            ))}
        </div>
    );
}
