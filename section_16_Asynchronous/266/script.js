const getJson= async function(input){
    try{const countries = await fetch(`https://restcountries.com/v3.1/name/${input}`);
    const getCountries = await countries.json();
    console.log(getCountries);}
    catch(err){
     console.error("Country not found");
    }
  }

// const getAllCountries = async function(country1,country2,country3){
//     Promise.all([
//         getJson(country1),
//         getJson(country2),
//         getJson(country3)
//     ])
// };

const hello = async function(c1,c2,c3){
    // const res = await Promise.all([
    //     getJson(c1),
    //     getJson(c2),
    //     getJson(c3),
    // ]);
    Promise.all([
        getJson(c1),
        getJson(c2),
        getJson(c3)
    ])
    //console.log(res);
};
hello("india","pakistan","china");
// (function(){
//     getJson("india");
// })();
//getAllCountries("india","pakistan","china");
