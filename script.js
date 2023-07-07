const headLine = new SplitType('.center-content>h3')
const myText2 = new SplitType('.center-content>p', {charClass:'char2'})
const myText = new SplitType('.but', {charClass:'char3'})
const myText3 = new SplitType('.nav>h3', {charClass:'char3'})
var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

tl.from('.char', {
    y: -100,
    stagger: 0.05,
    delay: 1
})
.from('.char2', {
    y: -100,
    stagger: 0.05,
    duration: .3
}, "-=1.2")

.from('.char3', {
    y: -100,
    stagger: 0.05,
    duration: .3
}, "-=1.2")

.to('.center-content', {
    y: 100,
    delay: .2,
    duration: 1.0
})


// const button = document.querySelector(".buttons");

// button.addEventListener("click", (e) => {
//     e.preventDefault();
//     button.classList.add("animate");

//     setTimeout(() => {
//         button.classList.remove("animate");

//     }, 600) // 1s = 1000ms
// });