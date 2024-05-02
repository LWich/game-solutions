import './brief.css'
import { useState } from 'react'
import { Slider } from '@mui/material'
import {Box} from '@mui/material'
import {FormGroup} from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {RadioGroup} from '@mui/material'
import {Radio} from '@mui/material'
const Brief  = () => {
    const tg = window.Telegram.WebApp;

    tg.expand();

    tg.BackButton.show();
    tg.BackButton.onClick(() => {
        window.history.back()
    });

    const data = tg.initDataUnsafe;
   
    const [minPrice, setMinPrice] = useState(50000);
    const [maxPrice, setMaxPrice] = useState(5000000);
    const [minDays, setMinDays] = useState(3);
    const [maxDays, setMaxDays] = useState(365);
    const [name, setName] = useState(data.user.first_name);
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState(data.user.username);
    const [taskOfGame, setTaskOfGame] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [gameAudience, setGameAudience] = useState('');
    const [graphicsType, setGraphicsType] = useState('');
    const [gameStyle, setGameStyle] = useState('');
    const [isOnline, setIsOnline] = useState('');
    const [otherServices, setOtherServices] = useState('');
    const [hasDevelopments, setHasDevelopments] = useState('');
    const [priorities, setPriorities] = useState('');
    const [importantThings, setImportantThings] = useState('');
    const [otherThings, setOtherThings] = useState('');

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ru-RU').format(price);
    }

    const handlePrice = ( event, newValue ) => {
      setMinPrice(newValue[0]);
      setMaxPrice(newValue[1]);
    };

    const formatDays = (days) => {
        if (days === 365) return '1 год'
        if (days >= 31) {
            const months = Math.floor(days / 31);
            let postPrefix = '';
            if (months > 1 && months < 5) postPrefix = ' месяца';
            else if (months > 5) postPrefix = ' месяцев';
            else postPrefix = ' месяц';
            return months + postPrefix;
        }
        let postPrefix = '';
        if (days === 21) postPrefix = ' день';
        else if (days < 25 & days > 21) postPrefix = ' дня';
        else if (days < 5) postPrefix = ' дня';
        else postPrefix = ' дней';
        return days + postPrefix;
    }

    const handleTime = ( event, newValue ) => {
        setMinDays(newValue[0]);
        setMaxDays(newValue[1]);
      };

    const handleSubmit = ( event ) => {
        const data = {
            'minPrice': formatPrice(minPrice),
            'maxPrice': formatPrice(maxPrice),
            'minDays': minDays,
            'maxDays': maxDays,
            'name': name,
            'email': email,
            'telegram': telegram,
            'taskOfGame': taskOfGame,
            'shortDescription': shortDescription,
            'gameAudience': gameAudience,
            'graphicsType': graphicsType,
            'gameStyle': gameStyle,
            'isOnline': isOnline,
            'otherServices': otherServices,
            'hasDevelopments': hasDevelopments,
            'priorities': priorities,
            'importantThings': importantThings,
            'otherThings': otherThings,
        };

        tg.sendData(JSON.stringify(data));
    }

    return (
        <div className="brief ">
            <div className="container">
                <div className="brief__text-block">
                    <h2>
                        Онлайн-заявка
                    </h2>
                    <p>
                        Оставьте ваши контактные данные и наш менеджер свяжется с вами
                    </p>
                </div>

                <form action="#" onSubmit={handleSubmit} className = 'brief__form'>
                    <div className="brief__form-range">
                        <p> [#] Ценовой диапозон</p>
                        <Box >
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={[minPrice, maxPrice]}
                                onChange={handlePrice}
                                min={50000}
                                max={5000000}
                                step={10000}
                            />
                        </Box>

                        <div className="brief__form-range-positions">
                            <span className = 'first-pos'>{formatPrice(minPrice)} руб.</span>
                            <span className = 'sec-pos'>{formatPrice(maxPrice)} руб.</span>
                        </div>
                    </div>

                    <div className="brief__form-range" style = {{marginTop: 27}}>
                        <p> [#] Временной диапазон</p>
                        <Box >
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={[minDays, maxDays]}
                                onChange={handleTime}
                                min={3}
                                max={365}
                                step={1}
                            />
                        </Box>

                        <div className="brief__form-range-positions">
                            <span className = 'first-pos'>{formatDays(minDays)}</span>
                            <span className = 'sec-pos'>{formatDays(maxDays)}</span>
                        </div>
                    </div>


                    <div className="brief-naming">
                        <div className="brief__naming-block">
                            [#]
                            <input required placeholder='Ваше имя...' value={name} onChange={(event) => setName(event.target.value)}>

                            </input>
                        </div>
                        <div className="brief__naming-block">
                            [#]
                            <input required placeholder='Ваш телеграм...' value={telegram} onChange={(event) => setTelegram(event.target.value)}>

                            </input>
                        </div>
                        <div className="brief__naming-block">
                            [#]
                            <input placeholder='Ваша почта...' onChange={(event) => setEmail(event.target.value)}>

                            </input>
                        </div>
                    </div>
                   
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>Какую задачу должна решать игра?</p>
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup
                                onChange={(event) => {setTaskOfGame(event.target.value)}}
                                aria-labelledby="company-goal"
                                name="radio-buttons-group">
                                    
                                <FormControlLabel 
                                    value='Привлечение новой аудитории' 
                                    control={<Radio required={true} />} 
                                    label="Привлечение новой аудитории"  
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Получение прибыли' 
                                    control={<Radio required={true} />} 
                                    label="Получение прибыли"
                                    className='brief__test-answ' 
                                    aria-label='12'/>
                                <FormControlLabel 
                                    value='Реализация идей, амбиций, культурных ценностей'
                                    control={<Radio required={true} />}
                                    label="Реализация идей, амбиций, культурных ценностей"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Инновации, образование'
                                    control={<Radio required={true} />}
                                    label="Инновации, образование"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Другое...'
                                    control={<Radio required={true} />}
                                    label="Другое... "
                                    className='brief__test-answ'/>
                            </RadioGroup>
                        </FormGroup>
                      

                        
                   </div>

                   <div className="brief__long-quest">
                        <p>
                            <b>Краткое описание проекта  </b> — расскажите, что за игра, жанр, категория, как пользователи будут взаимодействовать с миром игры, прогресс или соревнование
                        </p>

                        <textarea className='short-description' placeholder='Ваш ответ...' onChange={(event) => {setShortDescription(event.target.value)}}>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                         <b>Целевая аудитория игры </b>  — расскажите, кто основной пользователь игры. Опишите его социально-демографические характеристики (пол, возраст, доход, образование, стиль жизни)
                        </p>

                        <textarea className='audition' placeholder='Ваш ответ...' onChange={(event) => {setGameAudience(event.target.value)}}>

                        </textarea>
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p><b>Какую нужно использовать графику</b>  — от этого будет зависеть состав команды художников</p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup onChange={(event) => {setGraphicsType(event.target.value)}}>
                                <FormControlLabel 
                                    value='2D'
                                    control={<Radio />} 
                                    label="2D"  
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='3D'
                                    control={<Radio />} 
                                    label="3D"
                                    className='brief__test-answ' />
                                <FormControlLabel 
                                    value='2.5D'
                                    control={<Radio />} 
                                    label="Изометрия (2.5D)" 
                                    className='brief__test-answ'/>
                        
                            </RadioGroup>
                            
                        </FormGroup>  
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p><b>Какую нужно использовать стилистику</b> — от этого будет зависеть состав команды художников</p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup onChange={(event) => {setGameStyle(event.target.value)}}>
                                <FormControlLabel
                                    value='Мультяшный стиль'
                                    control={<Radio />}
                                    label="Мультяшный стиль" 
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Пиксель-арт'
                                    control={<Radio />} 
                                    label="Пиксель-арт" 
                                    className='brief__test-answ' />
                                <FormControlLabel 
                                    value='Реализм'
                                    control={<Radio />} 
                                    label="Реализм"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Другое'
                                    control={<Radio />}
                                    label="Другое"
                                    className='brief__test-answ'/>
                            </RadioGroup>
                        </FormGroup>  
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Планируется ли онлайн-составляющая </b> —  это может сильно повлиять на стоимость и сроки, а также на состав команды программистов
                            </p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup onChange={(event) => {setIsOnline(event.target.value)}}>
                                <FormControlLabel
                                    value='Требуется сервер'
                                    control={<Radio />}
                                    label="Требуется сервер (лидерборды, авторизация, личный кабинет, логирование, админ-панель)" 
                                    className='brief__test-answ'/>
                                <FormControlLabel
                                    value='коллективное взаимодействие'
                                    control={<Radio />}
                                    label="Игра предполагает коллективное взаимодействие" 
                                    className='brief__test-answ'/>
                                
                            </RadioGroup>
                        </FormGroup>  
                   </div>
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Нужна ли разработка дополнительных сервисов  </b> — например, авторизация, аналитика, реклама, прием платежей, облачные сервисы
                            </p>
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup onChange={(event) => {setOtherServices(event.target.value)}}>
                                <FormControlLabel
                                    value='Требуются сервисы'
                                    control={<Radio />}
                                    label="Да" 
                                    className='brief__test-answ'/>
                                
                                
                            </RadioGroup>
                        </FormGroup>  
                   </div>
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Есть ли готовые наработки </b> — например, сценарий, тех. задание, референсы графики, механики и т.д
                            </p>
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup onChange={(event) => {setHasDevelopments(event.target.value)}}>
                                <FormControlLabel
                                    value='Присутствуют наработки'
                                    control={<Radio />}
                                    label="Да" 
                                    className='brief__test-answ'/>
                            </RadioGroup>
                        </FormGroup>  
                   </div>

                   <div className="brief__long-quest">
                        <p>
                         <b>Приоритеты в проекте </b> 
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...' onChange={(event) => {setPriorities(event.target.value)}}>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                         <b>Критически важные и приоритетные вещи в вашей игре </b> — например, сроки, качество проекта лучше чем у конкурентов, игра не должна содержать насилия и т.д 
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...' onChange={(event) => {setImportantThings(event.target.value)}}>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                        Укажите что-то важное, что не вошло в предыдущие пункты
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...' onChange={(event) => {setOtherThings(event.target.value)}}>

                        </textarea>
                   </div>

                   <button type ='submit' className='submit'>ОТПРАВИТЬ</button>
                </form>
            </div>
        </div>
        
    )
}

export default Brief