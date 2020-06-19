// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
    'one': 'number',
};

function resolve1(inputObject) {
    let keyObject = Object.keys(inputObject);
    let valuesObject = Object.values(inputObject);

    let tempKey = keyObject[0];
    let tempVal = valuesObject[0];

    let newArr = new Object;
    newArr[tempVal]=tempKey;
    return (newArr);
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
    'apple': 'fruit',
    'potato': 'vegetable',
    'strawberry': 'berry',
};

function resolve2(inputObject) {
    let keyObject = Object.keys(inputObject);
    let valuesObject = Object.values(inputObject);

    let tempKey = new Object();
    let tempVal =  new Object();
    let i = 0;
    for (let key in keyObject){
        tempKey[i] = keyObject[key];
        i++;
    }
    i = 0;
    for (let key in valuesObject){
        tempKey[i] = valuesObject[key];
        i++;
    }
    let newArr = new Object;
    i = 0;
    for(let key in keyObject){
        newArr[valuesObject[i]] = keyObject[key];
        i++;
    }
    return (newArr);
};

const result2 = resolve2(secondObject);
console.log(result2);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(secondObject);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

function centuryFromYear(year) {
    let cent = parseInt((year - 1) / 100);
    return (cent + 1);
};

let year1 = 1900;
centuryFromYear(year1); // 20

const year2 = 1700;
centuryFromYear(year2); // 17.

