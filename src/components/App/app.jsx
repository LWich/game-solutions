import { Route, Routes } from "react-router-dom"
import Brief from "../Brief/brief"
import Menu from "../Menu/gameMenu"
import MainPage from "../Wheel/MainPage"

const App = () => {
    return(
        
        <div className="app"> 
            <Routes >
                <Route path = '/' element = {<Menu/>}/>
                <Route path = '/brief' element = {<Brief/>}/>
                <Route path="/wheel" element ={<MainPage></MainPage>}></Route>
            </Routes>
        </div>    
    )
}

export default App