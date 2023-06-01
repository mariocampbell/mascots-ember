import Service from '@ember/service';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MascotsService extends Service {
  mascots = A([]);
  mascotsFetch = A([]);
  @tracked selected = {};

  setMascots(mascots) {
    this.mascots.setObjects(mascots);
    this.mascotsFetch.addObjects(mascots);
  }

  find(id) {
    this.selected = this.mascots.findBy('id', id);
  }

  filter(param) {
    const filterd = this.mascotsFetch.filter((mascot) => {
      return mascot.tags.includes(param);
    });

    if (param === 'all') {
      this.setMascots(this.mascotsFetch);
    } else {
      this.setMascots(filterd);
    }
  }

  get length() {
    return this.mascots.length;
  }

  add(newMascot) {
    this.mascots.addObject(newMascot);
    this.mascotsFetch.addObject(newMascot);
  }

  edit(editedMascot) {
    const oldMascot = this.mascots.findBy('id', editedMascot[0].id);
    const index = this.mascots.indexOf(oldMascot);
    this.mascots.replace(index, 1, editedMascot);

    const oldMascotFetch = this.mascotsFetch.findBy('id', editedMascot[0].id);
    const indexFetch = this.mascotsFetch.indexOf(oldMascotFetch);
    this.mascotsFetch.replace(indexFetch, 1, editedMascot);
  }

  remove(mascot) {
    this.mascots.removeObject(mascot);
    this.mascotsFetch.removeObject(mascot);
  }

  @action
  clearMascot() {
    this.selected = {};
  }

  empty() {
    this.mascots.clear();
  }
}
