
//📌 DOM elements
const rowEl = document.querySelector('.row')
const overlayEl = document.querySelector('.overlay')
const btnEl = document.querySelector('.overlay button')
const imgOverlayEl = document.querySelector('.overlay img')
let cardEl;
let imgEl;

//📌Variables
const n = 6
const uri = "https://jsonplaceholder.typicode.com/photos"  //Path
const queryString = `?_limit=${n}` //Query String

const url = uri+queryString //URL


//📌 Functions

/**
 * 
 * @param {String} title - the description/title to print in the card
 * @param {String} url - the img path
 * @returns  card markup
 */
function generateMarkup(title, url){
  return `
  <div class="my_col-3 my_col-md-6 my_col-sm-12">
    <div class="my_card my_shadow p-3">

      <img src="./assets/img/pin.svg" width="40" alt="" class="pin">
      <img src="${url}" alt="" class="card-img">

      <div class="card-body my-4">
        ${title}
      </div>

    </div>
  </div>
  `
}


btnEl.addEventListener('click', function(){
  overlayEl.classList.add('d_none')
})

//📌AJAX with Axios
axios.get(url)
.then(response => {
  
  //main
  const data = response.data //Save only data from response

  //for each element in data, create the markup
  data.forEach(element => {

    const {title, url} = element //destructuring data, taking just what I need

    const markup = generateMarkup(title,  url) //to generate the markup

    rowEl.innerHTML += markup //add markup to html

    cardEl = rowEl.querySelectorAll('.my_card')

    cardEl.forEach(card => card.addEventListener('click', function(){

      imgEl = card.querySelector('.card-img')
      
      overlayEl.classList.remove('d_none') //remove d_none class from overlay

      imgOverlayEl.src = imgEl.src //change img source of overlay with source of the img clicked

      
    }))

  });

  //log to control what's in data
  // console.log(data)
})