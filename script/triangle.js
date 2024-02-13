
/**
 * objecttive: get base and height. calculate the area by using the formula and display the area
 * 
 * step-1 : get the base from the input
 * step-2 : used ID inside input and used getElementById() to get the input field named by the id and placed inside triInput variable
 * step-3 : triInput.value used to retrive the current value entered by the user in that input field, and stored in triInputValue variable
 * step-4 : normally it's type is string, so we used parseFloat(triInputValue) and stored the result in base variable
 * step-5 : 
 */

function calculateTriangle(){
    // for triangle base value
    
    const triBaseInput = document.getElementById('triangleBase');
    const triInputValue = triBaseInput.value;
    const base = parseFloat(triInputValue);
    console.log(base);
    
    
    // for triabgle height value

    const triHeightInput = document.getElementById('triangleHeight');
    const triHeiInputValue = triHeightInput.value;

    height = parseFloat(triHeiInputValue);
    console.log(height);

    // calculate triangle area

    const TriangleArea = 0.5 * base * height;   // base and height got from above
    console.log("Triangle Area is :", TriangleArea);


    //display triamgle area

    const triAreaSpan = document.getElementById('triangle-area');
    triAreaSpan.innerText = TriangleArea;

}


function calculateRectangle(){
    // for width
    const rectangleInput = document.getElementById('rectangleWidth');
    const rectInput = rectangleInput.value;
    const width = parseFloat(rectInput);
    console.log(width);
    // for length
    const rectLenInput = document.getElementById('rectangleLength');
    const rectLengthValue = rectLenInput.value;
    const length = parseFloat(rectLengthValue);
    console.log(length);
    

    // for calculating area of tirangle

    const areaRectangle = width * length;
    console.log("Area of Rectangle is :", areaRectangle);

    // display rectangleArea

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = areaRectangle;
    
}


function calculateParaArea(){

    const paraBaseIn = document.getElementById('paraBase');
    const baseValue = paraBaseIn.value;
    const basePara = parseFloat(baseValue);
    console.log(basePara);


    const paraheightIn = document.getElementById('paraHeight');
    const heightValue = paraheightIn.value;
    const heightPara = parseFloat(heightValue);
    console.log(heightPara);

    // for area calculation

    const area_para = basePara * heightPara;
    console.log("Area of Parallelogram is :",area_para);

    // for displaying area_para

    const paraSpan = document.getElementById('para-area');
    paraSpan.innerText = area_para;

}



function calculateRombus(){

    const RomD1 = document.getElementById('romd1');
    const romD1Value = RomD1.value;
    const D1 = parseFloat(romD1Value);
    console.log(D1);

    const RomD2 = document.getElementById('romd2');
    const romD2Value = RomD2.value;
    const D2 = parseFloat(romD2Value);
    console.log(D2);

    // area calculation

    const RomArea = 0.5 * D1 * D2;
    console.log("Area of Rombus is :", RomArea);


    // displaying area

    const romSpan = document.getElementById('rom-area');
    romSpan.innerText = RomArea;
    
    

}