import { mount } from '@vue/test-utils';
import HelloWorld from 'src/components/HelloWorld.vue';
import { describe, it, expect } from 'vitest';

describe('HelloWorld', () => {
  const wrapper = mount(HelloWorld);
  it('should render correctly', () => {
    expect(wrapper.html()).toContain('count is 0');
  });

  it('should increment by 1', async () => {
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toContain('count is 1');
  });
});
