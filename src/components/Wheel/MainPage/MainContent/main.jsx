import React, {useContext, useState} from 'react';
import { Context } from '../../../../index';
import cls from './style.module.css'
import { observer } from 'mobx-react-lite';
import ModalOut from '../../ModalOut/ModalOut';

const MainPageCont = observer(() => {

  const [vis, setVis] = useState(false);

    const {user} = useContext(Context)
  return (
    <div>
        <h1>Время призов</h1>
        <div className={cls.banner}>
            <div>
                <span className={cls.coins}>Баланс:{user.coins} TON</span>
            </div>
            <button className={cls.button} onClick={() => {setVis(true)}}>Вывести</button>
        </div>
        <ModalOut vis={vis} setVis={setVis}></ModalOut>
    </div>
  );
})

export default MainPageCont;
