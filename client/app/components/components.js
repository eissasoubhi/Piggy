import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import TransactionsList from './transactionsList/transactionsList';
import newTransaction from './newTransaction/newTransaction';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  TransactionsList.name,
  newTransaction.name,
]);

export default componentModule;
