import Component from '@ember/component';

export default Component.extend({
  challenges: null,

  actions: {
    doSomething() {
      console.log("Doing something with my life");
      console.log(this.challenges);
    }
  }

});
