const hiddenElements = document.querySelectorAll(".hidden");

const options = {
    root: null, 
    rootMargin: "0px",
    threshold: 1 
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            
        } else {
            entry.target.classList.remove("show");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

hiddenElements.forEach((el) => observer.observe(el));