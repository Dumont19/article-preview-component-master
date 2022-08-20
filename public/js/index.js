const share = document.querySelector('.share')
const shareOpen = document.querySelector('.share-open')
const openShare = document.querySelector('.open-share')
const closedShare = document.querySelector('.closed-share')

share.addEventListener('click', () => {
    if (window.innerWidth >= 820) {
        openShare.classList.toggle('hide')
    } else {
        openShare.style.display = 'flex'
        closedShare.style.display = 'none'
    }
})

shareOpen.addEventListener('click', () => {
    if (window.innerWidth < 820) {
        openShare.style.display = 'none'
        closedShare.style.display = 'flex'
    }
})

window.addEventListener('resize', () => {
    location.reload()
})





