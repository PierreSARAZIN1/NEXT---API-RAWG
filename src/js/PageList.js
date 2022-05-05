import { rawgAPIKey } from './APIKEY';


const PageList = (argument) => {

    let i = 1;

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">See More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            //resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div" ><button class="btn btn-primary" id="displayMoreGamesPlease">More games!</button></div>')
            //const btnDisplayMore = document.getElementById('displayMoreGamesPlease');
            //console.log(btnDisplayMore)
            // const displayMoreGames = () => {
            //     i++;
            //     fetchList()
            // }
            // btnDisplayMore.addEventListener("click", displayMoreGames)


            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&search=${argument}` : url;
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };


        fetchList(`https://api.rawg.io/api/games?dates=2022-01-01,2023-01-01&ordering=-added&page=${i}&page_size=27&key=${rawgAPIKey}`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();


};

const PageListSearch = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&search=${argument}` : url;
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                        //console.log(responseData.results)
                });
        };
        // let i = 1;


        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&ordering=-added&key=${rawgAPIKey}`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();
};


const next = () => {
    const searchbar = document.getElementById('game-choice')
    const search = document.getElementById('lets-search')


    const searchValue = () => {
        let argument = ''
        argument = searchbar.value
        PageListSearch(argument)
    }
    search.addEventListener("click", searchValue)
}
next()

const PageListSearchByGenre = (argument) => {
    console.log("tu fai sune recherche par genre")
    console.log(argument)
    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&genres=${argument}` : url;
            console.log(url)
            console.log(finalURL)
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };

        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&key=${rawgAPIKey}&ordering=-added`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();
};
const PageListSearchByDev = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&developers=${argument}` : url;
            console.log(url)
            console.log(finalURL)
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };

        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&key=${rawgAPIKey}&ordering=-added`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();
};

const PageListSearchByTags = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&tags=${argument}` : url;
            console.log(url)
            console.log(finalURL)
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };

        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&key=${rawgAPIKey}&ordering=-added`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();
};

const PageListSearchByPublishers = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&publishers=${argument}` : url;
            console.log(url)
            console.log(finalURL)
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };

        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&key=${rawgAPIKey}&ordering=-added`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();
};

const PageListSearchByPlatforms = (argument) => {

    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');

        const displayResults = (articles) => {

            const resultsContent = articles.map((article) => (
                `
                <div class="card lvl2" id="${article.id}">
                <img src="${article.background_image}" class="list-images" alt="">
                        <p class="titleGame">${article.name}</p>
                        <p class="dateGame">${article.released}</p>
                        <a href="#pagedetail/${article.slug}" class="detailLink">More</a>

                </div>
            
                `

            ));

            const resultsContainer = document.querySelector('.page-list .articles');
            resultsContainer.insertAdjacentHTML('afterend', '<div class="btn-div"><button class="btn btn-primary">More games!</button></div>')

            resultsContainer.innerHTML = resultsContent.join("\n");

        };

        const fetchList = (url, argument) => {
            const finalURL = argument ? `${url}&platforms=${argument}` : url;
            console.log(url)
            console.log(finalURL)
            fetch(finalURL)
                .then((response) => response.json())
                .then((responseData) => {
                    displayResults(responseData.results)
                    console.log(responseData.results)
                });
        };

        fetchList(`https://api.rawg.io/api/games?page=${1}&page_size=27&key=${rawgAPIKey}&ordering=-added`, cleanedArgument);

    };

    const render = () => {

        pageContent.innerHTML = `
        <section class="page-list">
        <div id="search result" class="container cardContainer ">
            <div class="row" id="articlesList">
            <div class="articles">Loading...
            </div>
            </div>
        </div>
        
        </section>

      `;
        preparePage();

    };

    render();

};

export { PageList, next, PageListSearch, PageListSearchByGenre, PageListSearchByDev, PageListSearchByTags, PageListSearchByPublishers, PageListSearchByPlatforms };