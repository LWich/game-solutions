import React, { useState } from 'react';
import MainPageCont from './MainPage/MainContent/main';
import Wheel from '../Wheel/MainPage/Wheel/Wheel';
import { observer } from 'mobx-react-lite';
import cls from './style.module.css'

const MainPage = observer(() => {
 
  return (
    <div className={cls.main}>
        <MainPageCont></MainPageCont>
        <Wheel></Wheel>
        
    </div>
  );
}
)
export default MainPage;
