import React, {FC, useState} from 'react';
import cls from './DivisionsButtons.module.scss'
import classNames from "classnames";
import calendarIcon from "../../assets/navIcons/calendar.svg";
import todoIcon from "../../assets/navIcons/todo.svg";
import boxIcon from "../../assets/navIcons/box.svg";
import peopleIcon from "../../assets/navIcons/people.svg";
import countIcon from "../../assets/navIcons/count.svg";
import chartIcon from "../../assets/navIcons/chart.svg";
import settingIcon from "../../assets/navIcons/setting.svg";

const DivisionsButtons: FC = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonIndex: number) => {
        setSelectedButton(buttonIndex);
    };
    const Buttons = [
        {icon: calendarIcon, index: 1, alt: 'calendar'},
        {icon: todoIcon, index: 2, alt: 'todo'},
        {icon: boxIcon, index: 3, alt: 'box'},
    ];
    return (
        <div className={cls.wrapper}>
            <button
                className={classNames(cls.btn, {
                    [cls.selected]: selectedButton === 1,
                })}
                onClick={() => handleButtonClick(1)}
            >
                Button 1
            </button>
            <button
                className={classNames(cls.btn, {
                    [cls.selected]: selectedButton === 2,
                })}
                onClick={() => handleButtonClick(2)}
            >
                Button 2
            </button>
            <button
                className={classNames(cls.btn, {
                    [cls.selected]: selectedButton === 3,
                })}
                onClick={() => handleButtonClick(3)}
            >
                Button 3
            </button>
        </div>
    );
};

export default DivisionsButtons;
