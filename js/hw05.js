//Задание №1
console.log("Задание №1");
//Функции
function arr_compare_incl(a, b) {
    let result = a.filter(i=>!b.includes(i)).concat(b.filter(i=>!a.includes(i)));
    return {
            result: (result.length==0)?true:false,
            difference: result
    };
}
//Вариант 1 
let arr1 = [1,2,3,4,5], arr2 = [1,2,3,4,5,6];
let res = arr_compare_incl(arr1, arr2);
console.log("Дано:", arr1, arr2)
console.log("Результат: ", `Равны: ${res.result}`, `Различия: ${res.difference}`);
//Вариант 2 
arr1 = [2,null,,7,undefined,""], arr2 = [2,null,,7,undefined,""];
res = arr_compare_incl(arr1, arr2);
console.log("Дано:", arr1, arr2)
console.log("Результат: ", `Равны: ${res.result}`, `Различия: ${res.difference}`);
//Вариант 3 
arr1 = [2,null,,7,undefined,""], arr2 = [2,null,,7,undefined,"","control"];
res = arr_compare_incl(arr1, arr2);
console.log("Дано:", arr1, arr2)
console.log("Результат: ", `Равны: ${res.result}`, `Различия: ${res.difference}`);

//Задание №2
console.log("Задание №2");
function range(num_start,num_finish,step) {
    let step_current = (step==undefined) ? 1:step;
  
    let num_current = num_start;
    let result = [];
    if(step>0 && num_start>num_finish) {
        console.log("При положительном шаге старт не может быть больше финиша");
        return result;    
    }if(step<0 && num_start<num_finish) {
        console.log("При отрицательном шаге старт не может быть меньше финиша");
        return result;    
    }
    while(num_current<=num_finish) {
        result.push(num_current);
        num_current += step_current;
    }
    return result;
}
console.log(`Начало: 1`, `Конец: 10`, `Шаг: 2`);
console.log(range(1,10,2));
console.log(`Начало: 1`, `Конец: 10`);
console.log(range(1,10));
console.log(`Начало: 20`, `Конец: 100`, `Шаг: 6`);
console.log(range(20,100,6));


//Задание №3
console.log("Задание №3");

let student  = {
    Фамилия: "Иванов",
    Имя: "Роман",
    Отчетство: "Викторович",
    Возраст: "20 лет",
    Интересы: ["Настольные игры", "Компьютерные игры", "Туризм", "Фантастика"],
    МестоОбучения: 'БГТУ "Военмех"'
}

function print_student(student) {
    for(let prop in student) {
        if(Array.isArray(student[prop])) {
            for(let i=0; i<student[prop].length;i++) {
                console.log(`${prop}: ${student[prop][i]}`); 
            }
        }else {
            console.log(`${prop}: ${student[prop]}`);    
        }
    }
}
console.log(student);
print_student(student);

//Задание №4
console.log("Задание №4");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function word_generator(lengthMin=3, lengthMax=5) {
    let arr_ru = ['а','б','в','г','д','е','ё','ж','з','и','й','к','л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
    let arr_letter2 = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let arr_letter1 = ['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];//,'ь','ъ']; - по идее это знаки - потому убираю
    let word_length = getRandomInt(lengthMin,lengthMax+1); //чтобы получить lenghtMax максимум ставим больше на 1
    let itGlass = getRandomInt(0,1);
    let word = '';
    while(word.length<word_length) {
        //Уменьшил количество строчек кода)
        let targetArr = (itGlass) ? arr_letter2 : arr_letter1;
        let letter = targetArr[getRandomInt(0, targetArr.length-1)];
        word += arr_ru[arr_ru.indexOf(letter)];
        /*if(itGlass){
            let letter = arr_letter2[getRandomInt(0, arr_letter2.length-1)];
            word += arr_ru[arr_ru.indexOf(letter)];
        } else {
            let letter = arr_letter1[getRandomInt(0, arr_letter1.length-1)];
            word += arr_ru[arr_ru.indexOf(letter)];
        }*/
        word = (word.length==1) ? word.toUpperCase() : word;
        itGlass = !itGlass;
    }
    return word;
}

console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
console.log(word_generator());
