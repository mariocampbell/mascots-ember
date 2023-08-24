import Service from '@ember/service';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MascotsService extends Service {
  mascots = A([]);
  mascotsFetch = A([]);
  mascotsData = A([]);

  @tracked selected = {};

  fetchMascots() {
    fetch('http://localhost:4200/api/mascots')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((jsonResponse) => {
        this.mascotsData.setObjects(jsonResponse.data);
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ',
          error.message
        );
      });
  }

  fetchMascot(id) {
    fetch(`http://localhost:4200/api/mascots/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((jsonResponse) => {
        this.selected = jsonResponse;
      });
  }

  fetchAddMascot(newMascot) {
    fetch('http://localhost:4200/api/mascots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMascot),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((jsonResponse) => {
        this.mascotsData.setObjects(jsonResponse);
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ',
          error.message
        );
      });
  }

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
    fetch('http://localhost:4200/api/mascots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMascot),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((jsonResponse) => {
        console.log('jsonResponse', jsonResponse);
      })
      .catch((error) => {
        console.log(
          'There has been a problem with your fetch operation: ',
          error.message
        );
      });

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
