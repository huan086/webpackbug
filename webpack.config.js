"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        script1: "./script1.js",
        script2: "./script2.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./output")
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
        }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "./common.js",
            minChunks: 2
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: { modules: true }
                }]
            })
        },
        {
            test: require.resolve("./script1.js"),
            use: [{
                loader: "expose-loader",
                options: "blue"
            }]
        },
        {
            test: require.resolve("./script2.js"),
            use: [{
                loader: "expose-loader",
                options: "green"
            }]
        }]
    }
};
