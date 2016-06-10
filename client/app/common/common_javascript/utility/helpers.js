var path = require('path');

class Helpers {
    static root = 'client';
    static resolveToDirectives(glob = ''){
        return path.join(__dirname, Helpers.root, 'app/common/directives', glob); // app/common/directives/{glob}
    }

    static requireDependencies(modules)
    {
        var i, dependencies = [];

        for(i in modules)
        {
            var module_name = modules[i];
            var module = require('./' + module_name +'/' + module_name);
            if(module.default && module.default.name)
            {
                dependencies.push(module.default.name)
            }
        }

        return dependencies;
    }
}

window.Helpers = Helpers;