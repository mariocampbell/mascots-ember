import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-mascots/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Card />`);

    assert
      .dom('[data-test-avatar]')
      .hasAttribute('alt', 'tomster avatar', 'avatar img works');
    assert.dom('[data-test-title]').hasText('Tomster Classic', 'title works');
    assert.dom('[data-test-edit]').exists('icon edit');
  });
});
