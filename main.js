const header = document.querySelector("header")
const navLinks = document.querySelectorAll(".nav-link")
const toggleBtn = document.querySelector("header > button")
const navBar = document.querySelector("header > nav")
const navList = navBar.querySelector("ul")
const sections = document.querySelectorAll("section[id]");
const svg = toggleBtn.querySelector(".burger-6")

const copyrightTag = document.querySelector("footer .copyright p")
const today = new Date()

copyrightTag.textContent = `© ${today.getFullYear()} Pholosho Epoxy Coating. All rights reserved.`

window.addEventListener('resize', throttle(() => {
    if(window.innerWidth >= 810 && navBar.getBoundingClientRect().height >= 100){ 
      navBar.style.height = navList.getBoundingClientRect().height + "px"
    }
}, 200));


toggleBtn.addEventListener("click", e => {
  if(window.innerWidth <= 810){
    svg.classList.toggle("is-closed")
    if(svg.classList.contains("is-closed")){
      const navListHeight = navList.getBoundingClientRect().height
      navBar.style.height = `${navListHeight + 8}px`
    }else {
      navBar.style.height = `0`
    }
  }
})

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault()
    const id = e.currentTarget.attributes.href.value.replace("#","")
    navigateById(id)
    if(window.innerWidth <= 810){
      navBar.style.height = `0`
      svg.classList.remove("is-closed")
    }
    
    //pushToHistory(id)
  })
})

function navigateById(id){
  const element = document.getElementById(id)
    const headerHeight = header.getBoundingClientRect().height
    window.scrollTo({
      left:0,
      top: element.offsetTop - headerHeight
    })   
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

