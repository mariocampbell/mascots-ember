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

  @tracked error = {
    title: false,
    tags: false,
    stars: false,
  };

  @tracked disabled = true;

  pathImages = '/images/mascots/';
  defaultAvatar = 'avatar.svg';

  get selected() {
    return { ...this.mascots.selected };
  }

  get isDisabled() {
    return this.disabled;
  }

  // selected is empty?
  get selectedMascotIsEmpty() {
    return isEmpty(Object.keys(this.selected));
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
    this.disabled = true;
    this.error = {
      title: false,
      tags: false,
      stars: false,
    };
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
    this.mascots.fetchAddMascot({
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
        id: this.selected.id,
        title: this.title || this.selected.title,
        image: this.imageName,
        tags: this.tags || this.selected.tags,
        stars: this.stars || this.selected.stars,
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
      this.pathImages + (this.selected.image || this.defaultAvatar)
    );
  }

  // get image name
  get imageName() {
    return this.imgName || this.selected.image || this.defaultAvatar;
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
  validateField(event) {
    const { value, id } = event.target;

    if (value) {
      this[`${id}`] = value;
      this.error = {
        ...this.error,
        [`${id}`]: false,
      };
      if (id === 'stars') if (value < 1 || value > 5) this.error.stars = true;
    } else {
      this.error = {
        ...this.error,
        [`${id}`]: true,
      };
    }

    if (this.title && this.tags && this.stars) {
      this.disabled = !Object.values(this.error).every(
        (value) => value === false
      );
    }
  }
}
