// Functions.

function clearData(){
    document.getElementById('input-box').value = '';
}

function calculator(value){
    document.getElementById('input-box').value += value;
}

function result(){
    let value = document.getElementById('input-box').value;
    if(value != ''){
        let operation = eval(value);
        document.getElementById('input-box').value = operation;
    }
}