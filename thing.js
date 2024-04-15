function openmain(){
    var checkbox = document.getElementById("checkbox");

    var url = "main.html"

    if(checkbox.checked == true){
        setTimeout(function() {
        window.location.href=url;
        } ,1000);
    }
}