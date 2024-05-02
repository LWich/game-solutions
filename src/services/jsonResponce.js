import games from '../db.json';

async function loadGames() {
    try{
        return games.games;
    }
   
    catch(err){
        throw new Error(err)
    } 
   
}

export default loadGames
//legacy
//data.forEach(game => {
//     const gameHTML = createGameHTML(game.name, game.desc, game.playLink, game.imagePath, game.buttonType, game.gameStatus);
//     gamesTable.innerHTML += gameHTML;
// });