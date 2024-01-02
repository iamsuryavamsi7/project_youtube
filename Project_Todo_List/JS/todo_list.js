todoList = [];

document.querySelector(`.div3`)
        .innerHTML = htmlValue;

function function01(){

    let htmlValue = ``;

    for (let i = 0; i < todoList.length; i ++){

        const newValue = todoList[i];

        const { name, dueDate } = newValue;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <div><button class="button_delete" onclick="

                todoList.splice(${i}, 1);
                function01();

            "> Delete </button>
        </div>`;

        htmlValue += html;

    }

    document.querySelector(`.div3`)
        .innerHTML = htmlValue;
}

function todoListAdding(){

    const inputElement = document.querySelector(`.div2_01`);

    const value = inputElement.value;

    const dateInputElement = document.querySelector(`.due_date`);

    const dueDate = dateInputElement.value;

    todoList.push({
        name: value,
        dueDate: dueDate,
    });

    console.log(todoList);

    inputElement.value = ``;

    function01();

}