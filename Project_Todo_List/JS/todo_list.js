let todoList = [];

function loopTodo(){

    let insideValue = ``;

    let todoHtml = ``;

    for(let i = 0; i < todoList.length; i ++){

        insideValue = todoList[i];

        const { name, duedate } = insideValue;

        const html = `
        
        <div>
            
            ${name}
        
        </div>
        <div>
            
            ${duedate}

        </div>
        <div>
            
            <button class="delete_button" onclick="
            
                todoList.splice(${i}, 1);

                loopTodo();

            "> Delete </button>
            
        </div>

        `;

        todoHtml += html;
        
    }

    document.querySelector(`.div3`)
        .innerHTML = todoHtml;
}

function AddTodo(){

    const inputElement = document.querySelector(`.input_text`);

    const inputValue = inputElement.value;

    const dueDateInputElement = document.querySelector(`.due_date`);

    const dueDateInputValue = dueDateInputElement.value;

    todoList.push({
        name: inputValue,
        duedate: dueDateInputValue
    });

    console.log(todoList);

    inputElement.value = ``;

    loopTodo();

}