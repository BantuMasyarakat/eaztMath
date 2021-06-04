let basic = document.querySelector(".el1");
let geometric = document.querySelector(".el2");
let aritmatic = document.querySelector(".el3");
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

// deret aritmatika
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let hit = document.getElementById("hit");

let beda = document.querySelector(".beda");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");

let h4 = document.getElementById("h4");
let h5 = document.getElementById("h5");
let h6 = document.getElementById("h6");

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");

let b = 0;

hit.addEventListener("click",() => {
    let suk1 = parseFloat(s1.value);
    let suk2 = parseFloat(s2.value);

    b = suk2-suk1;
    beda.innerHTML = `Beda : ${suk2-suk1}`;
});

h4.addEventListener("click", () => {
    if( s1.value == "" || i1.value == "" || s2.value == "" || b == 0){
        alert("Masukan suku terlebih dahulu!");
    } else {
        let suk1 = parseFloat(s1.value);
        let in1 = parseInt(i1.value);

        res1.innerHTML = suk1+(in1 - 1)*b;
    }  
});

h5.addEventListener("click",() => {
    if( s1.value == "" || i2.value == "" || s2.value == "" || b == 0){
        alert("Masukan suku terlebih dahulu!");
    } else {
        let suk1 = parseFloat(s1.value);
        let in2 = parseInt(i2.value);

        let lat = 0;
        for( let i = 0; i < in2; i++ ){
            lat+=i;
        }
        res2.innerHTML = in2*suk1 + lat*b;
    }
});

h6.addEventListener("click", () => {
    if( s1.value == "" || i3.value == "" || i4.value == "" || s2.value == "" || b == 0){
        alert("Masukan suku terlebih dahulu!");
    } else {
        let suk1 = parseFloat(s1.value);
        let in3 = parseInt(i3.value);
        let in4 = parseInt(i4.value);

        res3.innerHTML = suk1+(in3 - 1)*b + suk1+(in4 - 1)*b;
    }  
});