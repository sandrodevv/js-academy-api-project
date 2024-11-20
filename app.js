



fetch('https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=50')
.then(resp => resp.json())
.then(x => render(x.data))

let renderedCard = document.querySelector(`.renderedCard`)
let input = document.querySelector(`.inpt`)
let sortAscY = document.querySelector(`.sortAscY`)
let select = document.querySelector(`#standard-select`)
let userLog = document.querySelector(`.userLog`)






let arrayFiltered = []
let sortFiltArr = []



function render(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].brand !== null && arr[i].imageUrl1 !== null) {
      arrayFiltered.push(arr[i]) 
      renderedCard.innerHTML +=
    `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${arr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${arr[i].brand} ${arr[i].model}</h2>
            <p class="product-card__description">Year: ${arr[i].year}</p>
            <p class="product-card__description">Transmission ${arr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${arr[i].price}.000 $</span>
                <a href='./second.html?id=${arr[i].id}' class="btn btn-primary">See Details</a>
            </div>
        </div>
    </div>
</div>`

    
    }
  }

  
}



input.addEventListener('input', function(){
    let newFiltArr = arrayFiltered.filter(el => el.brand.toLowerCase().includes(input.value.toLowerCase()) || el.model.toLowerCase().includes(input.value.toLowerCase()))
    sortFiltArr = newFiltArr
    renderedCard.innerHTML = ""
    for (let i = 0; i < newFiltArr.length; i++) {
      renderedCard.innerHTML +=

    `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      
    }
  
})




select.addEventListener('change', function() {
  
  if (!input.value) {
          if (this.value == 'yearSort') {
    let newFiltArr = arrayFiltered.sort((a,b) => b.year - a.year)
    renderedCard.innerHTML = ""
    for (let i = 0; i < newFiltArr.length; i++) {
      renderedCard.innerHTML +=
      `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      
    }
        
      
    }
    if (this.value == 'priceAsc') {
      let newFiltArr = arrayFiltered.sort((a,b) => a.price - b.price)
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
    }

    if (this.value == 'priceDesc') {
    let newFiltArr = arrayFiltered.sort((a,b) => b.price - a.price)
    renderedCard.innerHTML = ""
    for (let i = 0; i < newFiltArr.length; i++) {
      renderedCard.innerHTML +=
     `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
    }

    if (this.value == 'alpha') {
      let newFiltArr = arrayFiltered.sort((a,b) => a.brand.localeCompare(b.brand))
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
  }

  } else {
    

    if (this.value == 'yearSort') {
      let newFiltArr = sortFiltArr.sort((a,b) => b.year - a.year)
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
        
      }
    }
    if (this.value == 'priceAsc') {
      let newFiltArr = sortFiltArr.sort((a,b) => a.price - b.price)
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
    }

    if (this.value == 'priceDesc') {
      let newFiltArr = sortFiltArr.sort((a,b) => b.price - a.price)
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
    }

    if (this.value == 'alpha') {
      let newFiltArr = sortFiltArr.sort((a,b) => a.brand.localeCompare(b.brand))
      renderedCard.innerHTML = ""
      for (let i = 0; i < newFiltArr.length; i++) {
        renderedCard.innerHTML +=
        `<div class="cont">
    <div class="product-card">
        <div class="product-card__image">
            <img src="${newFiltArr[i].imageUrl1}" alt="Car">
        </div>
        <div class="product-card__info">
            <h2 class="product-card__title">${newFiltArr[i].brand} ${newFiltArr[i].model}</h2>
            <p class="product-card__description">Year: ${newFiltArr[i].year}</p>
            <p class="product-card__description">Transmission ${newFiltArr[i].transmission}</p>
            <div class="product-card__price-row">
                <span class="product-card__price">Price ${newFiltArr[i].price}.000 $</span>
                <a href='./second.html?id=${newFiltArr[i].id}' class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`
      }
    }

  }

      
    
  
})

userLog.addEventListener('click', function(){
    localStorage.clear()
    window.location.href = './register.html'
})
