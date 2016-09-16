import angular from 'angular';

var commons_js = ['global', 'inc', 'utility'];

var i, dependencies = [];

for(i in commons_js)
{
    var common_js_name = commons_js[i];
    var common_js = require('./' + common_js_name +'/' + common_js_name);
    if(common_js.default && common_js.default.name)
    {
        dependencies.push(common_js.default.name)
    }
}

let commonJavascriptModule = angular.module('app.common_javascript',  dependencies);

export default commonJavascriptModule;