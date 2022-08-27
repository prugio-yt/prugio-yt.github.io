import { CountUp } from "./countup.min.js";


const getData = async() => {
    const sheetId = '1rJ4h35dmNnIPLr6P6TxQgc1lOl4VlfZh3gQmujsZKCg';
    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const sheetName = 'sheet1';
    const query = encodeURIComponent('Select A LIMIT 1');
    const url = `${base}&sheet=${sheetName}&tq=${query}`;

    const response = await fetch(url);
    const reg = new RegExp(/{.*}/);
    const data = await response.text();
    const parsed = JSON.parse(reg.exec(data)[0]);
    
    return parsed.table.rows[0].c[0].v;
}

const diffDay = () => {
    const newHouseDate = new Date("2025-03-31")
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0)
    const diff = newHouseDate - todayDate;
    const diffDay = Math.floor(diff / (1000*60*60*24));

    return diffDay;
}

const countStart = async() => {
    const ddata = await getData();
    const remainDays = diffDay();
    let dday = new CountUp('dday_counter', remainDays, {duration:4, prefix:'D-'});
    let rate = new CountUp('agree_rate', ddata, {decimalPlaces:2, duration:4, suffix:'%'});
    dday.start();
    rate.start();
}

countStart();