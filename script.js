list = document.querySelector('ul');
button = document.querySelector('button');
inputField = document.querySelector('.add-input-field');
resetButton = document.querySelector('.reset-button');


// console.log(button);
// console.log(inputField);

button.addEventListener('click', event => {
    // console.log(event);
    if (inputField.value.trim()) {
        list.innerHTML += `
            <li class="list-group-item">
                ${inputField.value.trim()} 
                <i class="fas fa-trash text-primary delete" style="float: right;" ></i>
            </li>
            `
    }
    inputField.value = '';
    
    // console.log(list);
})

inputField.addEventListener('keypress', event => {
    // console.log(event);

    if (event.keyCode === 13) {
        if (inputField.value.trim()) {
            list.innerHTML += `
                <li class="list-group-item">
                    ${inputField.value.trim()} 
                    <i class="fas fa-trash text-primary delete" style="float: right;" ></i>
                </li>
                `
        }
        inputField.value = '';
    }
})

// console.log(list);

list.addEventListener('click', event => {
    // console.log(event);
    
    // console.log(event.target);
    // console.log(event.target.parentElement);

    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
   
    
});

// console.log(list.children);

resetButton.addEventListener('click', () => {
    list.innerHTML = '';
})