import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class DrawerComponent extends Component {
  @service drawer;
  @service mascots;

  @tracked editAvatar = false;
  @tracked showModalDelete = false;

  @tracked imgFile;
  @tracked imgSrc;
  @tracked imgName;

  @tracked title;
  @tracked tags;
  @tracked stars;

  @tracked isDisabled = true;

  pathImages = '/images/mascots/';
  defaultAvatar = 'avatar.svg';

  // selected is empty?
  get selectedMascotIsEmpty() {
    return isEmpty(Object.keys(this.mascots.selected));
  }

  // close drawer
  @action
  clearDrawer() {
    this.drawer.toggle();
    this.mascots.clearMascot();
    this.imgSrc = undefined;
    this.imgName = undefined;
    this.title = undefined;
    this.tags = undefined;
    this.stars = undefined;
    this.showModalDelete = false;
  }

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
    this.mascots.add({
      id: (this.mascots.length + 1).toString(),
      title: this.title || 'Ember mascots',
      image: this.imageName,
      tags: this.tags,
      stars: this.stars,
    });
    this.clearDrawer();
  }

  // edit mascot
  @action
  editMascot() {
    this.mascots.edit([
      {
        id: this.mascots.selected.id,
        title: this.title || this.mascots.selected.title,
        image: this.imageName,
        tags: this.tags || this.mascots.selected.tags,
        stars: this.stars || this.mascots.selected.stars,
      },
    ]);
    this.clearDrawer();
  }

  // delete mascot
  @action
  deleteMascot(mascot) {
    this.mascots.remove(mascot);
    this.showModalDelete = false;
    this.clearDrawer();
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
    return (
      this.imgSrc ||
      this.pathImages + (this.mascots.selected.image || this.defaultAvatar)
    );
  }

  // get image name
  get imageName() {
    return this.imgName || this.mascots.selected.image || this.defaultAvatar;
  }

  // attributes selected image
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

  @action
  changeInputs(event) {
    if (event.target.id === 'title') {
      this.title = event.target.value;
    }
    if (event.target.id === 'tags') {
      this.tags = event.target.value;
    }
    if (event.target.id === 'stars') {
      this.stars = event.target.value;
    }
    if (this.title && this.tags && this.stars) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
}
