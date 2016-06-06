import MoneyBoxGroupsListModule from './moneyBoxGroupsList'
import MoneyBoxGroupsListController from './moneyBoxGroupsList.controller';
import MoneyBoxGroupsListComponent from './moneyBoxGroupsList.component';
import MoneyBoxGroupsListTemplate from './moneyBoxGroupsList.html';

describe('MoneyBoxGroupsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoneyBoxGroupsListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoneyBoxGroupsListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MoneyBoxGroupsListTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MoneyBoxGroupsListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MoneyBoxGroupsListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MoneyBoxGroupsListController);
      });
  });
});
