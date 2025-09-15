import  '../styles/Navbar.css'

export default function Nav({score,bestScore}) {
    return (
        <div className='Navbar'>
            <div className="header">
                <h1>Eatz Memory Game</h1>
                <div className="scoreDiv">
                    <h2>Points</h2>
                    <p className="score">Score: {score}</p>
                    <p className="bestScore">Best Score: {bestScore}</p>
                </div>
            </div>
    </div>
    )
}