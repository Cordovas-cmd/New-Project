const panels = document.querySelectorAll('.panel');


// you can loop through a node list like you can with an array.
panels.forEach((panel) =>  {
panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active');
}
)})

