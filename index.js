const left2 = document.querySelector('.left2')

const colors = document.querySelector('.colors')
const purple = document.querySelector('#color1')
const gold = document.querySelector('#color2')
const silver = document.querySelector('#color3')
const black = document.querySelector('#color4')

purple.onclick = () => {
    colors.innerText = "Deep Purple"
    left2.classList.add('dpurpl1')
} 

gold.onclick = () => {
    colors.innerText = "Gold"
    left2.classList.add('gold1')
}

silver.onclick = () => {
    colors.innerText = "Silver"
    left2.classList.add('silver1')

}

black.onclick = () => {
    colors.innerText = "Space Black"
    left2.classList.add('black1')

}



const next = document.querySelector('.next') 

const point1 = document.querySelector('.point1')
const point2 = document.querySelector('.point2')

next.onclick = () => {
        left2.classList.add('dpurpl2')

    if(left2.classList.contains('gold1')) {
        left2.classList.remove('gold1')
        left2.classList.add('gold2')
    } 
    if(left2.classList.contains('silver1')) {
        left2.classList.remove('silver1')
        left2.classList.add('silver2')
    }

    if(left2.classList.contains('black1')) {
        left2.classList.remove('black1')
        left2.classList.add('black2')
    }

    if(next.classList.contains('prev')) {
        next.classList.remove('prev')
        point1.style.backgound = '#9a9a9a'
    } else {
        next.classList.add('prev')
        point2.style.backgound = '#444444'
    }   
}

left2.onscroll = () => {
    
}
