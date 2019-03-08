import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },
  age() {
    return faker.random.number();
  },
  jobTitle() {
    return faker.name.jobTitle();
  },
  avatar() {
    return faker.internet.avatar();
  }
});
