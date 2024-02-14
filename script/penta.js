function calculatePentagoneArea(){
    const perimeter = getInputValueByID('penta-peri');
    const apothem = getInputValueByID('penta-apo');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-span',area);
    
}

function getInputValueByID(inputFieldId){
    const inputField = document.getElementById(inputFieldId);  // jei id dek, sheta diyei DOM ke khuje ber korbo
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elemetId,area){

    const element = document.getElementById(elemetId);
    element.innerText = area;

}