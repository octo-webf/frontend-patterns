import Component from '@ember/component';

export default Component.extend({
  actions: {
    onClick(id) {
      this.handleClick(id);
    }
  }
});
