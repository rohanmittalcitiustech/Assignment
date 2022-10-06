function addButton(){
    let tBox= document.createElement('input');
    tBox.setAttribute('type',"email");
    document.body.appendChild(tBox);
    tBox.placeholder = "Enter your email address";


    let tButton = document.createElement("input");
    tButton.setAttribute("type","button");
    tBox.value="remove email address";

    document.body.appendChild(tButton);
    tButton.onClick =  function()
    {
        document.body.removeChild(tBox);
        document.body.removeChild(tButton);
    }
}

