const share = document.querySelector('.share')
const shareOpen = document.querySelector('.share-open')
const openShare = document.querySelector('.open-share')
const closedShare = document.querySelector('.closed-share')

function showShareDesktop() {
    if (document.body.clientWidth > 820) {
        share.addEventListener('click', () => {
            openShare.classList.toggle('hide')
        })
    }

    if (document.body.clientWidth < 820) {
        share.addEventListener('click', () => {
            openShare.classList.toggle('hide')
            closedShare.style.display = 'none'
        })
    }
}
showShareDesktop()





