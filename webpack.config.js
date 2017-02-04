/**
 * Created by huibei on 17/2/4.
 */
module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    }
}


// module.exports = {
//     entry: "./entry.js",
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js[x]?$/,
//                 exclude: /node_modules/,
//                 loader: 'babel-loader?presets[]=es2015&presets[]=react',
//             }, {
//                 test: /\.css$/,
//                 loader: 'style-loader!css-loader'
//             },{ test: /\.(png|jpg)$/,
//                 loader: 'url-loader?limit=8192'
//             }
//         ]
//     }
// };
