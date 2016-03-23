jQuery(document).ready(function($)
{
    var html_file, comment, filename, $partial;

    $('include').each(function(index, el)
    {
        var include = this;

        html_file = $(include).attr('src'); // the partial file location

        if (typeof html_file !== "undefined" && html_file !== "")
        {
            $.get( html_file, function(partial)
            {
                $partial = $.parseHTML(partial);
                $(include).replaceWith($partial); //insert the partial file content

                if ($(include).attr('comment') === "true")
                {   // insert comment
                    html_file = $(include).attr('src');
                    filename = getFileName(html_file);
                    comment = commentElement(filename)
                    $(comment).insertBefore($partial[0])
                };
            })
            .fail(function()
            {
                console.error("couldn't load " + html_file + " file")
            })
        }
        else
        {
            console.error("The html source file must be setted in the src attribute")
        }
    });

    function getFileName (path) {
        return path.replace(/.*(\/|\\)/, '');
    }

    // creates an html comment element
    function commentElement (text, length)
    {
        if (typeof length === 'undefined')
        {   // default value (starts number)
            length = 40;
        };

        var comment = "<!-- ";
        for (var i = 0; i < length; i++)
        {
            if (i == length / 2)
            {
                comment += " " + text + " ";
                continue;
            };
            comment += "*";
        };

        return comment += " -->";
    }
});