let elList = document.querySelector(".movie-list")
let fragment = new DocumentFragment();
let elTemplate = document.querySelector(".movie-template").content;

let newArr = kinolar.splice(0, 101)
console.log(newArr);

for (const movie of newArr) {
    let clonedTemplate = elTemplate.cloneNode(true);
    
    clonedTemplate.querySelector(".movies-year").textContent = movie.year;
    clonedTemplate.querySelector(".movies-title").textContent = movie.title;
    clonedTemplate.querySelector(".movies-cast").textContent = `Cast: ${movie.cast}`
    clonedTemplate.querySelector(".movies-genre").textContent = `Genres: ${movie.genres}`

    fragment.appendChild(clonedTemplate)
}

elList.appendChild(fragment)
