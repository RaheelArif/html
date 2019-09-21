
function changeColor() {

    var number = Math.random() * 5 + 1;
    number = Math.floor(number);
    switch (number) {
        case 1:
            document.getElementById("bg").className = "red"
            break;
        case 2:
            document.getElementById("bg").className = "green"
            break;
        case 3:
            document.getElementById("bg").className = "blue"
            break;
        case 4:
            document.getElementById("bg").className = "yellow"
            break;
            
            
            default:
            document.getElementById("bg").className = "brown"

            break;
    }
    

    var result = document.getElementById("text").value;

    document.getElementById("result").innerHTML = result;
    document.getElementById("text").value = "";
}



