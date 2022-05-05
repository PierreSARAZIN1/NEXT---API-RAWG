import './style/index.scss'; // Attention ici, il faut bien mettre l'extension `.scss`
import 'bootstrap';
import dayjs from 'dayjs';
import { Home } from './js/Home';
import { callRoute } from './js/index';
import { PageDetail } from './js/PageDetail';
import { PageList } from './js/PageList';
import { routes } from './js/routes';
// import { btnAlert, divAlert, displayAlert, deleteAlert } from './js/alert';

/*
console.log("Hello!")


const babelTest = () => {

    console.log("Hello en ES6")
}

babelTest()

//Test dayjs

console.log(dayjs().format('MMMM DD YYYY')); // January 18 2021
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY')); // 08/01/2021



const movieInit = () => {
    listResult.innerHTML = ""
    searchMax.innerHTML = "";



    fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}`)
        //fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=${APIKey}&page=1`)
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            // console.log(value.Search);
            searchMax.innerHTML += `${value.totalResults} movies finded`;


            movieDisplayer(value);
            intObs(value);


        })
        .catch(function(err) {
            searchMax.innerHTML = "";
            searchMax.innerHTML = "no results";
            // Une erreur est survenue
        });

};

*/