import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MascotsRoute extends Route {
  @service mascots;

  data = [
    {
      id: '1',
      title: 'Classic Tomster',
      image: 'tomster.webp',
      tags: 'tomster',
      stars: '5',
    },
    {
      id: '2',
      title: 'Classic Zoey',
      image: 'zoey.webp',
      tags: 'zoey',
      stars: '4',
    },
    {
      id: '3',
      title: 'Ember Octane',
      image: 'ember-octane.webp',
      tags: 'friends',
      stars: '3',
    },
  ];

  async model() {
    // this.mascots.setMascots(this.data);
    this.mascots.fetchMascots();
  }
}
