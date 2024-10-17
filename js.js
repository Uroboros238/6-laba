fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];

        data.forEach(user => {
            const row = userTable.insertRow(); 

            const nameCell = row.insertCell(0);
            nameCell.textContent = user.name;

            const emailCell = row.insertCell(1);
            emailCell.textContent = user.email;
        });
    })
    .catch(error => console.error('Ошибка:', error));