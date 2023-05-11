const date = new Date();
const dateEl = document.getElementById("date-el");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September","October", "November", "December"
];
dateEl.innerHTML = `
    ${days[date.getDay()]}, 
    ${date.getDate()}th 
    ${months[date.getMonth()]}
`;

let total = 0;
let remainder = 0;
let finished = 0;

document.getElementById("add-item").addEventListener("click", function(){
    const item = document.getElementById("input-el");
    const list = document.getElementById("lists");
    const newItem = document.createElement("p");
    if (item.value !== "") { // check if input field has a value
        document.getElementById("task-txt").innerHTML = "Tasks for today";
        newItem.innerHTML = item.value;
        newItem.classList.add("new-item"); // add class to newly created element
        list.appendChild(newItem);
        item.value = "";
        total += 1;
        remainder += 1;
        document.getElementById("total").innerHTML = "Total: " + total;
        document.getElementById("remainder").innerHTML = "Remaining: " + remainder;
    }
    const done = document.createElement("button");
    const doneIcon = document.createElement("i");
    doneIcon.classList.add("fa", "fa-check");
    done.appendChild(doneIcon);
    done.classList.add("done-btn");
    done.addEventListener("click", function() {
        newItem.remove();
        total -= 1;
        remainder -= 1;
        finished += 1;
        document.getElementById("total").innerHTML = "Total: " + total;
        document.getElementById("remainder").innerHTML = "Remaining: " + remainder;
        document.getElementById("done").innerHTML = "Done: " + finished;
    });
    newItem.appendChild(done);

    const dlt = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa", "fa-trash-o");
    dlt.appendChild(icon);
    dlt.classList.add("delete-btn");
    dlt.addEventListener("click", function() {
        newItem.remove();
        total -= 1;
        remainder -= 1;
        document.getElementById("total").innerHTML = "Total: " + total;
        document.getElementById("remainder").innerHTML = "Remaining: " + remainder;
    });
    newItem.appendChild(dlt);
});

document.getElementById("refresh").addEventListener("click", function(){
    total = 0;
    remainder = 0;
    finished = 0;
    document.getElementById("total").innerHTML = "Total: " + total;
    document.getElementById("remainder").innerHTML = "Remaining: " + remainder;
    document.getElementById("done").innerHTML = "Done: " + finished;
    document.getElementById("task-txt").innerHTML = "";
    document.getElementById("lists").innerHTML = "";
});