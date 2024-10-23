document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.querySelector('.inputan');
    const btnAdd = document.querySelector('.btn-add');
    const btnClear = document.querySelector('.btn-clear');
    const btnSave = document.querySelector('.btn-save');
    const listContainer = document.createElement('ul'); 
    document.querySelector('.formTodolist').appendChild(listContainer);

   
    loadSavedItems();

 btnAdd.addEventListener('click', function (e) {
        e.preventDefault(); 
        const newItem = inputField.value.trim();
        if (newItem) {
            addItemToList(newItem);
            inputField.value = ''; 
        }
    });

    
    btnClear.addEventListener('click', function () {
        listContainer.innerHTML = ''; 
        localStorage.removeItem('todolist'); 
    });

    
    btnSave.addEventListener('click', function () {
        saveItems();
    });


    listContainer.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            e.target.remove(); 
        }
    });

    
    function addItemToList(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.style.cursor = 'pointer'; 
        listContainer.appendChild(listItem);
    }

    
    function saveItems() {
        const items = [];
        listContainer.querySelectorAll('li').forEach(li => {
            items.push(li.textContent);
        });
        localStorage.setItem('todolist', JSON.stringify(items));
        alert('List saved!');
    }

   
    function loadSavedItems() {
        const savedItems = localStorage.getItem('todolist');
        if (savedItems) {
            JSON.parse(savedItems).forEach(item => {
                addItemToList(item);
            });
        }
    }
});
