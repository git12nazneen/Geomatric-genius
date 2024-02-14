// function calculateEllipseArea(){
//     const ellipseBase = document.getElementById('ellipse-length');
//     const ellipseText = ellipseBase.value;
//     const bumi = parseFloat(ellipseText)
//     console.log( bumi)


//     // get ellipse height
//     const ellipseHeight = document.getElementById('ellipse-width');
//     const ellipseHeightText = ellipseHeight.value;
//     const height = parseFloat(ellipseHeightText)
//     console.log(height);

//     // calculate the rombos
//     const area = 3.1416 * bumi * height;
//     console.log('area of the rombos', area);

//     // display triangle area
//     const displayEllipseArea = document.getElementById('ellipse-area')
//     displayEllipseArea.innerText = area
// }

function getElipseArea(){
  const majorRadius = getInputValueById('ellipse-major');
  console.log(majorRadius)
  const minorRadius = getInputValueById('ellipse-minor');
  const area = 3.14 * majorRadius * minorRadius;
  setInnerTextById('ellipse-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value ;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


