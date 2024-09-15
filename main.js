let gridDiv = document.getElementsByClassName('gridDiv')[0]

let link = "https://rickandmortyapi.com/api/character";

fetch(link).then(response => response.json()).then(data => {
    data.results.map(item => {
        let box = document.createElement('div')
        box.classList.add('card')
        let name = document.createElement('p')
        let img = document.createElement('img')

        name.textContent = item.name
        img.src = item.image
        box.appendChild(name)
        box.appendChild(img)
        gridDiv.appendChild(box)
    })
}
)