import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fun', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fun');
    assert.ok(route);
  });
});
