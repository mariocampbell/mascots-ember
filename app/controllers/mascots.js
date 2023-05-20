import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class MascotsController extends Controller {
  @service drawer;

  @tracked filterValue = 'all';

  @action
  onSubmit(event) {
    event.preventDefault();
    this.filterValue = event.target.id;
  }
}
