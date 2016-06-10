import SidebarMenuModule from './sidebar_menu'
import SidebarMenuController from './sidebar_menu.controller';
import SidebarMenuComponent from './sidebar_menu.component';
import SidebarMenuTemplate from './sidebar_menu.html';

describe('SidebarMenu', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SidebarMenuModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SidebarMenuController();
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
      expect(SidebarMenuTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SidebarMenuComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SidebarMenuTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SidebarMenuController);
      });
  });
});
