class NewGroupController {
  constructor() {
    this.countries_array = $.map(document.countries, function(value, key) {
                    return {
                        value: value,
                        data: key
                    };
                });
  }
}

export default NewGroupController;
