import CollapseLinkModule from './collapseLink'
import CollapseLinkController from './collapseLink.controller';
import CollapseLinkComponent from './collapseLink.component';
import CollapseLinkTemplate from './collapseLink.html';

describe('CollapseLink', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CollapseLinkModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CollapseLinkController();
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
      expect(CollapseLinkTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CollapseLinkComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CollapseLinkTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CollapseLinkController);
      });
  });
});
