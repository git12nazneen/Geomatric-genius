function calculateRectangleArea(){
    // console.log('rec rec')
    const getLengthInput = document.getElementById('rectangle-length');
    // console.log(getLengthInput)
    const lengthText = getLengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length)

    // get width 
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width)

    // display calculate area
    const area = length * width;
    console.log('display rectangle area', area)

    // display rectangle area
    const rectanlgeArea = document.getElementById('rectangle-area');
    rectanlgeArea.innerText = area;
}