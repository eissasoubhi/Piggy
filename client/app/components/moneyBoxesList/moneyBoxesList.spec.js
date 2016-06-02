import MoneyBoxesListModule from './moneyBoxesList'
import MoneyBoxesListController from './moneyBoxesList.controller';
import MoneyBoxesListComponent from './moneyBoxesList.component';
import MoneyBoxesListTemplate from './moneyBoxesList.html';

describe('MoneyBoxesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoneyBoxesListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoneyBoxesListController();
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
      expect(MoneyBoxesListTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MoneyBoxesListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MoneyBoxesListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MoneyBoxesListController);
      });
  });
});
