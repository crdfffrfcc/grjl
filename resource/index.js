document.body.style.padding = '50px'
document.querySelector('.box').style.margin = '50px'
let _ = document.querySelector('.container.bottom')
_.style.top = 0
_.style.left = 0
delete _
let isfy = false
let isanimation = true
let surface = document.querySelector('.animation_surface')
let right_Side = document.querySelector('.animation_rightSide')
let side_right = document.querySelector('.animation_sideRight')
side_right.addEventListener('mouseover', () => {
    if (isanimation) {
        if (isfy) {
            side_right.style.transform = 'rotateY(-150deg)'
        } else {
            side_right.style.transform = 'rotateY(30deg)'
        }
    }
})
side_right.addEventListener('mouseout', () => {
    if (isanimation) {
        if (isfy) {
            side_right.style.transform = 'rotateY(-180deg)'
        } else {
            side_right.style.transform = 'rotateY(0deg)'
        }
    }
})
side_right.addEventListener('click', () => {
    if (isfy) {
        surface.style.transform = 'rotateY(0deg)'
        right_Side.style.transform = 'rotateY(0deg)'
        side_right.style.transform = 'rotateY(0deg)'
    } else {
        surface.style.transform = 'rotateY(-180deg)'
        right_Side.style.transform = 'rotateY(180deg)'
        side_right.style.transform = 'rotateY(-180deg)'
    }
    isfy = !isfy
    isanimation = false
})
surface.addEventListener('transitionend', () => {
    isanimation = true
})