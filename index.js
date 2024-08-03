var setadireita =window.document.getElementById("setadireita")
var leonardo =window.document.getElementById("leonardo")
var samantha =window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaesquerda = window.document.getElementById("setaesquerda")

function rolarParadireita(){
     leonardo.style ="display:none"
     bruna.style ="display:flex"
     setadireita.style ="display:none"
     setaesquerda.style ="display:flex"
}
function rolarParaesquerda(){
 leonardo.style ="display:flex"
 bruna.style ="display:none"
 setadireita.style ="display:flex"
setaesquerda.style ="display:none"
}