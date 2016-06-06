import angular from 'angular';

var components = ['transactionsList', 'moneyBoxesList', 'moneyTrackersList', 'moneyBoxGroupsList','moneyTrackerGroupsList', 'newMoneyBoxe', 'newGroup', 'newTransaction', 'newMoneyTracker', 'home', 'about'];

var i, dependencies = [];

for(i in components)
{
    var component_name = components[i];
    var component = require('./' + component_name +'/' + component_name);
    if(component.default && component.default.name)
    {
        dependencies.push(component.default.name)
    }
}
let componentModule = angular.module('app.components', dependencies);

export default componentModule;

