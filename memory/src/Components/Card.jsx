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

export default function Card({score, setScore, bestScore, setBestScore}) {
    const [cardList, setCardList] = useState([])
    function handleClick(index) {
        const selectedCard = cardList[index];
        if (selectedCard.clicked) {
            if (score >= bestScore) {
                setBestScore(score);
            }
            window.alert(`Round over. You got ${score} points.}`)
           setScore(0);
           const resetList = cardList.map((item)=> ({
            ...item,
            clicked: false
           }))
           shuffleArray(resetList);
           setCardList(resetList);
        }
        else {
            setScore(score+1)
            const updateCardList = [...cardList];
            updateCardList[index].clicked = true;
            shuffleArray(updateCardList);
            setCardList(updateCardList); 
        }

    }
    
    function shuffleArray(array) {
        
        for (var i = array.length -1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i+1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
            
    useEffect(() => {
        async function fetchImages() {
            try {
                const initialCards =[
                    {gifId :'OapNdFPJMxn0c', name : 'Chicken'}, {gifId : '14lyRxMNopIAZW', name: "Nuggets"},
                    {gifId : '4ayiIWaq2VULC', name: "Pizza"}, {gifId : 'JteZf56ZXsJl6', name: "Burger"},
                    {gifId : 'kHO7BBVkFnoqG4aPNf', name: "Tender"}, {gifId : '8gXfspeZK8vHja3u3j', name: "Wing"},
                    {gifId : '1ZAtHfh8qUayx8IJx7', name: "Flatbread"}, {gifId : 'J8G3NaPq66gp2', name: "Ramen"},
                    {gifId : 'hVddJTC3cONXy', name: "Pho"}, {gifId : '2idBE8DmOcUFQ4g3RT', name: "Wrap"},
                    {gifId : 'oIiLWDtCjKlQVzCFgb', name: "Shawarma"}, {gifId : '3JgtnXdRhSflK', name: "Tacos"}

                ]
                const results = await Promise.all(
                    initialCards.map(card => getImage(card.gifId, card.name))
                );
    
                const cards = results.map((card, index) => ({
                    id: index,
                    src: card.url,
                    name: card.name,
                    clicked: false,
                }));    
                setCardList(cards);
            } catch (err) {
                window.error("Error fetching images:", err);
            }
        }
        fetchImages();
    }, []);


    return (
        <div className="card-container">
            {cardList.map((card,index) => (
                <button key={card.id} className="card" onClick={ () => handleClick(index)}>
                    <img src={card.src} alt={`GIF ${card.name}`} />
                    <h2 className='cardName'>{card.name}</h2>
                </button>
            ))}
        </div>
    );
}