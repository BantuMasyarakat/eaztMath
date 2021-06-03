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
let sukuS = document.getElementById("input1");
let sukuD = document.getElementById("input2");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");

let hitung = document.querySelector(".play");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");


let r1 = document.getElementById("resultO1");
let r2 = document.getElementById("resultO2");
let r3 = document.getElementById("resultO3");
let rasio = document.getElementById("rasio");


let r = 0;

hitung.addEventListener("click", () => {
    let suku1 = parseFloat(sukuS.value);
    let suku2 = parseFloat(sukuD.value);

    r = suku2/suku1;
    rasio.innerHTML = suku2/suku1 === NaN ? "Rasio : 0" : "Rasio : " + suku2/suku1;
});

h1.addEventListener("click", () => {
    if( r == 0 || rasio == NaN || o1.value == ""  ){
        alert("Masukan suku dahulu!");
    } else {
        let opsi1 = parseInt(o1.value);
        let suku1 = parseFloat(sukuS.value);
    
    r1.innerHTML = suku1*(Math.pow(r, opsi1)-1)/(r-1);
    }
});

h2.addEventListener("click", () => {
    if( r == 0 || o2.value == "" ){
        alert("Masukan suku dahulu!");
    } else {
        let opsi2 = parseInt(o2.value);
        let suku1 = parseFloat(sukuS.value);
        
        r2.innerHTML = suku1*Math.pow(r, opsi2 - 1);
    }
});

h3.addEventListener("click", () => {
    if( r == 0 || o3.value == "" || o4 == "" ){
        alert("Masukan suku dahulu!");
    } else {
        let opsi3 = parseInt(o3.value);
        let opsi4 = parseInt(o4.value);
        let suku1 = parseFloat(sukuS.value);

        r3.innerHTML = suku1*Math.pow(r, opsi3 - 1) + suku1*Math.pow(r, opsi4 - 1);
    }
});

