import React, { useState, useEffect, useContext } from 'react'
import './Header.css'
import { LanguageContext, ItemsContext } from '../../context/Context'
import save from '../../assets/img/save.svg'
import en from '../../assets/img/en.svg'
import ua from '../../assets/img/ua.svg'
import cz from '../../assets/img/cz.svg'
import ru from '../../assets/img/ru.svg'
import add from '../../assets/img/add.svg'

const Header = () => {

   
    const{language, setLanguage} = useContext(LanguageContext)
    const{items, setItems} = useContext(ItemsContext)
    //const[context, setContext] = useState(context.items)

    const[flag, setFlag] = useState(language)
    console.log(language)
    console.log(ItemsContext)

    useEffect(() => {
        if(language === 'en') setFlag(en)
        if(language === 'cz') setFlag(cz)
        if(language === 'ua') setFlag(ua)
        if(language === 'ru') setFlag(ru)
    }, [language])

    const setText = (eng, cze, ukr, rus) => {
        if(language === 'en') return eng
        if(language === 'cz') return cze
        if(language === 'ua') return ukr
        if(language === 'ru') return rus
    }

    
    return (
        <header className="header">
            <div className="header__bg">
                <div className="header__bg-circle"></div>
                <div className="header__bg-circle"></div>
                <div className="header__bg-circle"></div>
                <div className="header__bg-circle"></div>
                <div className="header__bg-circle"></div>
            </div>
            <div className="header__btn">
                <button><img className="header__icon" src={save}/></button>
                <span>{setText('Save to file', `Stáhnout soubor`, 'Зберегти у файл', 'Сохранить в файл')}</span>
            </div>
            <label className="header__btn" htmlFor="header__lang-list">
                <img className="header__icon" src={flag}/>
                <select defaultValue={language} className="header__lang-list" onChange={(e) => {setLanguage(e.target.value)}}>
                    <option value="en">EN</option>
                    <option value="cz">CZ</option>
                    <option value="ua">UA</option>
                    <option value="ru">RU</option>
                </select>
            </label>
            <div className="header__btn">
                <button><img className="header__icon" src={add}/></button>
                <span>{setText('Add item', 'Vytvořit položku', 'Нова позиція', 'Новая позиция')}</span>
            </div>
        </header>
    )
}

export default Header