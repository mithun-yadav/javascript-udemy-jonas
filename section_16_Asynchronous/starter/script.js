"use strict";

//--------<||---------246---------->||-----------//

//synchronus means -- code executed line by line
//asynchronus means -- coordinating behaviour of a programe over a period of time (not occuring at the same time)
// alert -- block the code execution but async function not block the code execution
//call back func not alone make program asynchronus
//addEventListener handeling the click is not asynchronous because nothing running in background, it just only waiting but handeling the load of let say image is asynchronous
// The call back of setTimeout func is async but call back for map function is not async
//AJAX -- Asynchronus javascript and xml: Allow us to communicate with remote web service in an asynchronus way. With AJAX call, we can request data from web servers dynamically
//X in AJAX -- xml is data format widely used in transmit the data on web (not used in these days) now use Json Api data formate which is a javascript object converted to string
//API -- Application Programming interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other

//----------<||----------247------------||>------------//

//old school way of calling API by XML https request
//it is important to know about this xml old school rule because it tell how xml work with events and callbacks func


function renderError(msg) {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
}

const getJSON = function (url, errorMsg = "Somthing went worng!") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
/*
const getCountriesdata = function(country){
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}`); // The pasted link here is called Api End point
    request.send();
    //console.log(request.responseText); //this will not work because till now data is not fetched
    request.addEventListener('load',function(){
        console.log(this.responseText); //this data is in json formate, a big string
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = `
        <article class="country">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} People</p> // to fixed with one decimal place
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    });
}
// The order in which we called the getCountriesdata func is not neccessary to be same at webpage also because if one find delay then js will request the data and move to the next call if the order is really matter then we have to use chaining
getCountriesdata('portugal');
getCountriesdata('usa');
getCountriesdata('germany');
*/
//-----------<-----------||-----249-----||------->-------------//
//-------------------How the web works, How request and respose of data from api works-----------------//
//protocol://domain name.resourse --> https://mithunyadav.com DNS(Domain name system is change domain name to real ip address) ---> https://152.53.89:443 (https://ip address//port number)
// http request is not only for requesting data but also sending data
// https is encrypted with tls and ssl

//------------<||---------250------------||>-----------------//
//---------Call back hell--------------//
/*
const renderCountryData = function(data,className=''){
    const html = `
        <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} People</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
}
const getCountryAndNeighbour = function(country){
    // AJAX call country 
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();
    //console.log(request.responseText); //this will not work because till now data is not fetched
    request.addEventListener('load',function(){
        console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // render country data 1
        renderCountryData(data);

        // get neighbour country 2
        const neighbour = data.borders?.[0];

        if(!neighbour) return;
        // AJAX call country 2
        // never be called before first function
        const request2 = new XMLHttpRequest();
        request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();

        // one call back inside another one now if we want neighbour of that and then that, we ends with a callback hell. generated to make ascynchronus function sequential by putting them into one other
        request2.addEventListener('load',function(){
            console.log(this.responseText);

            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            // render country data 1
            renderCountryData(data2,'neighbour');
        })
    });
}
// The order in which we called the getCountriesdata func is not neccessary to be same at webpage also because if one find delay then js will request the data and move to the next call if the order is really matter then we have to use chaining
getCountryAndNeighbour('usa');

// callback hell look like triangular shape // look very messy and hard to maintain hard to understand
setTimeout(function(){
    console.log('1 second after');
    setTimeout(function(){
        console.log('2 second after');
        setTimeout(function(){
            console.log('3 second after');
        },1000)
    },1000)
},1000);

*/
// so to overcome callback hell in ajax es6 has promises

//----------------<||---------251-----------||>-------------//
// promises and fetch Api
// promises --> an object which is used as a placeholder for the future result of an asynchronous operation
// promises are time sensitive as they are work with async func so they change over time so promises are can be in different state this is called a life cycle of a promise
//promises only settled(rejected or fulfilled) once and then remain in that state forever
// most of the time we just consume the promise
/*
const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}`);
    request.send();
*/
//const request = fetch(`https://restcountries.com/v2/name/name`);
//console.log(request); //Promise {<pending>}
const renderCountry = function (data, className = "") {
  const html = `
        <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} People</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
/*
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        renderCountry(data[0]);
    })
};

getCountryData('portugal')
*/

// just simplified for cleaner not remove callbacks but do remove callbackhell
// then method always return a promise
/*
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`).then(response=> response.json()).then(data=>
        renderCountry(data[0]))
};
getCountryData('portugal')
*/

// chaining promises
// finding neighbouring country
// Throwing error manually
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     // then. always return a promise no matter whether you return anything or not and if return then it give fullfilment value of the return promise
//     //.then((response) => response.json(),err=> alert(err))
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       //const neighbour = data[0]?.borders[0]; // by putting ? i.e optionl chaining //if (!neighbour) return;// not necessary
//       const neighbour = "oijh";

//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     // Error always flow downward so can be caught at the end
//     //.catch(err=>alert(err)); // o/p- TypeError: Failed to fetch
//     .catch((err) => {
//       console.error(`${err} ☠ ☠ ☠`);
//       renderError(`Something went wrong ☠ ☠ ☠ ${err.message}. Try Again!`);
//     }) // o/p- 'Failed to fetch'
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // always called no matter promise is fulfilled or reject
// };

//Throwing error manually by following DRY princple for above if statement

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0]; // by putting ? i.e optionl chaining //if (!neighbour) return;// not necessary
      console.log(neighbour);
      if (!neighbour) throw new Error("No Neghibour found!");
      //const neighbour = "oijh"; // for testing wrong neighbour

      //country 2
      return getJSON(
        `https://restcountries.com/v2/name/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    // Error always flow downward so can be caught at the end
    //.catch(err=>alert(err)); // o/p- TypeError: Failed to fetch
    .catch((err) => {
      console.error(`${err} ☠ ☠ ☠`);
      renderError(`Something went wrong ☠ ☠ ☠ ${err.message}. Try Again!`);
    }) // o/p- 'Failed to fetch'
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // always called no matter promise is fulfilled or reject
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});

//getCountryData("austraiu")
