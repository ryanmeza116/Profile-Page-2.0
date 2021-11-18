function changeName(){
    var element = document.getElementById("ryan-meza");
    console.log(element);
    if(element.innerText == "Ryan Meza"){
        element.innerText = "Luke Skywalker";
    }
    else{
        element.innerText = "Ryan Meza"
    }
    
}

// How to write a code that changes name back and forth, or even better, allows user to change name. 

function removeUser(element){
element.remove();
}

// Im attempting to remove an entire div but the JS isn't working, 