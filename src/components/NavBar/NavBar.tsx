import React, {FC, useState} from 'react';
import cls from './NavBar.module.scss'
import logoIcon from '../../assets/logo.svg'
import boxIcon from '../../assets/navIcons/box.svg'
import calendarIcon from '../../assets/navIcons/calendar.svg'
import chartIcon from '../../assets/navIcons/chart.svg'
import countIcon from '../../assets/navIcons/count.svg'
import peopleIcon from '../../assets/navIcons/people.svg'
import settingIcon from '../../assets/navIcons/setting.svg'
import todoIcon from '../../assets/navIcons/todo.svg'
import classNames from "classnames";

const NavBar: FC = () => {
    const [selectedButton, setSelectedButton] = useState(6);
    const navButtons = [
        {icon: calendarIcon, index: 1, alt: 'calendar'},
        {icon: todoIcon, index: 2, alt: 'todo'},
        {icon: boxIcon, index: 3, alt: 'box'},
        {icon: peopleIcon, index: 4, alt: 'people'},
        {icon: countIcon, index: 5, alt: 'count'},
        {icon: chartIcon, index: 6, alt: 'chart'},
        {icon: settingIcon, index: 7, alt: 'setting'},

    ];

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };
    return (
        <div className={cls.wrapper}>
            <div className={cls.bg}></div>
            <div className={cls.container}>
                <img className={cls.logo} src={logoIcon} alt="Logo"/>
                <nav className={cls.navBtnContainer}>
                    {navButtons.map((button, index) => (
                        <button
                            key={index}
                            className={classNames(cls.btn, {
                                [cls.selected]: selectedButton === button.index,
                            })}
                            onClick={() => handleButtonClick(button.index)}
                        >
                            <img src={button.icon} alt={button.alt}/>
                        </button>
                    ))}
                </nav>
            </div>

        </div>
    );
};

export default NavBar;
