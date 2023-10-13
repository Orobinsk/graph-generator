import calendarIcon from "../assets/navIcons/calendar.svg";
import todoIcon from "../assets/navIcons/todo.svg";
import boxIcon from "../assets/navIcons/box.svg";
import peopleIcon from "../assets/navIcons/people.svg";
import countIcon from "../assets/navIcons/count.svg";
import chartIcon from "../assets/navIcons/chart.svg";
import settingIcon from "../assets/navIcons/setting.svg";

export const monthNames: { [key: string]: string } = {
    '01': 'Янв',
    '02': 'Фев',
    '03': 'Мар',
    '04': 'Апр',
    '05': 'Май',
    '06': 'Июн',
    '07': 'Июл',
    '08': 'Авг',
    '09': 'Сен',
    '10': 'Окт',
    '11': 'Ноя',
    '12': 'Дек',
};

export const chartNavBtn = [
    {name: 'Неделя'},
    {name: 'Месяц'},
    {name: 'Год'},
]

export const navBarButtons = [
    {icon: calendarIcon, index: 1, alt: 'calendar'},
    {icon: todoIcon, index: 2, alt: 'todo'},
    {icon: boxIcon, index: 3, alt: 'box'},
    {icon: peopleIcon, index: 4, alt: 'people'},
    {icon: countIcon, index: 5, alt: 'count'},
    {icon: chartIcon, index: 6, alt: 'chart'},
    {icon: settingIcon, index: 7, alt: 'setting'},
];




