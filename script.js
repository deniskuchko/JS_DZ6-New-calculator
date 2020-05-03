let ulSpisok = document.getElementById('list');
let saveBtn = document.getElementById('save');
let clearBtn = document.getElementById('clear');
let lap = document.getElementById('lap');

function loadTodo(){
    if(localStorage.getItem('Vichislenie')){
        ulSpisok.innerHTML = localStorage.getItem('Vichislenie')
    }
};

function insert(num){
    document.querySelector('.display').value = document.querySelector('.display').value + num;
    
};

function equal(){
    let exp = document.querySelector('.display').value;
    if(exp){
        document.querySelector('.display').value = window.eval(exp);
        document.querySelector('.display').value = parseFloat(window.eval(exp).toFixed(9));
    }

    
   /*  function epsEqu(x, y) {
        return Math.abs(x - y) < Number.EPSILON * Math.max(Math.abs(x), Math.abs(y));
    }
    A = 0.1;
    B = 0.2;
    C = A + B;
    epsEqu(A + B, C);
    console.log(epsEqu(A + B, C)); */
    console.log( window.eval(exp));
};

document.getElementById('equal').addEventListener('click', equal);

function clean(){
    document.querySelector('.display').value = '';
};

function back(){
    let exp = document.querySelector('.display').value;
    document.querySelector('.display').value = exp.substring(0, exp.lenght - 1);
};

/* Math.trigoNometria = function(){
    switch(trigoNometria) {
        case sin:
            trigoNometria = Math.sin();
            break;
        
    }
}
function func(trigono_metria){
        let znachenie = document.querySelector('.display').value ;
        console.log(trigono_metria);
        console.log(znachenie);
        
        trigono_metria = Math.trigoNometria(znachenie); 
    
    
} */

function sinus() {
    A = document.querySelector('.display').value;
    let rounded = parseFloat(Math.sin(A).toFixed(9)); 
    document.querySelector('.display').value = rounded;
    
};

function cocinus() {
    A = document.querySelector('.display').value;
    let rounded = parseFloat(Math.cos(A).toFixed(9)); 
    document.querySelector('.display').value = rounded;
    
};

function tangens() {
    A = document.querySelector('.display').value;
    let rounded = parseFloat(Math.tan(A).toFixed(9)); 
    document.querySelector('.display').value = rounded;
    
};

function catangens() {
    A = document.querySelector('.display').value;
    let znachenie = 1/Math.tan(A);
    document.querySelector('.display').value = parseFloat(znachenie.toFixed(9)); 
    
    
};


function percent(){
    let znachenie = document.querySelector('.display').value / 100;
    document.querySelector('.display').value  = znachenie + '%';
};


function factorial(n){
    var result = 1;
    while(n){
        if(Math.trunc(n) == n){
            result *= n--;
        } else{
            alert('Введите целое число');
            result = 0;
            break;
        }
        
    }
    return result;
};

function factorials() {
    let znachenie = document.querySelector('.display').value;
        if(znachenie < 0 ){
        alert('Значение факториала должно быть больше 0 И целым числом');
    } else{
        document.querySelector('.display').value = factorial(znachenie); 
    }
    
};

function stepen(){
    let znachenie = document.querySelector('.display').value;
    let A= Math.pow(znachenie, 2);
    document.querySelector('.display').value = parseFloat(A.toFixed(9)); 

};

function grad(){
    function getTanDeg(deg){
        var rad = deg * Math.PI/180;
        return rad;
    }
    
        alert(' Далее необходимо нажать функцию')
        let znachenie = document.querySelector('.display').value;
        document.querySelector('.display').value = getTanDeg(znachenie); 
};

function Ravno(){
   

    let span = document.createElement('span');
    span.className = 'number_lap';
    span.innerHTML = equal( document.querySelector('.display').value) + '=' + equal(document.querySelector('.display').value);
    document.getElementById('lap').append(span);
   
    
    /* span.replaceWith(span); */
}

document.getElementById('equal').addEventListener('click', Ravno);

saveBtn.addEventListener('click', function(){
    localStorage.setItem('Vichislenie', lap.innerHTML);
})

clearBtn.addEventListener('click', function(){
    lap.innerHTML = '';
    localStorage.setItem('Vichislenie', lap.innerHTML);
});
loadTodo();
