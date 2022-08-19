const share = document.querySelector('.share')
const shareOpen = document.querySelector('.share-open')
const openShare = document.querySelector('.open-share')
const closedShare = document.querySelector('.closed-share')

function showShareDesktop() {
    if (document.body.clientWidth >= 840) {
        share.addEventListener('click', () => {
            openShare.classList.toggle('hide')
        })
    } 
}
showShareDesktop()

function showShareMobile() {
    if (document.body.clientWidth < 840) {
        share.addEventListener('click', () => {
            if (openShare.style.display = 'none') {
                openShare.style.display = 'flex'
                closedShare.style.display = 'none'
            }

        shareOpen.addEventListener('click', () => {
            if(openShare.style.display === 'flex') {
                openShare.style.display = 'none'
                closedShare.style.display = 'flex'
            }
        })
        })
    }
}
showShareMobile()




// shareOpen.addEventListener('click', () => {
//     openShare.style.display = 'none'
//     closedShare.style.display = 'flex'
// })


//     if (openShare.style.display = 'none') {
//         openShare.style.display = 'flex'
//     }
    

// })

// share.addEventListener('click', () => {
//     openShare.style.display = 'none'
// })


