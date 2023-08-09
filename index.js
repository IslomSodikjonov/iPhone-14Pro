const left2 = document.querySelector('.left2')

const colors = document.querySelector('.colors')
const purple = document.querySelector('#color1')
const gold = document.querySelector('#color2')
const silver = document.querySelector('#color3')
const black = document.querySelector('#color4')

// Enter
purple.onmouseenter = () => {
    colors.innerText = " - Deep Purple"
} 

gold.onmouseenter = () => {
    colors.innerText = " - Gold"
}

silver.onmouseenter = () => {
    colors.innerText = " - Silver"
}

black.onmouseenter = () => {
    colors.innerText = " - Space Black"
}


purple.onclick = () => {
    left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`    
} 

gold.onclick = () => {
    left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`
}

silver.onclick = () => {
    left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`    
}

black.onclick = () => {
    left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`
}


// Leave
purple.onmouseleave = () => {
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`) {
        colors.innerText = " - Deep Purple"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`) {
        colors.innerText = " - Gold"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`) {
        colors.innerText = " - Silver"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`) {
        colors.innerText = " - Space Black"
    }
} 

gold.onmouseleave = () => {
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`) {
        colors.innerText = " - Deep Purple"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`) {
        colors.innerText = " - Gold"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`) {
        colors.innerText = " - Silver"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`) {
        colors.innerText = " - Space Black"
    }
}

silver.onmouseleave = () => {    
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`) {
        colors.innerText = " - Deep Purple"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`) {
        colors.innerText = " - Gold"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`) {
        colors.innerText = " - Silver"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`) {
        colors.innerText = " - Space Black"
    }
}

black.onmouseleave = () => {
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`) {
        colors.innerText = " - Deep Purple"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`) {
        colors.innerText = " - Gold"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`) {
        colors.innerText = " - Silver"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`) {
        colors.innerText = " - Space Black"
    }
}



const next = document.querySelector('.next') 
const prev = document.querySelector('.prev') 

// Next
next.onclick = () => {
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754251868")`  
        next.style.display = "none"
        prev.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754254250")`
        next.style.display = "none"
        prev.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754253990")`
        next.style.display = "none"
        prev.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754254241")`
        next.style.display = "none"
        prev.style.display = "block"
    }  
}


// Previous
prev.onclick = () => {
    if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754251868")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578")`         
        prev.style.display = "none"
        next.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754254250")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519")`
        prev.style.display = "none"
        next.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754253990")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488")`   
        prev.style.display = "none"
        next.style.display = "block"
    } else if(left2.style.backgroundImage === `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660754254241")`) {
        left2.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510")`
        prev.style.display = "none"
        next.style.display = "block"
    }
}