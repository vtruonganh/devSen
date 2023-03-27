const imageWrapper1 = document.querySelector('.image-wrapper1')
const imageItems1 = document.querySelectorAll('.image-wrapper1 > *')
const imageLength1 = imageItems1.length
const perView1 = 3
console.log(imageItems1)
let totalScroll1 = 0
const delay1 = 2000

imageWrapper1.style.setProperty('--per-view1', perView1)
for(let i = 0; i < perView1; i++) {
  imageWrapper1.insertAdjacentHTML('beforeend', imageItems1[i].outerHTML)
}

let autoScroll1 = setInterval(scrolling1, delay1)


function scrolling1() {
  totalScroll1++
  if(totalScroll1 == imageLength1 + 1) {
    clearInterval(autoScroll1)
    totalScroll1 = 1
    imageWrapper1.style.transition = '0s'
    imageWrapper1.style.left = '0'
    autoScroll1 = setInterval(scrolling1, delay1)
  }
  const widthEl1 = document.querySelector('.image-wrapper1 > :first-child').offsetWidth + 24
  imageWrapper1.style.left = `-${totalScroll1 * widthEl1}px`
  imageWrapper1.style.transition = '.3s'
}