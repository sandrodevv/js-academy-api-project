


let id = window.location.search.split('=')[1]
let bigc = document.querySelector(`.bigc`)
fetch(`https://rentcar.stepprojects.ge/api/Car/${id}`)
.then(resp => resp.json())
.then(resp => rendor(resp))

function rendor(obj) {
    bigc.innerHTML = `<div class="cont">
            
            <div class="img">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${obj.imageUrl1}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${obj.imageUrl2}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${obj.imageUrl3}" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
        <div class="detailsAuto">
          
            <div class="mainTitle">
              <div class="brand">${obj.brand}</div>
              <div class="model">${obj.model}</div>
          </div>
        <div class="infoMain">
          <div class="info1">
            <div class="location">
              <p>City: ${obj.city}</p>
            </div>
            <div class="fuel">
              <p>Fuel: ${obj.fuelCapacity} Liters</p>
            </div>
            <div class="price">
              <p>Price: ${obj.price}.000 $</p>
            </div>
          </div>

          <div class="info2">
            <div class="transmission">
              <p>Transmission: ${obj.transmission}</p>
            </div>
            <div class="year">
              <p>Year: ${obj.year}</p>
            </div>
            <div class="capacity">
              <p>Capacity: ${obj.capacity}</p>
            </div>
          </div>
        </div>
        </div>`
console.log(obj)
}