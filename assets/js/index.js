            
let add1 = document.getElementById('add');
function getAndUpdate(){
    console.log('button is clicked');
    tit = document.getElementById('title').value;
    console.log(tit);
    desc = document.getElementById('description').value;
    console.log(desc);
    if(localStorage.getItem('jsonItem') == null){
        josnItemArray = [];
        josnItemArray.push([tit, desc]);
        localStorage.setItem('jsonItem', JSON.stringify(josnItemArray));
    }else{
        josnItemArrayStr = localStorage.getItem('jsonItem');
        josnItemArray = JSON.parse(josnItemArrayStr);
        josnItemArray.push([tit, desc]);
        localStorage.setItem('jsonItem', JSON.stringify(josnItemArray));
    }

    update();
}

function update(){
    if(localStorage.getItem('jsonItem') == null){
        josnItemArray = [];
        localStorage.setItem('jsonItem', JSON.stringify(josnItemArray));
    }else{
        josnItemArrayStr = localStorage.getItem('jsonItem');
        josnItemArray = JSON.parse(josnItemArrayStr);
    }
     //table populate 
     let tableb = document.getElementById('tableBody');
     let str ="";
     josnItemArray.forEach((element, index) => {
         str += `
                 <tr>
                 <th>${index + 1}</th>
                 <td>${element[0]}</td>
                 <td>${element[1]}</td>
                 <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</td>
                </tr>
     `
     });
 
     tableb.innerHTML = str;
}

add1.addEventListener('click', getAndUpdate);

//Delete the data 
function deleted(indexItem){
    josnItemArrayStr = localStorage.getItem('jsonItem');
        josnItemArray = JSON.parse(josnItemArrayStr);
        josnItemArray.splice(indexItem, 1);
        localStorage.setItem('jsonItem', JSON.stringify(josnItemArray));
}

//clear all list item
function clearStorage(){
   if(confirm('Do you want to clear?')){
    console.log('Clearing all list items');
    localStorage.clear();
   }
}