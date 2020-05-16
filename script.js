list = document.querySelector('ul');
button = document.querySelector('button');
inputField = document.querySelector('.add-input-field');
resetButton = document.querySelector('.reset-button')
searchBox = document.querySelector('.search-box');


// console.log(searchBox);
// console.log(searchBox.value);

const search = () => {
    Array.from(list.children).forEach(todo => {
        // console.log(todo.textContent);

        if (!todo.textContent.toLowerCase().includes(searchBox.value.toLowerCase())) {
            todo.classList.add('d-none');
        }

        if (todo.textContent.toLowerCase().includes(searchBox.value.toLowerCase())) {
            todo.classList.remove('d-none');
        }
    })
}

searchBox.addEventListener('keyup', search);



// searchBox.addEventListener('keyup', () => {
//     // console.log(searchBox.value);
//     // console.log(list.children);

//     Array.from(list.children).forEach(todo => {
//         // console.log(todo.textContent);

//         if (!todo.textContent.toLowerCase().includes(searchBox.value.toLowerCase())) {
//             todo.classList.add('d-none');
//         }

//         if (todo.textContent.toLowerCase().includes(searchBox.value.toLowerCase())) {
//             todo.classList.remove('d-none');
//         }
//     })
// })

// Array.from(list.children).forEach(todo => {
//     console.log(todo.textContent);
// });



// console.log(button);
// console.log(inputField);

const addTodoAfterClick = () => {
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

const addTodoAfterEnter = () => {
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
}

// button.addEventListener('click', event => {
//     // console.log(event);
//     if (inputField.value.trim()) {
//         list.innerHTML += `
//             <li class="list-group-item">
//                 ${inputField.value.trim()} 
//                 <i class="fas fa-trash text-primary delete" style="float: right;" ></i>
//             </li>
//             `
//     }
//     inputField.value = '';
    
//     // console.log(list);
// })


// inputField.addEventListener('keypress', event => {
//     // console.log(event);

//     if (event.keyCode === 13) {
//         if (inputField.value.trim()) {
//             list.innerHTML += `
//                 <li class="list-group-item">
//                     ${inputField.value.trim()} 
//                     <i class="fas fa-trash text-primary delete" style="float: right;" ></i>
//                 </li>
//                 `
//         }
//         inputField.value = '';
//     }
// })

// console.log(list);

button.addEventListener('click', addTodoAfterClick);
inputField.addEventListener('keypress', addTodoAfterEnter);


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
});