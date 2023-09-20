const itemInput = document.getElementById("item");
const timeInput = document.getElementById("time")
const savebtn = document.getElementById("save")
const tablebody = document.getElementById("tablebody")

//pick values to the given element

const getElementValue=(element)=>{
    return element.value;
}

//on button click

savebtn.addEventListener("click", (event)=>{
    event.preventDefault();

    //pick the value of the task name

    const itemValue=getElementValue(itemInput)
    const todoTimeValue = getElementValue(todoTimeInput);

    const tableRow = document.createElement("tr")

    const itemId = document.createElement('td')

    itemId.innerHTML = itemValue;
    tableRow.appendChild(itemId)

    const toDoTimeRd = document.createElement("td")
    toDoTimeTd.innerHTML=toDoTimeRdValue;
    tableRow.appendChild(toDoTimeTd)

    tavleBody.appendChild(tableRow)
})