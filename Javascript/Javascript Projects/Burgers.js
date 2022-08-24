document.body.onload = addElement;

function addElement() {


    for (i = 0; i < 5; i++) {
        var div = document.createElement("div");
    
        div.innerHTML = "test"+i;
        document.body.appendChild(div);
    }
}
