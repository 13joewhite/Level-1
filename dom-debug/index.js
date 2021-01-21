const colors = ["red", "blue", "green"]

var newInput = '';

document.getElementById('input').addEventListener('input', e => {
    newInput = e.target.value
    console.log(e)
})

document.getElementById("add").addEventListener("click",  e => {
    const subItem = createSubItem(newInput)
    console.log(e)
    document.getElementById("list").appendChild(subItem)
    document.getElementById('input').value = ''
    newInput = ''
})



function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", e => {
       
        console.log(e)
        dropDown.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown 
} 

function createSubItem(e){
    const subItem = document.createElement("div") 
    subItem.value = e
    subItem.textContent = subItem.value
    console.log(subItem.textContent)
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem") 
    console.log(subItem)
    return subItem
}