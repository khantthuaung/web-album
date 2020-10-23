// scrolling effect
const leftScrollBtn = document.getElementById('left-scroll')
const rightScrollBtn = document.getElementById('right-scroll')
const categoryEl = document.querySelector('.category > ul')

leftScrollBtn.addEventListener('click', () => {
    categoryEl.scrollLeft -= 150
})

rightScrollBtn.addEventListener('click', () => {
    categoryEl.scrollLeft += 150
})

// image hover effect 
const figureELs = document.querySelectorAll('figure')



figureELs.forEach((element) => {
    console.log(element.childNodes)
    element.addEventListener('mouseover',() => {
       element.childNodes[5].classList.add('makeVisible')
       element.childNodes[1].classList.add('top-layer')
    })
    
    element.addEventListener('mouseout',() => {
        element.childNodes[5].classList.remove('makeVisible')
        element.childNodes[1].classList.remove('top-layer')
    })
})
