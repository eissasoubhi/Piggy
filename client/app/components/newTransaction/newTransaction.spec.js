import NewTransactionModule from './newTransaction'
import NewTransactionController from './newTransaction.controller';
import NewTransactionComponent from './newTransaction.component';
import NewTransactionTemplate from './newTransaction.html';

describe('NewTransaction', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewTransactionModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewTransactionController();
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
      expect(NewTransactionTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewTransactionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewTransactionTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewTransactionController);
      });
  });
});
