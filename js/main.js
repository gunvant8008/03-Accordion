// Start writing JavaScript here!
// const menuOpen = document.querySelector('span')

// menuOpen.addEventListener('click' event => {
//     document.body.classList.add('menu-open')
// })

const accordion = document.querySelector('.accordion') // do yourself
accordion.addEventListener('click', event => {
    const headingsDiv = event.target.closest('.headings'); // value is either null or HTML element
    if(headingsDiv) {
        // select closest menu div, then apply class
        const menu = headingsDiv.closest('.menu')
        menu.classList.toggle('menu-open')
    } else {
        // ... get lost
    }
    // 1. can we get the info about the clicked element, target
    // 2. Check whether the clicked element has any parent with class 'headings'
    // If so, toggle the open class
    // Otherwise, ignore the event --- do nothing
})

// document.body -> shortcut for document.querySelector('menu')