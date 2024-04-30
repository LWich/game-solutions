
async function loadGames() {
    try{
        const responce = await fetch('https://web-app-server-six.vercel.app/games')
        const data = await responce.json()

        return data
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