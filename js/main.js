const titleElement = document.querySelector('#title')

titleElement.addEventListener("click", (event) => {
    const eventElement = event.srcElement;
    eventElement.remove();
    alert("You clicked the title");
})