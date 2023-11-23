let inputname=document.getElementById("name");
let inputurl=document.getElementById("url");
let tBody=document.getElementById("tBody");
let subbtn=document.getElementById("subbtn");

let bookmrksContainer=[];
if(localStorage.getItem("Bookmarks")==null){
    bookmrksContainer=[];
}else{
    bookmrksContainer=JSON.parse(localStorage.getItem("Bookmarks"));
    display();
}
function add(){
    var bookmark = {
        name: inputname.value,
        url: inputurl.value
    }
    bookmrksContainer.push(bookmark);
     localStorage.setItem("Bookmarks", JSON.stringify(bookmrksContainer));
    display();
    clearInput();

}
function display() {
    var data = ""
    for (var i = 0; i < bookmrksContainer.length; i++) {
        data += `
         <tr>
         <td>${i + 1}</td>
         <td>${bookmrksContainer[i].name}</td>
         <td>
             <a class="btn btn-success" target="_blank" href="${bookmrksContainer[i].url}"> visit </a>
         </td>
         <td>
             <button class="btn btn-danger" onclick="deleteRow(${i})"> Delete </button>
         </td>
     </tr>`
   
           }
           tBody.innerHTML=data;
           localStorage.setItem("Bookmarks", JSON.stringify(bookmrksContainer));

}
function deleteRow(i) {
    bookmrksContainer.splice(i, 1)
    localStorage.setItem("Bookmarks", JSON.stringify(bookmrksContainer));
    display()
}
function clearInput() {
    inputname.value = "";
    inputurl.value = "";
}