import { module, test } from 'qunit';
import { setupTest } from 'ember-mascots/tests/helpers';

module('Unit | Service | mascots', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:mascots');
    assert.ok(service);
  });
});
