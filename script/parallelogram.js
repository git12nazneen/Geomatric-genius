function parallelogramArea(){
  const parallelogramLength = document.getElementById('parallelogram-length');
  const parallalText = parallelogramLength.value;
  const length = parseFloat(parallalText);
  console.log(length)

    //get width
    const parallelogramWidth = document.getElementById('parallelogram-width') ;
    const paralalWidthText = parallelogramWidth.value;
    const width = parseFloat(paralalWidthText);
    console.log(width);

    // calculate the parallelogram
    const area = length * width;
    console.log('parallelogram', area)

    // display main area
    const mainArea = document.getElementById('parallelagram-area');
    mainArea.innerText = area;
}