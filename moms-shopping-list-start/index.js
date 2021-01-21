const form = document['addItem']

form.addEventListener("submit", function(event){
    event.preventDefault()
})
let newListItem = ''

document.getElementById('title').addEventListener('input', e =>{
    newListItem = e.target.value
})

document.getElementById('btn').addEventListener('click', () =>{ 
    //LI created element
    const listItem = document.createElement("LI");
    //DIV created element
    const createDiv = document.createElement('div')
        //div innerhtml
        createDiv.innerHTML = newListItem
    //Button edit element
    const btnEdit = document.createElement('button')
        //button innerhtml
        btnEdit.innerHTML = 'Edit'
        const inputEdit = document.createElement('input')
    btnEdit.addEventListener('click', (e) =>{
        //show input tag () child is input tag 

        if (btnEdit.innerHTML == 'Edit'){
            newListItem = ''
            
            inputEdit.addEventListener('input', e =>{
            newListItem = e.target.value
        })
        createDiv.appendChild(inputEdit)

        //change the edit button to say save
        btnEdit.innerHTML = 'Save'
        //if button = save && clicked then change the new list item (line18 basically same)
    } else { 
            //change the new list item
        createDiv.innerHTML = newListItem
        // hide input tag and reset variables
        inputEdit.value = ''
        newListItem = '' 
        btnEdit.innerHTML = 'Edit'
    }


    })
    //Button delete element
    const btnDelete = document.createElement('button')
        //button innerhtml
        btnDelete.innerHTML = 'X'
        //delete button working
    btnDelete.addEventListener('click', () => {
        document.getElementById('list').removeChild(listItem)
})
    //append for LI
    listItem.appendChild(createDiv)
    listItem.appendChild(btnEdit)
    listItem.appendChild(btnDelete)
    //append for list
    document.getElementById('list').appendChild(listItem)
    document.getElementById('title').value = ''
    newListItem = ''
})




