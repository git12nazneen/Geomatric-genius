function calculatePentagonArea(){
    //   console.log('inside function')
        const pentagonBase = document.getElementById('pentagon-base');
        const pentagonText = pentagonBase.value;
        const bumi = parseFloat(pentagonText)
        console.log( bumi)
    
    
        // get triangle height
        const pentagonHeight = document.getElementById('pentagon-height');
        const pentagonHeightText = pentagonHeight.value;
        const height = parseFloat(pentagonHeightText)
        console.log(height);
    
        // calculate the triangle
        const area = 0.5 * bumi * height;
        console.log('area of the triangle', area);
    
        // display triangle area
        const displaypentagonArea = document.getElementById('pentagon-area')
        displaypentagonArea.innerText = area
    }
    