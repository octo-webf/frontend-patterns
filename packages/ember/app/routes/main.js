import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const fepHome = EmberObject.create({
  id: "fep-home",
  menuItemLabel: "Home",
  route: "main.home",
  challengeTitle: "Welcome to Done With Ember!",
  isActive: true,
})

const fepList = EmberObject.create({
  id: "fep-list",
  menuItemLabel: "Simple list",
  route: "main.simple-list",
  challengeTitle: "Simple list",
  isActive: false,
})

export default Route.extend({
  model() {
    return [
      fepHome,
      fepList
    ]
  },
  afterModel() {
    this.transitionTo('main.home');
  }

});
