import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import loadGames from "../../services/jsonResponce"
import GamePreview from "../Game/game"
import './gameMenu.css'

const Menu = () => {
    const tg = window.Telegram.WebApp;

    tg.BackButton.hide();
    tg.expand();

    async function createList(){
        const data = await loadGames()
        const list = []
        for (const [i, game] of data.entries()) {
            list.push(<GamePreview
                key = {i}
                gameName = {game.name}
                gameDesc = {game.desc} 
                playLink = {game.playLink} 
                imagePath = {game.imagePath}
                buttonType = {game.buttonType}
                gameStatus = {game.gameStatus}
            />)
        }
        return list
    }

    const [gameContent, setGameContent] = useState();
        
    
    useEffect(() => {
        (async function() { 
            const gmContent = await createList()
            setGameContent(gmContent)
        })()
    })

    return (
        <div>
            <section id="top_sect" className="second">
                <table className="game-table" id="game-table">
                    <tbody>
                        {gameContent}
                    </tbody>
                   
                    
                </table>
                <div className='wheelCont'>
                    <Link to={'/wheel'} className={"wheel"}>
                        <img className='wheelImg' src='assets/images/wheel.png' alt='wheel'></img>
                        <div className={"downContainer"}>
                            <span>Крути колесо</span>
                            <span>></span>
                        </div>
                        
                    </Link>
                    </div>
            </section> 
            <Link to="/brief" id="order-button">Заказать игру</Link>
        </div>       
    )
}



export default Menu