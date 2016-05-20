window.logcount = 0;
window.errorcount = 0;
window.log = function ()
{
    logcount++;
    switch(arguments.length)
    {
        case 0:
            console.trace(logcount);
            break;
        case 1:
            console.trace(arguments[0]);
            break;
        default:
            console.group("log"+logcount+" : '%s'", arguments[0]);
            for (var i = 1; i < arguments.length; i++)
            {
                console.trace(arguments[i]);
            }
            console.groupEnd();
    }
}

window.error = function ()
{
    errorcount++;
    switch(arguments.length)
    {
        case 0:
            console.error(errorcount);
            break;
        case 1:
            console.error(arguments[0]);
            break;
        default:
            console.group("error"+errorcount+" : '%s'", arguments[0]);
            for (var i = 1; i < arguments.length; i++)
            {
                console.error(arguments[i]);
            }
            console.groupEnd();
    }
}