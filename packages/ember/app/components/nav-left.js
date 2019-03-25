import Component from '@ember/component';

export default Component.extend({

  actions: {
    navigateToItem(targetItemId) {
      this.items.forEach((item) => {
        if (item.id === targetItemId) {
          item.set('isActive', true);
        } else {
          item.set('isActive', false);
        }
      })
    }
  }

});
