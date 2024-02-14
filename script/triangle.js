

function calculateTriangleArea(){
//   console.log('inside function')
    const triangleBase = document.getElementById('triangle-base');
    const triangleText = triangleBase.value;
    const bumi = parseFloat(triangleText)
    console.log( bumi)


    // get triangle height
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // calculate the triangle
    const area = 0.5 * bumi * height;
    console.log('area of the triangle', area);

    // display triangle area
    const displayTriangleArea = document.getElementById('triangle-area')
    displayTriangleArea.innerText = area
}
