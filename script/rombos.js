
function calculateRombosArea(){
    //   console.log('inside function')
        const rombosBase = document.getElementById('rombos-base');
        const rombosText = rombosBase.value;
        const bumi = parseFloat(rombosText)
        console.log( bumi)
    
    
        // get triangle height
        const rombosHeight = document.getElementById('rombos-height');
        const rombosHeightText = rombosHeight.value;
        const height = parseFloat(rombosHeightText)
        console.log(height);
    
        // calculate the rombos
        const area = 0.5 * bumi * height;
        console.log('area of the rombos', area);
    
        // display triangle area
        const displayrombosArea = document.getElementById('rombos-area')
        displayrombosArea.innerText = area
    }