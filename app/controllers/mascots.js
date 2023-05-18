import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MascotsController extends Controller {
  @tracked filterValue = 'all';

  @action
  onSubmit(event) {
    event.preventDefault();
    this.filterValue = event.target.id;
  }
}
