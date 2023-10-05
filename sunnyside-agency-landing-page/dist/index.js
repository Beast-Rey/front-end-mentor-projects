const menuEl = document.querySelector('#ham')
const hideEl = document.querySelector('.hide')

menuEl.addEventListener('click', () => {
    if(hideEl.classList.contains('hide')) {
        hideEl.classList.remove('hide')
    } else {
        hideEl.classList.add('hide')
    }
})
