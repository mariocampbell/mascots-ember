import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class NavbarIndexComponent extends Component {
  @tracked showMobileNav = false;

  @action
  closeMobileNav() {
    this.showMobileNav = false;
  }

  @action
  openMobileNav() {
    this.showMobileNav = true;
  }
}
