import { module, test } from 'qunit';
import { setupTest } from 'ember-mascots/tests/helpers';

module('Unit | Route | mascots', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:mascots');
    assert.ok(route);
  });
});
