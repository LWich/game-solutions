import { Route, Routes } from "react-router-dom"
import Brief from "../Brief/brief"
import Menu from "../Menu/gameMenu"

const App = () => {
    return(
        
        <div className="app"> 
            <Routes >
                <Route path = '/' element = {<Menu/>}/>
                <Route path = '/brief' element = {<Brief/>}/>
            </Routes>
        </div>    
    )
}

export default App