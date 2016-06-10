import MoneyTrackersListModule from './moneyTrackersList'
import MoneyTrackersListController from './moneyTrackersList.controller';
import MoneyTrackersListComponent from './moneyTrackersList.component';
import MoneyTrackersListTemplate from './moneyTrackersList.html';

describe('MoneyTrackersList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MoneyTrackersListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoneyTrackersListController();
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
      expect(MoneyTrackersListTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MoneyTrackersListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MoneyTrackersListTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MoneyTrackersListController);
      });
  });
});
