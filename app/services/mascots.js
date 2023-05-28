import Service from '@ember/service';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MascotsService extends Service {
  mascots = A([]);
  @tracked selected = {};

  addAllMascots(mascots) {
    this.mascots.setObjects(mascots);
  }

  find(id) {
    this.selected = this.mascots.findBy('id', id);
  }

  get length() {
    return this.mascots.length;
  }

  add(newMascot) {
    this.mascots.pushObject(newMascot);
  }

  edit(editedMascot) {
    const oldMascot = this.mascots.findBy('id', editedMascot[0].id);
    const index = this.mascots.indexOf(oldMascot);
    this.mascots.replace(index, 1, editedMascot);
  }

  remove(mascot) {
    this.mascots.removeObject(mascot);
  }

  @action
  clearMascot() {
    this.selected = {};
  }

  empty() {
    this.mascots.clear();
  }
}
