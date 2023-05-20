import Component from '@glimmer/component';

export default class RepeatComponent extends Component {
  repeat = this.args.repeat || 5;

  get count() {
    return Array.from({ length: this.repeat });
  }
}
