import { rawgAPIKey } from './APIKEY';

const PageDetail = (argument) => {
    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, "-");

        const displayGame = (gameData) => {
            const { name, released, description, background_image, developers, tags, genres, publishers, platforms, website, rating, rating_top, ratings, stores } = gameData;
            // const { results } = responseImagesData;
            const articleDOM = document.querySelector(".page-detail .detailArticle");
            articleDOM.querySelector("h1.detailTitle").innerHTML = name;
            articleDOM.querySelector("img.detailImage").src = `${background_image}`;

            articleDOM.querySelector("p.detailDescription").innerHTML = `
            <span class="spanDetailsDescription">${description}</span></br>${released}`;

            // articleDOM.querySelector("p.detail-release-date span").innerHTML = released;

            developers.forEach(dev => {
                //console.log(dev.name)
                articleDOM.querySelector("ul.dev-list").innerHTML += `<li class="dev-li" id="${dev.id}">
                <a href="#search-by-dev/${dev.id}" class="dev-link">${dev.name}</a></li>`; /*#pagedetail/${article.id}*/
            });


            tags.forEach(tag => {
                articleDOM.querySelector("p.tags-list").innerHTML += `
                    <a href="#search-by-tags/${tag.id}" class="tags-link" id="${tag.id}">${tag.name}</a> - `;

            });

            genres.forEach(genre => {
                articleDOM.querySelector("ul.genres-list").innerHTML += `
                <li class="genres-li" id="${genre.id}">
                <a href="#search-by-genre/${genre.id}" class="genres-link">${genre.name}</a></li>`;
            });

            publishers.forEach(publisher => {
                articleDOM.querySelector("ul.publishers-list").innerHTML += `
                <li class="publishers-li" id="${publisher.id}">
                <a href="#search-by-publishers/${publisher.id}" class="publishers-link">${publisher.name}</a></li>`;
            });

            platforms.forEach(plat => {
                articleDOM.querySelector("ul.platforms-list").innerHTML += `
                <li class="platforms-li" id="${plat.platform.id}">
                <a href="#search-by-platforms/${plat.platform.id}" class="platforms-link">${plat.platform.name}</a></li>`;
            });

            articleDOM.querySelector("p.website-link").innerHTML = `
            <a href="${website}" class="game-website-link">${website}</a>`;

            articleDOM.querySelector("p.rate").innerHTML = `
            <span class="rating">${rating}</span> / <span class="rating_top">${rating_top}</span>`;

            ratings.forEach(rates => {
                articleDOM.querySelector("ul.ratings-details").innerHTML += `
                <li class="ratings-li" id="${rates.id}">
                <p class="each-rating">${rates.title} =><span class="rating_top">  ${rates.percent}%</span> </p>
                </li>`;
            });




            /*
            stores.forEach(img => {
                articleDOM.querySelector("ul.images-list").innerHTML += `
                                        <li class="images-li" id="${img.store.id}">
                                        <img src="${img.store.image_background}" alt="" class="more-images">
                                        </li>`;
            }); 
            */


            stores.forEach(mag => {
                articleDOM.querySelector("ul.buy-list").innerHTML += `
                                        <li class="store-li" id="${mag.store.id}">
                                        <a href="https://www.${mag.store.domain}" class="store-website"> ${mag.store.name} </a> </p>
                                        </li>`;
            });

        };

        const fetchGame = (url, argument) => {
            fetch(`${url}/${argument}?key=${rawgAPIKey}`)
                .then((response) => response.json())
                .then((responseData) => {
                    console.log(responseData)
                    displayGame(responseData);
                });
        };

        const otherImages = (url, argument) => {
                fetch(`${url}/${argument}/screenshots?key=${rawgAPIKey}`)
                    .then((responseImages) => responseImages.json())
                    .then((responseImagesData) => {
                        const { results } = responseImagesData;
                        //console.log(results)
                        //console.log(responseImagesData)
                        const articleDOM = document.querySelector(".page-detail .detailArticle");
                        results.forEach(result => {
                            articleDOM.querySelector("ul.images-list").innerHTML += `
                            <li class="ratings-li" id="${result.id}">
                            <img src="${result.image}" alt="" class="more-images">
                            </li>`;
                        });
                    });
            }
            //optenir les data pour le jeux ayant l'ID 3498 (GTA V)
            //https://api.rawg.io/api/games/3498?key=238a72dd712c4aacafaf2996829bf174
            //https://rawg.io/api/games/portal-2/screenshots?key=238a72dd712c4aacafaf2996829bf174

        fetchGame('https://api.rawg.io/api/games', cleanedArgument);
        otherImages('https://api.rawg.io/api/games', cleanedArgument);
    };

    const render = () => {
        pageContent.innerHTML = `
                                <section class="page-detail">
                                  <div class="detailArticle">
                                    <h1 class="detailTitle"></h1>
                                    <img src="" alt="" class="detailImage">
                                    <p class="moreDetails"> - Details - </p>
                                    <ul class="images-list">
                                    </ul>
                                    <p class="Description-title"> - Description - </p>
                                    <p class="detailDescription"></p>

                                    <p class="Description-title"> - Studios - </p>
                                    <ul class="dev-list"></ul>
                                    <p class="Description-title"> - Tags - </p>
                                    <p class="tags-list"></p>
                                    <p class="Description-title"> - Genres - </p>
                                    <ul class="genres-list"></ul>
                                    <p class="Description-title"> - Publishers - </p>
                                    <ul class="publishers-list"></ul>
                                    <p class="Description-title"> - Platforms - </p>
                                    <ul class="platforms-list"></ul>
                                    <p class="Description-title"> - website - </p>
                                    <p class="website-link"></p>
                                    <p class="Description-title"> - Video - </p>
                                    <p class="video"></p>
                                    <p class="Description-title"> - GLOBAL RATE - </p>
                                    <p class="rate"></p>
                                    <p class="Description-title"> - RATINGS details - </p>
                                    <ul class="ratings-details"></ul>
                                    <p class="Description-title"> - BUY it now - </p>
                                    <ul class="buy-list"></ul>
                                  </div>
                                </section>
                              `;

        preparePage();
    };

    render();
};
export { PageDetail };