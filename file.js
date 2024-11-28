// javascript that increase the number when i click plus and decrease the number when i click minus and delete the card when i click the trash and change heart image when i click heart it should affect the html

let numbers = document.querySelectorAll('.quantity');
let decrements = document.querySelectorAll('.fa-minus-circle');
let increments = document.querySelectorAll('.fa-plus-circle');
let deleteButtons = document.querySelectorAll('.fa-trash-alt');
let hearts = document.querySelectorAll('.fa-heart');

decrements.addEventListener('click', () =>{
    for(let i = 0; i < numbers.length; i++){
        let currentNumber = parseInt(numbers[i].textContent);
        if(currentNumber > 1){
            numbers[i].textContent = currentNumber - 1;
        }
    }
})

increments.addEventListener('click', () =>{
    for(let i = 0; i < numbers.length; i++){
        let currentNumber = parseInt(numbers[i].textContent);
        numbers[i].textContent = currentNumber + 1;
    }
})

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.remove();
    })
})

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('red-heart');
    })
})
