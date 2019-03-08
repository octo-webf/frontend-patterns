import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        menuItemLabel: "Home",
        route: "main.home",
        challengeTitle: "Welcome to Done With Ember!",
      },
      {
        menuItemLabel: "Simple list",
        route: "main.simple-list",
        challengeTitle: "Simple list",
      }
    ]
  },
  afterModel() {
    this.transitionTo('main.home');
  }

});
