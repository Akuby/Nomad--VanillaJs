const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoListInput = todoForm.querySelector("#todo-value");
let todoArr = [];
const savedTodo = localStorage.getItem("todos");

if (!!savedTodo) {
    loadTodoItem(savedTodo);

}

todoForm.addEventListener('submit', handleTodoSubmit);

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoListInput.value;
    todoListInput.value = '';

    const newTodoObj = {
        id: Date.now().toString(),
        content: newTodo
    }
    todoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodoItem();
}

function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.innerText = newTodoObj.content;
    button.innerText = '❌';
    button.addEventListener('click', deleteTodoItem);

    li.append(span, button);
    todoList.append(li);

}

function deleteTodoItem(e) {
    const targetList = e.target.parentNode;
    targetList.remove();
    // filter : 조건에 맞는 요소만 새 배열로 돌려준다
    console.log(todoArr, targetList.id)
    // 주의) id 값은 항상 string이고, id값은 date 객체에서 가져왔으므로 number 이다.
   todoArr = todoArr.filter((todo) => todo.id !== targetList.id);
   saveTodoItem();
}

function saveTodoItem() {
    const parsedTodoArr = JSON.stringify(todoArr);
    localStorage.setItem("todos", parsedTodoArr);
}

function loadTodoItem(savedTodo) {
    const parsedTodos = JSON.parse(savedTodo);
    parsedTodos.forEach(paintTodo); // argument로 넘겨줄 필요도 없다.
    todoArr = [...parsedTodos];
}
