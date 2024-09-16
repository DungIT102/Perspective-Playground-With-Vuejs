window.onload = function () {
  let hrElement
  let counter = 100

  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement('hr')

    /* animation style */
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'

    /* animation duration */
    hrElement.style.animationDuration = 1 + Math.random() * 0.3 + 's'

    /* animation delay */
    hrElement.style.animationDelay = Math.random() * 0.5 + 's'

    document.body.appendChild(hrElement)
  }
}
