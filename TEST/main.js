// task 1 
const b = (str) => {
    const a = /^\d+$/;
    return a.test(str);
}

console.log(b("12345")); 
console.log(b("12a45")); 






/// task 2 
// function timer() {
//     let seconds = 1;
//     setInterval(() => {
//         console.log(Прошла секунда: ${seconds});
//         seconds++;
//     }, 1000);
// }

// timer();

//Task 3 
// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
//         if (i > 10) {
//             clearInterval(interval); // Останавливаем интервал после 10
//         }
//     }, 1000);
// };

// count();


//task4
// const block = document.getElementById('block');


// block.addEventListener('click', function() {

//     if (block.classList.contains('active')) {

//         block.classList.remove('active');
//         block.style.backgroundColor = 'lightgray';
//     } else {
//         block.classList.add('active');
//         block.style.backgroundColor = 'skyblue';
//     }
// });



//task 5 
// const xhr = new XMLHttpRequest();
// xhr.open("GET","main.json");

// xhr.onload = function () {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// };
// xhr.send();