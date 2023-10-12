import React, {FC, useMemo, useState} from 'react';
import cls from './DivisionsButtons.module.scss'
import classNames from "classnames";
import {filterAndSumTotalAmount} from "../ChartComponent/helpers/filterAndSumTotalAmount";
import {IData} from "../../types/types";


const DivisionsButtons: FC<IData> = ({data}) => {
    const [selectedButton, setSelectedButton] = useState('Итоги');

    const navButtons = useMemo(() => {
        const buttons = [
            {name: 'Итоги', amount: filterAndSumTotalAmount(data)},
            {name: 'B2B', amount: filterAndSumTotalAmount(data, 'B2B')},
            {name: 'B2C', amount: filterAndSumTotalAmount(data, 'B2C')},
        ];
        return buttons.map(button => ({
            ...button,
            percent: getRandomPercentage(),
        }));
    }, [data]);

    const handleButtonClick = (name: string) => {

        setSelectedButton(name);
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
