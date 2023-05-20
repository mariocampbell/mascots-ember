import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-mascots/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('title', 'Classic Tomster');
    this.set('stars', 2);
    this.set('image', 'tomster.webp');

    await render(hbs`
      <Card
        @image={{this.image}}
        @title={{this.title}}
        @stars={{this.stars}}
      />
    `);

    assert
      .dom('[data-test-avatar]')
      .hasAttribute('alt', 'Classic Tomster', 'avatar img works');
    assert.dom('[data-test-title]').hasText('Classic Tomster', 'title works');
    assert.dom('[data-test-edit]').exists('icon edit');
  });
});
