const todoform = document.querySelector(".form");
const todoInput = document.querySelector(".form input[type='text']");
const ul = document.querySelector(".todoList");

todoform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-button">
            <button class="todo-btn done" title="Done"><img class="done-tick" src="./done-removebg-preview.png" alt="Done"></button>
            <button class="todo-btn remove" title="Remove"><img class="remove-tick" src="./remove-removebg-preview.png" alt="Remove"></button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml;
    ul.append(newLi);
    todoInput.value = "";
});


ul.addEventListener("click", (e)=>{
    if (e.target.classList.contains("done-tick")){
        const liSpan = e.target.parentNode.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
    if (e.target.classList.contains("remove-tick")){
        const targetLi = e.target.parentNode.parentNode.parentNode;
        console.log(ul);
        targetLi.remove() 
    }
});