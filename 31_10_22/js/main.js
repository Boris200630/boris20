// Задачи для решения


// Задачa 1

// var mas = ['Привет,', " мир", "!"]
// alert(mas[0] + mas[1] + mas[2] )


// Задачa 2

// var mas = ['Привет,', " мир", "!"]
// var text = mas[0] + mas[1] + mas[2]
// alert(text)


// Задачa 3

// var mas = ['Привет,', " мир", "!"]
// mas[0] = 'Пока, '
// alert(mas[0] + mas[1] + mas[2] )


// Задачa 4

// var obj = {коля:"200", петя:"300"}

// for (x in obj){
//     console.log(`${x} -- ${obj[x]}`)
// }


// Задачa 5

// var arr = {
//     ru:['красный', "синий", "зелёный"],
//     en:['red', 'blue', 'green']
// }

// alert (arr.ru[0])



// Работа с массивами


// Задачa 1

// var arr = ['a', 'b', 'c']
// alert(arr)


// Задачa 2

// var arr = ['a', 'b', 'c']
// alert(arr[0])
// alert(arr[1])
// alert(arr[2])


// Задачa 3

// var arr = ['a', 'b', 'c', 'd'] 

// alert(`${arr[0]}+${arr[1]}`)
// alert(`${arr[2]}+${arr[3]}`)


// Задачa 4

// var arr = [2, 5, 3, 9] 
// var result = arr[0] * arr[1] + arr[2] * arr[3] 

// alert(result)



// Объекты (ассоциативные массивы)


// Задачa 1

// var obj = {a: 1, b: 2, c: 3};

// alert(obj.c)
// alert(obj['c'])


// Задачa 2

// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// alert(obj.Коля)
// alert(obj.Петя)


// Задачa 3

// var obj = {one:'понедельник', two: 'вторник', three: 'среда', four: 'четверг', five: 'пятница', six: 'суббота', seven:"воскресенье" };
// alert(obj.five)


// Задачa 4

// var obj = {1:'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7:"воскресенье" };
// var day = prompt('Введи чило')
// alert(obj[String(day)])



// Многомерные массивы


// Задачa 1

// var mas = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// alert(mas[1][0])


// Задачa 2

// var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// alert(obj.js[0])


// Задачa 3

// var ru = {0: "Понедельник", 1: "Вторник", 2: "Среда", 3: "Четверг", 4: "Пятница", 5: "Суббота", 6: "Воскресенье"}
// var en = {0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday"}

// alert(ru[0])
// alert(en[2])


// Задачa 4

// var ru = {0: "Понедельник", 1: "Вторник", 2: "Среда", 3: "Четверг", 4: "Пятница", 5: "Суббота", 6: "Воскресенье"}
// var en = {0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday"}

// var lang = prompt('Введите свой язык')
// var day = prompt('Введите свой день недели')

// if (lang = ru){
//     alert(ru[day-1])
// }
// else if (lang = en){
//     alert(en[day-1])
// }