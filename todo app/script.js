let task = document.getElementById("input-tast");
let add = document.getElementById("add-btn");
let task_cont = document.getElementById("task-c");
let i = 1;

add.addEventListener("click", function() {
    let task_v = task.value;
    if (task_v === "") return;
    
    localStorage.setItem(i, task_v);
    let answer = localStorage.getItem(i);
    task.value = "";
    
    let box = document.createElement("div");
    box.classList.add("task-ele");
    box.innerHTML = `
        <div class="task-p">
            <p>${answer}</p>
        </div>
        <div class="delbutton add">
            <i class="fa-solid fa-delete-left"></i>
        </div>
    `;
    i++;

    let delbtn = box.querySelector(".delbutton");
    delbtn.addEventListener("click", function() {
        box.remove();
        localStorage.removeItem(i);
    });

    task_cont.appendChild(box);
});


window.addEventListener("load", function() {
    for (let j = 1; j <= localStorage.length; j++) {
        let task_v = localStorage.getItem(j);
        if (task_v) {
            let box = document.createElement("div");
            box.classList.add("task-ele");
            box.innerHTML = `
                <div class="task-p">
                    <p>${task_v}</p>
                </div>
                <div class="delbutton add">
                    <i class="fa-solid fa-delete-left"></i>
                </div>
            `;
            
            let delbtn = box.querySelector(".delbutton");
            delbtn.addEventListener("click", function() {
                box.remove();
                localStorage.removeItem(j);
            });

            task_cont.appendChild(box);
        }
    }
});



