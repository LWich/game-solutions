import React, { useContext, useEffect, useState } from 'react';
import cls from './style.module.css';
import { Link } from 'react-router-dom';

function ModalOut({vis, setVis }) {

    const rootClasses = [cls.back];

    if (vis) {
        rootClasses.push(cls.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVis(false)}>
            <div className={cls.content} onClick={(e) => e.stopPropagation()}>
                <a className={cls.link} href={'/'}>TON</a>
                <a className={cls.link} href={'/'}>STARS</a>
            </div>
        </div>
    );
}

export default ModalOut;
