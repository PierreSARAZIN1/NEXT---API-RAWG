// Webpack utilise ce module Node.js pour travailler avec les dossiers.
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Ceci est la configuration principale de ton projet.
// Ici, tu peux écrire les différentes options que tu souhaites, et dire à Webpack quoi faire.
module.exports = (env) => {


    console.log("NODE_ENV:", env.NODE_ENV);

    return { //Ajout de watch pour ne pas avoir a taper $ npm run build à chaque fois 
        watch: true,
        //Ajoutez un délai avant de reconstruire une fois le premier fichier modifié. Cela permet à Webpack d'agréger toutes les autres modifications apportées au cours de cette période en une seule reconstruction. Passez une valeur en millisecondes :
        // watchOptions: {
        //     aggregateTimeout: 600,
        // },



        // Ceci est le chemin vers le "point d'entrée" de ton app.
        // C'est depuis ce fichier que Webpack commencera à travailler.
        entry: './src/index.js',

        // C'est ici qu'on dit à Webpack où mettre le fichier résultant avec tout ton JS.
        output: {
            // Le chemin relatif au dossier courant (la racine du projet)
            path: path.resolve(__dirname, 'dist'),
            // Le nom du fichier de ton bundle JS
            filename: 'bundle.js',
            // L'URL relatif au HTML pour accéder aux assets de l'application. Ici,
            // le HTML est situé à la racine du projet, donc on met une chaîne vide.
            publicPath: '',
        },

        /*Pour décrire à Webpack comment il doit transformer nos fichiers.*/
        module: {
            rules: [{
                    // --- BABEL ---
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                /*
                        //Bootstrap
                        https://getbootstrap.com/docs/4.0/getting-started/webpack/
                        https://stackoverflow.com/questions/66651539/how-to-import-bootstrap-5-bundle-js-with-npm
    
    
                        $ npm install bootstrap
                        $ npm install popper.js --save
                        $ npm intsall node-sass --save-d
    
                        index.js :
                        import 'bootstrap';
                        
                        index.scss:
                        @import '../../node_modules/bootstrap/scss/bootstrap.scss';
                    */

                {
                    // --- SASS ---
                    test: /\.(sa|sc|c)ss$/, // On applique notre règle aux fichiers .sass, .scss et .cs
                    use: [
                        // Attention, les loaders sont ajoutés en sens inverse !!
                        // Effectivement, c'est le dernier loader qui est exécuté en premier.
                        // Donc celui-ci arrive en fin de chaîne :
                        {
                            // On le met en tout premier, afin qu'il soit exécuté en dernier,
                            // une fois que tous les changements souhaités sont appliqués à notre CSS.
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader', // Ce loader permet d'utiliser url() et @import dans ton CSS
                        },
                        {
                            // Ensuite on utilise le loader de postCSS, qui ajoutera un minifier par exemple,
                            // ou bien un préfixeur automatique des règles CSS (--moz par exemple)
                            loader: 'postcss-loader',
                        },
                        {
                            // En premier, on transforme le SASS en CSS :
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                            },
                        },
                    ],
                },
                {
                    //Gérer les assets (images)
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                },
                {
                    //Gérer les assets (fonts)
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },
        // Ajout des plugins
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),
        ],
        // Par défaut, le mode de Webpack est "production". En fonction de ce qui est
        // écrit ici, tu pourras appliquer différentes méthodes dans ton bundle final.
        // Pour le moment, nous avons besoin du mode "développement", car nous n'avons,
        // par exemple, pas besoin de minifier notre code.
        mode: 'development',
        devServer: { static: path.resolve(__dirname, './'), open: true, port: 3000, hot: true }
    };

};