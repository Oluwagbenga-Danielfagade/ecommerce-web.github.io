document.onreadystatechange = function () {
    if(document.readyState === "complete"){
        hideLorder();
    }
};
function hideLorder(){
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    } 
}