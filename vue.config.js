const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
let appName =  process.argv.slice(0).reverse()[0].replace('--', '');
let outputPath = appName === 'A'?'A':'B'
console.log(appName)
module.exports = {
    publicPath: IS_PROD?'../'+outputPath+'/':'./',
    outputDir: 'dist/'+outputPath,
    assetsDir: 'static',
    lintOnSave: true,
    runtimeCompiler:true,
    productionSourceMap: true,
    pages: {
        index: {
            entry: 'src/views/' + appName + '/main.js',
        }
    }
    
}