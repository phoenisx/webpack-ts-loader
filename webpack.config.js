module.exports = {
   mode: "none",
   entry: {
      base: "./src-ts/main.ts",
      baseJs: "./src-js/main.js",
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
              compact: false,
            },
            exclude: [/node_modules/],
          },
         {
            // regex to include ts and tsx files but exclude d.ts files
            test: /.*(?<!\.d)\.tsx?$/,
            loader: 'ts-loader',
            exclude: [/node_modules/]
         }
      ]
   }
}
