class  GlobalOptionsService {

    constructor() {
        "ngInject";
        this.datatables_options = {
                    templateResult: function (option)
                    {
                        function hightlight(path) {
                            var paths = path.split('>');
                            paths[paths.length - 1] = '<strong>' + paths[paths.length - 1] + '</strong>';
                            return paths.join('>');
                        }

                        function icon(type) {
                            if(type == 'mb')
                            {
                                return '<i class="fa fa-archive"></i>';
                            }
                            else if(type == 'mt')
                            {
                                return '<i class="fa fa-map"></i>';
                            }
                            else if(type.indexOf('group') > -1)
                            {
                                return '<i class="fa fa-folder"></i>';
                            }

                            return '';
                        }

                        if($(option.element).data('type'))
                        {
                            var type = $(option.element).data('type');
                            return $('<div><span class="m_type">' + icon(type) + '</span>' + hightlight(option.text) + '</div>');
                        }

                        return $('<div>' + hightlight(option.text) + '</div>');
                    }
                };
        this.days_of_week = [{'text': 'Sunday', 'value': 'sunday'},
                            {'text': 'Monday', 'value': 'monday'},
                            {'text': 'Tuesday', 'value': 'tuesday'},
                            {'text': 'Wednesday', 'value': 'wednesday'},
                            {'text': 'Thursday', 'value': 'thursday'},
                            {'text': 'Friday', 'value': 'friday'},
                            {'text': 'Saturday', 'value': 'saturday'}];
    }
}
export default GlobalOptionsService