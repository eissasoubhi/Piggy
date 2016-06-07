import angular from 'angular';
import autocompleteComponent from './autocomplete.component';

let autocompleteModule = angular.module('autocomplete', [])

.directive('autocomplete', autocompleteComponent);

export default autocompleteModule;
