var names=document.getElementById("name")
var url=document.getElementById("url")
var btn=document.getElementById("btn")
var text=document.getElementById("text")
var form=document.getElementById("form")
var addContainer=[]


var pattern= /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\.com\/?$/;

if (localStorage.getItem("set")===null) {
   addContainer=[]
}
else {
   addContainer=JSON.parse(localStorage.getItem("set"))
   display()
}
 
btn.addEventListener("click",addFunction)
btn.addEventListener("click",validateForm)


function addFunction() {
   if (validationUrl()===true) {
   form.classList.remove("valid")
   form.classList.remove("invalid")

   var adding = {
   aName:names.value,
   aUrl:url.value
   }

  addContainer.push(adding);
   localStorage.setItem("set",JSON.stringify(addContainer))
     display()
       text.innerHTML=""
}
     else {
   form.classList.add("valid")
   form.classList.add("invalid")
     } 
   
}
 
 

function display (){
   var list=""
   for (var i = 0; i < addContainer.length; i++) {
    list +=`
         <tr>
         <td>${i+1}</td>
         <td>${addContainer[i].aName}</td>
         <td><button class="btn btn2"><a href=${addContainer[i].aUrl} target="_blank"><i class="fa-solid fa-eye"></i>visit</a></button></td>
         <td><button class="btn btn2 btn3" onclick="deleteRow(${i})"><i class="fa-solid fa-trash"></i>delete</a></button></td>

        

         </tr>
         `
      
   }
   
 
document.getElementById("tBodyy").innerHTML=list
   

}


url.addEventListener("keydown",validationUrl)
function validationUrl(){
 if (url.value.match(pattern)){
  form.classList.add("valid")
   form.classList.remove("invalid")
   text.innerHTML="valid"
   text.style.color="#00ff00"
  
return true;

  
}
 
 else {
  
   form.classList.remove("valid")
   form.classList.add("invalid")
   text.innerHTML="invalid:should enter this URL example  https://www.example.com/"
   text.style.color="red"
  form.classList.remove("valid")
 return false
  

 }

}
function deleteRow(i) {
   addContainer.splice(i,1)
    localStorage.setItem("set",JSON.stringify(addContainer))
   display()
   
}
function clear() {
   names.value=""
   url.value=""
   form.classList.remove("valid")
   form.classList.remove("invalid")
   
}
function pop() {
   addContainer.pop()
 display()
 form.classList.remove("valid")
   form.classList.remove("invalid")
 

}



function validateForm() {

   if (names.value == "" || url.value =="") {

    alert("Name must be filled out");
     form.classList.remove("valid")
   form.classList.remove("invalid")


pop()

      
   }
 else {
      clear()
   }
}



























// var Name=document.getElementById("name")
// var age = document.getElementById("age")
// var address= document.getElementById("address")
// var email =document.getElementById("email")
// var count =document.getElementById("count")
// var addContainer=[];
 

// var mood ="create"
// var old;
 
// function addPerson() {
//    var person = {
//       pName:Name.value,
//       pAge:age.value,
//       pAddress:address.value,
//       pEmail:email.value,
//       pCount:count.value
//    }
//   if(mood==="create"){
//  addContainer.push(person)

//   displayData()
// }
// else {
//   addContainer[old] = person
//   mood="create"
//   document.getElementById("adding").innerHTML="add person"
//    displayData()
// }
   
// }

// function displayData() {

//    personList=""
//    for (var i = 0; i < addContainer.length; i++) {
//          personList +=`
//          <tr>
//          <td>${i+1}</td>
//          <td>${addContainer[i].pName}</td>
//          <td>${addContainer[i].pAge}</td>
//          <td>${addContainer[i].pAddress}</td>
//          <td>${addContainer[i].pEmail}</td>
//          <td>${addContainer[i].pCount}</td>
//          <td>
//          <button class="btn btn-info" onclick="deleteRow(${i})">delete</button>
//          <button class="btn btn-warning" onclick="updateRow(${i})">update</button>
//          </td>
//          </tr>
//          `
      
//    }
//    document.getElementById("tBody").innerHTML=personList
  
   
// }
// function clear() {
//   Name.value="";
//   age.value="";
//  address.value="";
//   email.value="";
//   count.value=''

  
// }
// function clearAll() {
// addContainer.splice(0)
// displayData();
// }
// function pop() {
// addContainer.pop()
// displayData()

  
// }
// function deleteRow(i) {
// if(addContainer[i].pCount>0) 
// {addContainer[i].pCount--}
// else {
   
//     addContainer.splice(i,1)
// }
//   displayData()

  
// }
// function updateRow(i) {
// Name.value=addContainer[i].pName
// age.value =addContainer[i].pAge
// address.value=addContainer[i].pAddress
// email.value=addContainer[i].pEmail
// count.value=addContainer[i].pCount
// document.getElementById("adding").innerHTML="update"
// mood="update"
//   tmb=i;

  
// }

// function validateForm() {

//    if (Name.value == "" || age.value =="" || address.value =="" || email.value =="") {

//     alert("Name must be filled out");
    

// clear()
// pop()
      
//    } else {
//       clear()
//    }
// }

//  different bettwen nodelist and collection html

//  HTMLCollection

// The element methods getElementsByClassName() and getElementsByTagName() return a live HTMLCollection. It only includes the matching elements (e.g. class name or tag name) and does not include text nodes, it provides only two methods item and namedItem

// . NodeList

// The element method *querySelectorAll()* returns a static NodeList. They look like arrays but are not.

// NodeLists have a defined forEach method as well as a few other methods including item, entries, keys, and values.

// NodeLists behave differently depending on how you access them; if you access elements using childNodes, the returned list is live and will update as more elements are added to the node. If it’s accessed using querySelectorAll(), the returned list is static and will not update if more elements are added to the node.


