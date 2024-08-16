import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../index';
import cls from './style.module.css';

function Modal({ coins, vis, setVis }) {
    const { user } = useContext(Context);
    const [cointCoins, setCointCoins] = useState(user.coins);
    const [coinsVis, setCoinsVis] = useState(false);

    useEffect(() => {
        if (vis) {
            let currentCoins = cointCoins;

            const int = setInterval(() => {
                console.log(12)
                if (currentCoins < coins && coinsVis) {
                    currentCoins += 1;
                    setCointCoins(currentCoins);
                   
                } else {
                    clearInterval(int);
                }
            }, 10);
            
            return () => clearInterval(int);
        }
    }, [coinsVis]); 

    function saveCoins() {
        setVis(false);
        setCoinsVis(true);
        console.log(user.coins, coins)
        user.setCoins(user.coins + coins)
    }

    const rootClasses = [cls.back];

    if (vis) {
        rootClasses.push(cls.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cls.countCont}>
                <div className={cls.count}>
                    <img src='/assets/icons/coin.svg' alt='coin'></img>
                    <span>{cointCoins} TON</span>
                </div>
            </div>

            <span className={cls.mainText}>Вы выиграли {coins} TON</span>
            
            <div className={cls.down}>
                <button onClick={saveCoins}>Получить приз</button>
            </div>
        </div>
    );
}

export default Modal;
