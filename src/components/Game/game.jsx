
import './game.css'


const GamePreview = ({gameName, playLink, gameDesc, imagePath, buttonType, gameStatus}) => { 

    return(
        <tr>
            <td><img src={imagePath}/></td>
            <td>
                <b><a id="game-name">{gameName}</a></b>
                <br/>
                <a id="game-desc">{gameDesc}</a>
            </td>
            <td><a id={buttonType} href={playLink}>{gameStatus}</a></td>
        </tr>
            
    )
}

export default GamePreview