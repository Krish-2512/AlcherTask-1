



// const url = 'https://dummyjson.com/users';
// const tableBody = document.querySelector('#user-table-body');

// const getfacts = async () => {
//     let promise = await fetch(url);
//     let data = await promise.json();
//     let users = data.users;

//     users.forEach((user, index) => {
//         let Eachrow = document.createElement('tr');
        
//         Eachrow.innerHTML = `
//             <td>${user.firstName} ${user.lastName}</td>
//             <td>${user.age}</td>
//             <td>${user.email}</td>
//             <td>
//                 <button class="edit-btn" data-index="${index}">Edit</button>
//                 <button class="delete-btn" data-index="${index}">Delete</button>
//             </td>
//         `;
        
//         tableBody.appendChild(Eachrow);
//     });

   
//     document.querySelectorAll('.edit-btn').forEach(button => {
//         button.addEventListener('click', handleEdit);
//     });

//     document.querySelectorAll('.delete-btn').forEach(button => {
//         button.addEventListener('click', handleDelete);
//     });
// }

// const handleEdit = (e) => {
//     // const index = e.target.dataset.index;
//     const row = e.target.closest('tr');
//     const cells = row.querySelectorAll('td');

//     const firstName = prompt('Enter first name', cells[0].innerText.split(' ')[0]);
//     const lastName = prompt('Enter last name', cells[0].innerText.split(' ')[1]);
//     const age = prompt('Enter age', cells[1].innerText);
//     const email = prompt('Enter email', cells[2].innerText);

//     if (firstName && lastName && age && email) {
//         cells[0].innerText = `${firstName} ${lastName}`;
//         cells[1].innerText = age;
//         cells[2].innerText = email;
//     }
// }

// const handleDelete = (e) => {
//     const row = e.target.closest('tr');              //   closest traverses up the DOM tree until it finds the closest iterator that matches the specified selector('tr')
//     row.remove();
// }

// getfacts();

































const url = 'https://dummyjson.com/users';
const tableBody = document.querySelector('#user-table-body');

const getfacts = async () => {
    let promise = await fetch(url);
    let data = await promise.json();
    let users = data.users;

    users.forEach((user, index) => {
        let Eachrow = document.createElement('tr');
        
        Eachrow.innerHTML = `
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(Eachrow);
    });

   
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', handleEdit);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

const handleEdit = (e) => {
    // const index = e.target.dataset.index;
    const row = e.target.closest('tr');
    const cells = row.querySelectorAll('td');

    const firstName = prompt('Enter first name', cells[0].innerText.split(' ')[0]);
    const lastName = prompt('Enter last name', cells[0].innerText.split(' ')[1]);
    const age = prompt('Enter age', cells[1].innerText);
    const email = prompt('Enter email', cells[2].innerText);

    if (firstName && lastName && age && email) {
        cells[0].innerText = `${firstName} ${lastName}`;
        cells[1].innerText = age;
        cells[2].innerText = email;
    }
}

const handleDelete = (e) => {
    const row = e.target.closest('tr');              //   closest traverses up the DOM tree until it finds the closest iterator that matches the specified selector('tr')
    row.remove();
}

getfacts();

document.querySelectorAll('.sub-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle('active');
        button.querySelector('.dropdown').classList.toggle('rotate');
    });
});