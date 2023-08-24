import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class MascotsController extends Controller {
  @service drawer;
  @service mascots;

  get getMascots() {
    return this.mascots.mascotsData;
  }

  @action
  onChangeFilters(event) {
    const { id } = event.target;
    this.mascots.filter(id);
  }
}
