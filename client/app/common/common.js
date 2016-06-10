import angular from 'angular';

var commons = ['topnav', 'sidebar_menu', 'common_javascript', 'user', 'pageFooter', 'directives'];

var i, dependencies = [];

for(i in commons)
{
    var common_name = commons[i];
    var common = require('./' + common_name +'/' + common_name);
    if(common.default && common.default.name)
    {
        dependencies.push(common.default.name)
    }
}

let commonModule = angular.module('app.common',  dependencies);

export default commonModule;

