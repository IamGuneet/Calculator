keys = document.querySelectorAll('button');
let string ="";
Array.from(keys).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText == "="){
            string = eval(string);
            document.querySelector('.upper').innerHTML = string;
        } 
        else{

            console.log(e.target);
            string = string + e.target.innerText;
            document.querySelector('.upper').innerHTML = string;
        }
        if(e.target.innerText == 'C'){
            string = "";
            document.querySelector('.upper').innerHTML = string;

        }
    })
})


//Basic functions
function add(a,b){
    let c = a + b ;
    return c;
}
 
function subract(a,b){
    let c = a - b;
    return c;
}
function multiply(a,b){
    let c = a * b ;
    return c;

}
function divide(a,b){
    let c = a/b ;
    return c;
}

// operate function 
function operate (x,a,b){
    if(x === '+'){
        add(a,b)
    }
    if(x === '-'){
        subract(a,b)
    }
    if(x === '*'){
        multiply(a,b)
    }
    if (x === '/') {
        divide(a,b)
    }
}

