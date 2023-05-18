import { module, test } from 'qunit';
import { setupTest } from 'ember-mascots/tests/helpers';

module('Unit | Controller | mascots', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:mascots');
    assert.ok(controller);
  });
});
