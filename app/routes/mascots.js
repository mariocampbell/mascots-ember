import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class MascotsRoute extends Route {
  @service mascots;

  async model() {
    const res = await fetch('http://localhost:4200/api/mascots');
    const { data } = await res.json();

    this.mascots.addAllMascots(data);
    return data;
  }
}
