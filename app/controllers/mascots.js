import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class MascotsController extends Controller {
  @service drawer;
  @service mascots;

  get getMascots() {
    return this.mascots.mascots;
  }

  @action
  onChangeFilters(event) {
    this.mascots.filter(event.target.id);
  }
}
