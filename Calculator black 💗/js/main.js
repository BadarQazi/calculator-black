var n1 = document.getElementById("num1")
var n2 = document.getElementById("num2")
var res = document.getElementById("result")



n1.addEventListener("mousewheel",
                function (event) {
                    this.blur()
                });
n2.addEventListener("mousewheel",
                function (event) {
                    this.blur()
                });

document.getElementById("add").addEventListener("click", function(){
    res.value = parseInt(n1.value) + parseInt(n2.value)
});
document.getElementById("sub").addEventListener("click", function(){
    res.value = parseInt(n1.value) - parseInt(n2.value)
});
document.getElementById("mul").addEventListener("click", function(){
    res.value = parseInt(n2.value) * parseInt(n1.value)
});
document.getElementById("dvd").addEventListener("click", function(){
    res.value = parseInt(n1.value) / parseInt(n2.value)
});