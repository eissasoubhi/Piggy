var directives = ['chart', 'collapseLink', 'jsDataTable', 'icheck', 'select2', 'select2option', 'autocomplete', 'tableCheck', 'breadcrumbs', 'tranSchedule', 'editSchedule', 'optionsModel']

var i, dependencies = [];

for(i in directives)
{
    var directive_name = directives[i];
    var directive = require('./' + directive_name +'/' + directive_name);
    dependencies.push(directive.default.name)
}

let directivesModule = angular.module('app.common.directives', dependencies);

export default directivesModule;
