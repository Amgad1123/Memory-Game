import  '../styles/Navbar.css'

export default function Nav() {
    return (
        <div className='Navbar'>
            <div className="header">
                <h1>Eatz Memory Game</h1>
                <div className="scoreDiv">
                    <h2>Points</h2>
                    <p className="score">Score: {}</p>
                    <p className="bestScore">Best Score: {}</p>
                </div>
            </div>
    </div>
    )
}