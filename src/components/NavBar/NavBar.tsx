import React, {FC, useState} from 'react';
import cls from './NavBar.module.scss'
import logoIcon from '../../assets/logo.svg'
import classNames from "classnames";
import {navBarButtons} from "../../const/const";

const NavBar: FC = () => {
    const [selectedButton, setSelectedButton] = useState(6);

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };
    return (
        <div className={cls.wrapper}>
            <div className={cls.bg}></div>
            <div className={cls.container}>
                <img className={cls.logo} src={logoIcon} alt="Logo"/>
                <nav className={cls.navBtnContainer}>
                    {navBarButtons.map((button, index) => (
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
