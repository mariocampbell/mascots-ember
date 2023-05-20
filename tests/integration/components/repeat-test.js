import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-mascots/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Repeat', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Repeat />`);

    assert.dom(this.element).hasText('');
  });
});
