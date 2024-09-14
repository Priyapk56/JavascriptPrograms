var addpopup=document.querySelector(".add-button")
var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".pop-up")

addpopup.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
}
)

var cancelpopup=document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    box.style.display="none"
    overlay.style.display="none"
    

}
)

var container=document.querySelector(".container")
var addbutton=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdesc=document.getElementById("book-desc")


addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
        <p>${bookdesc.value}</p>
       <button onclick="deletebook(event)" class="del">Delete</button> `      
    container.append(div)

    overlay.style.display="none"
    box.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}

