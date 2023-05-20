import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DrawerComponent extends Component {
  @service drawer;
  @tracked editAvatar = false;

  @action
  closeDrawer() {
    console.log('closeDrawer');
    this.drawer.close();
  }

  @action
  mouseEnter() {
    this.editAvatar = true;
  }

  @action
  mouseLeave() {
    this.editAvatar = false;
  }
}
