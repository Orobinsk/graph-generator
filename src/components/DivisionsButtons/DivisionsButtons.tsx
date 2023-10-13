import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import cls from './DivisionsButtons.module.scss'
import classNames from "classnames";
import {filterAndSumTotalAmount} from "../ChartComponent/helpers/filterAndSumTotalAmount";
import {IData, IDataItem} from "../../types/types";

type NavigationButton = {
    name: string;
    amount: number;
    percent: number;
};

interface DivisionsButtonsProps extends IData{
    setData: Dispatch<SetStateAction<IDataItem[]>>
}

const DivisionsButtons: FC<DivisionsButtonsProps> = ({data,setData}) => {
    const [selectedButton, setSelectedButton] = useState('Итоги');
    const [navButtons, setNavButtons] = useState<NavigationButton[]>([]);


    useEffect(() => {
        const buttons = [
            { name: 'Итоги', amount: filterAndSumTotalAmount(data) },
            { name: 'B2B', amount: filterAndSumTotalAmount(data, 'B2B') },
            { name: 'B2C', amount: filterAndSumTotalAmount(data, 'B2C') },
        ];
        const buttonsWithPercentages = buttons.map(button => ({
            ...button,
            percent: getRandomPercentage(),
        }));
        setNavButtons(buttonsWithPercentages);
    }, []);

    const handleButtonClick = (name: string) => {
        setSelectedButton(name);
        if(name==='B2B'){
            setData(data.filter((item) => item.division === 'B2B'))
        } else if(name==='B2C'){
            setData(data.filter((item) => item.division === 'B2C'))
        } else {
            setData(data)
        }
    };

    function getRandomPercentage(): number {
        return Math.round(Math.random() * 200 - 100);
    }


    return (
        <div className={cls.wrapper}>
            {navButtons.map((btn) =>
                <button
                    key={btn.name}
                    className={classNames(cls.btn, {
                        [cls.selected]: selectedButton === btn.name,
                    })}
                    onClick={() => handleButtonClick(btn.name)}
                >
                    <div className={classNames(cls.btnPercentWrap, {
                        [cls.btnPercentWrapSelected]: selectedButton === btn.name,
                    }, {
                        [cls.btnPercentWrapRed]: btn.percent <= 0,
                    })}
                    >
                        <p className={classNames(cls.btnPercent, {
                            [cls.btnPercentRed]: btn.percent <= 0 && selectedButton !== btn.name
                        })}>{btn.percent} %</p>
                    </div>
                    <p className={cls.btnAmount}>₽ {btn.amount}</p>
                    <p className={cls.btnName}>{btn.name}</p>
                </button>
            )}
        </div>
    );
};

export default DivisionsButtons;
