// For Loop

// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

// for(let i = 0; i < 10; i++){
//     console.log('Hello', i);
// }

// const names = ['Kanat', 'Aiperi', 'Sagyn', 'Umar',]
// //                0         1         2       3

// console.log(names[0]); //Kanat
// console.log(names[1]); //Aiperi
// console.log(names[2]); //Sagyn
// console.log(names[3]); //Umar
// console.log(names[5]); //undefined

// console.log(names);// [.....]

// for(let i = 0; i < names.length; i++){
//     console.log('Hello',names[i]);
// }

//          %5 КОКА
//          %3 ИН
// for (let sun = 1; sun < 101; sun++){
// if(sun % 3 === 0 && sun % 5 === 0){
//     console.log("КОКА ИН", sun);
//     }
// }

let name = 'Adahan'

for(let tamga = 0; tamga < name.length; tamga++){
    if(name[tamga].toLowerCase() === 'a'){
        console.log(name[tamga].toLowerCase());
    }
}
// for of + tab
for (const t of name) {
    console.log(t);
    if(t.toUpperCase() === 'A'){
    console.log(t.toUpperCase());
    }
}

// for in
// const user = {
//     // key : velue
//     name: 'Adahan',
//     age: 25,
//     gender: 'male'
// }

// console.log(user.name);// Adahan
// console.log(user.age);// 25
// console.log(user['gender']);// male

// for (const key in user) {
//     console.log(key, ":", user[key]);
// }

let btn1 = document.querySelectorAll('button')

for(let i = 0; i < btn1.length; i++){
    btn1[i].onclick = function() {
        document.body.style.background = btn1[i].innerText
    }
}

// btn1.onclick = function () {
//     document.body.style.background = btn1.innerText
// }