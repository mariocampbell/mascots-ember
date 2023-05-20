import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CardComponent extends Component {
  @service drawer;

  @tracked showEditButton = false;

  @action
  handleClickEdit(title) {
    console.log('edit', title);
    this.drawer.toggle();
  }

  @action
  mouseEnter() {
    this.showEditButton = true;
  }

  @action
  mouseLeave() {
    this.showEditButton = false;
  }
}
