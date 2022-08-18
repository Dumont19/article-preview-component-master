const share = document.querySelector('.share')
const closedShare = document.querySelector('.closed-share')
const openShare = document.querySelector('.open-share')

closedShare.addEventListener('mouseenter', () => {
   if (closedShare.style.display = 'flex') {
        closedShare.style.display = 'none'
        openShare.style.display = 'flex'
   }
})

openShare.addEventListener('mouseleave', () => {
        closedShare.style.display = 'flex'
        openShare.style.display = 'none'
})