let basic = document.querySelector(".el1");
let geometric = document.querySelector(".el2");
let aritmatic = document.querySelector(".el3");
let advance = document.querySelector(".el4");
let basicT = document.querySelectorAll(".elThrust");

basic.addEventListener("click", () => {
    basicT[0].classList.toggle('display');
});

geometric.addEventListener("click", () => {
    basicT[1].classList.toggle('display');
});

aritmatic.addEventListener("click", () => {
    basicT[2].classList.toggle('display');
});

advance.addEventListener("click", () => {
    basicT[3].classList.toggle('display');
});

// basic
let number = Array.from( document.querySelectorAll('.basicNumber') );
let basicCon = document.querySelector('div.input');
let hapus = document.querySelector('div.hapus');

let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let point = document.getElementById("point");
let equal = document.getElementById("equal");

let check = "first";
let num = Array();
let opr = Array();
let container = "";
let checkPo = false;

hapus.addEventListener("click", () => {
    basicCon.innerHTML = ""; 
    check = "first";
    checkPo = false;
    container = "";
});

for( let i = 0; i < number.length; i++ ){
    if(i==9){
        number[i].addEventListener("click", () => {
            let e = document.createElement("h4");
            e.innerHTML = 0;
            basicCon.appendChild(e);

            container += 0;
            check = false;
            
        });
    } else {
        number[i].addEventListener("click", () => {
            let e = document.createElement("h4");
            e.innerHTML = i+1;
            basicCon.appendChild(e);

            container += i+1;
            check = false;
        });
    }
}

point.addEventListener("click", () => {
    if( check === true ){
        alert("Masukan angka terlebih dahulu!");
    } else if( check === "first" ){
        alert("Masukan angka terlebih dahulu!");
    } else if( checkPo === true ){
        alert( "Anda tidak bisa menambah koma 2x" )
    } else{
        let e = document.createElement("h4");
        e.innerHTML = ".";
        basicCon.appendChild(e);
        
        check = true;
        checkPo = true;
        container += ".";
    }
});

function oprator( simbol, mass ){
    if( check === true ){
        alert(mass);
    } else if( check === "first" ){
        alert("Masukan angka terlebih dahulu!")
    } else{
        let e = document.createElement("h4");
        e.innerHTML = simbol;
        basicCon.appendChild(e);
        
        check = true;
        checkPo = false;
    
        container += simbol;
    
        
    }


}

divide.addEventListener("click", () => {
    oprator("/", "Anda sudah memasukan oprator!");
});

multiply.addEventListener("click", () => {
    oprator("*", "Anda sudah memasukan oprator!");
});

add.addEventListener("click", () => {
    oprator("+", "Anda sudah memasukan oprator!");
});

subtract.addEventListener("click", () => {
    oprator("-", "Anda sudah memasukan oprator!");
});

equal.addEventListener("click", () => {
    basicCon.innerHTML = `<h4>${eval(container)}</h4> `;
});

// Deret Geometri
