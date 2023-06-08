import "./saas/main.scss"
import "./components/header"
import "./components/footer"

const images = document.querySelectorAll("img[data-src]")

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
            entry.target.classList.add("loaded")
            observer.unobserve(entry.target)
        }
    })
}

const options = {
    root: null,
    rootMargin: "50%",
    threshold: 0,
}

const observer = new IntersectionObserver(handleIntersection, options)

images.forEach((image) => observer.observe(image))
