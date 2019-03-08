import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return {
      people: this.store.findAll('user')
    }
  }
});
