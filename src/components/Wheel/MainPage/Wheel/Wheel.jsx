import React, { useEffect, useState } from 'react';
import { twist } from '../../http/userAPi';
import cls from './style.module.css';
import Modal from '../../Modal/modal';

const tg = window.Telegram.WebApp;

function Wheel() {
  const [vis, setVis] = useState(false);
  const [prise, setPrise] = useState(0);
  const [time, setTime] = useState(24 * 3600);
  const [animation, setAnimation] = useState('');
  const smallPrise = 4;
  const mediumPrise = 20;
  const bigPrise = 50;

  const prises = [
    mediumPrise,
    smallPrise,
    smallPrise,
    smallPrise,
    smallPrise,
    mediumPrise,
    bigPrise,
    smallPrise,
    
  ];

  useEffect(() => {
    setTimeout(() => {
      if(time < 24 * 3600) {
        setTime(el => el+1);
        
      }
    }, 1000);
  }, [time]);

  let vibrationInterval;

  function startVibration() {
    vibrationInterval = setInterval(() => {
      // Код для включения вибрации
      console.log("Вибрация включена");
    }, 200); // Интервал 200 миллисекунд (0.2 секунды)
  }
  
  // Остановка вибрации через 5 секунд
  function stopVibration() {
    clearInterval(vibrationInterval);
    console.log("Вибрация остановлена");
  }

  const handleSpin = async () => {
    console.log(1234);

    
    //const data = await twist(tg?.initDataUnsafe?.user?.id);

    setTime(0);
    const requiredPrize = 20; 

    const getRandomIndexForPrize = (prises, requiredPrize) => {

      const matchingIndices = prises.reduce((acc, prise, index) => {
        if (prise === requiredPrize) {
          acc.push(index);
        }
        return acc;
      }, []);

      const randomIndex = matchingIndices[Math.floor(Math.random() * matchingIndices.length)];
    
      return randomIndex;
    };

    startVibration();

  // Остановить вибрацию через 5 секунд
  setTimeout(stopVibration, 4500);


    const randomIndex = getRandomIndexForPrize(prises, requiredPrize);

    const segmentAngle = 45;
    const targetRotation = 360 * 5 + (randomIndex) * segmentAngle; 
  

    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
          10% {
          transform: rotate(-30deg);
          }

          80% {
            transform: rotate(${targetRotation}deg);
          }
          100% {
          transform: rotate(${targetRotation}deg);
          }
      }
    `;

    if (styleSheet.cssRules.length > 0) {
      styleSheet.deleteRule(0);
    }

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    setAnimation(`spin 5s ease-in-out`);

    setTimeout(() => {
      setVis(true);
      setTimeout(() => {
        setPrise(prises[randomIndex]);
        setAnimation('');
        console.log(prises[randomIndex]);
      }, 100)

    }, 4900);
  };

  function getParseTime(time) {
    const hCount = Math.floor(time / 3600);
    const mCount = Math.floor((time % 3600) / 60);
    const sCount = Math.floor(time % 60);

    const h = hCount > 9 ? hCount : `0${hCount}`;
    const m = mCount > 9 ? mCount : `0${mCount}`;
    const s = sCount > 9 ? sCount : `0${sCount}`;
    return `${h}:${m}:${s}`;
  }

  function getProccent() {
    return time / (3600 * 24 / 100);
  }

  function modalClose() {
    setTime(0);
    setTimeout(() => {
      setVis(false);
    }, 2500)
    
  }

  return (
    <>
      <div className={cls.container}>
        <img className={cls.arrow} src='assets/images/arrow.png' alt='arrow' />
        <img
          className={cls.wheel}
          style={{ animation: animation }}
          src='assets/images/wheel.png'
          alt='wheel'
        />
      </div> {
        time >= 24 * 3600 ?
        <button className={cls.button} onClick={handleSpin}>Выигрывать</button> :
        <button className={cls.buttonAwait} style={{background: `linear-gradient(90deg, #008aff ${getProccent()}%, #fff ${getProccent()}%)`}}>{getParseTime(24 * 3600 - time)}</button>
      }
      
      <Modal vis={vis} setVis={modalClose} coins={prise}></Modal>
    </>
  );
}

export default Wheel;
