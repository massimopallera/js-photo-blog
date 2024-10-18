// console.log('hi');


const rowEl = document.querySelector('.row')

const url = "https://jsonplaceholder.typicode.com/photos?_limit=6"

axios.get(url)
.then(response => {

  const data = response.data

  data.forEach(element => {

    const {title, url} = element

    const markup = `
    <div class="my_col-3 my_col-md-6 my_col-sm-12">
      <div class="my_card my_shadow p-4">

        <img src="./assets/img/pin.svg" width="40" alt="" class="pin">
        <img src="${url}" alt="" class="card-img">

        <div class="card-body my-4">
          ${title}
        </div>

      </div>
    </div>
    `
    rowEl.innerHTML += markup

    
  });

  console.log(data)
})