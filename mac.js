// Mac 
let btnColorMac = document.querySelectorAll('#macpro')
let macbook = document.querySelector('.macbook')

let colormac = document.querySelector('.maccolor')
let current

const macimages = {
    "Space Grey": "./images/macbookpro-spacgrey.png",
    "Silver": "./images/macbookpro-silver.png"
}

btnColorMac.forEach(btn => {
    const key = btn.getAttribute('data-col')

    btn.onclick = () => {
        btnColorMac.forEach(btn => btn.classList.remove('spacegrey'))
        
        btn.classList.add('spacegrey')


        macbook.setAttribute('src', macimages[key])

        current = key
        colormac.innerHTML = current
    }

    btn.onmouseenter = () => {
        colormac.innerHTML = key
    }

    btn.onmouseleave = () => {
        colormac.innerHTML = current
    }
})

let btnStorage = document.querySelectorAll('#macpro2')

let total = document.querySelectorAll('.totalmac')
let costsize = document.querySelectorAll('.cst')

btnStorage.forEach(btn => {
    btn.onclick = () => {
        btnStorage.forEach(btn => btn.classList.remove('macsize2'))

        btn.classList.add('macsize2')

        if(btn.style.border === '2px solid #007FFF') {
            total + costsize
        }

    }
})