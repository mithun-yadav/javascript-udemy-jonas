const countriesContainer = document.querySelector(".container");
const errorMessage = document.querySelector(".container");

const errorShow = function(errors){
    countriesContainer.append(errors)
}
const getPosition = function(){
    return new Promise (function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

const whereAmI = async function(){
//Geolocation
try {const pos = await getPosition();
console.log(pos);
const {latitude: lat,longitude: lng} = pos.coords;
// Reverse geocodding
const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
if(!resGeo.ok){
   throw new Error('Problem in getting location data'); 
}
const dataGeo = await resGeo.json();
console.log(dataGeo);
//Country data
 const res= await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
 if(!res.ok){
    throw new Error('Problem in getting Country'); 
 }
 const data = await res.json();
 console.log(data);
 renderCountry(data[1]);}
 catch(err){
    errorShow(err.message+'🧨🧨');
    console.error(err.message+'🧨🧨');
 }
}



whereAmI();

console.log("FIRST");

const renderCountry = function (data, className = "") {
    const html = `
          <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                  <h3 class="country__name">${data.name}</h3>
                  <h4 class="country__region">${data.region}</h4>
                  <p class="country__row"><span>👫</span>${(
                    +data.population / 1000000
                  ).toFixed(0)}M People</p>
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