import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DrawerComponent extends Component {
  @service drawer;

  @tracked editAvatar = false;
  @tracked showModalDelete = false;
  @tracked imgName = this.args.title || 'avatar.svg';
  @tracked imgSrc = this.args.image || '/images/mascots/avatar.svg';
  @tracked imgFile;

  // avatar hover
  @action
  mouseEnter() {
    this.editAvatar = true;
  }

  @action
  mouseLeave() {
    this.editAvatar = false;
  }

  // add mascot
  @action
  addMascot() {
    console.log('mascota agregada correctamente');
    this.drawer.toggle();
  }

  // delete mascot
  @action
  deleteMascot(id) {
    console.log('mascota eliminada', id);
    this.showModalDelete = false;
    this.drawer.toggle();
  }

  // open modal delete
  @action
  openModalDelete() {
    this.showModalDelete = true;
  }

  // close modal delete
  @action
  closeModalDelete() {
    this.showModalDelete = false;
  }

  // get image src
  get imageSource() {
    return this.imgSrc;
  }

  // selected image attributes
  @action
  selectedImage(event) {
    this.imgName = event.target.files[0].name;

    const reader = new FileReader();
    reader.onload = () => {
      this.imgSrc = reader.result;
      this.imgFile = reader.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
