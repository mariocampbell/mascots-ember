import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class MascotsController extends Controller {
  @service drawer;
  @service mascots;

  @tracked filterValue = 'all';

  setAllMascots() {
    this.mascots.addAllMascots(this.model);
    return this.mascots.mascots;
  }

  get allMascots() {
    return this.mascots.mascots;
  }

  @action
  onSubmit(event) {
    event.preventDefault();
    this.filterValue = event.target.id;
  }
}
