//auxiliary functions
function pinGenerate(){
    const pin = Math.floor(Math.random()*1000000);
    const stringPin = String(pin);
    if(stringPin.length == 6){
        return pin;
    }
    else{
        return pinGenerate();
    }
}
function matching(){
    const generatedPin = document.getElementById('display-pin').value;
    const userInput = document.getElementById('typed-numbers').value;
    if(generatedPin == userInput){
        document.getElementById('not-matched').style.display = 'none';
        document.getElementById('matched').style.display = 'block';
    }
    else{
        document.getElementById('matched').style.display = 'none';
        document.getElementById('not-matched').style.display = 'block';
    }
}
//generate pin
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = pinGenerate();
    document.getElementById('display-pin').value = pin;

});
//take user input
document.getElementById('key-pad').addEventListener('click',function(event){
    const key = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    if(isNaN(key)){
        if(key == 'C'){
            typedNumbers.value = '';
        }
        else if(key == 'del'){
            typedNumbers.value = typedNumbers.value.slice(0,-1);
        }
        else if(key == 'Submit'){
            matching();
        }
    }
    else{
        typedNumbers.value = typedNumbers.value+key;
    }
});


