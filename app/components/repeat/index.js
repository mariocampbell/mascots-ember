import Component from '@glimmer/component';

export default class RepeatComponent extends Component {
  times = this.args.times || 5;

  get array() {
    return Array.from({ length: this.times });
  }
}
