import { mount } from '@vue/test-utils';
import ItemCounter from 'src/components/ItemCounter.vue';
import { describe, it, expect } from 'vitest';

describe('ItemCounter', () => {
  const wrapper = mount(ItemCounter);
  it('should render correctly', () => {
    expect(wrapper.html()).toContain('0');
  });

  it('should increment by 1', async () => {
    await wrapper.find('#button1').trigger('click');
    expect(wrapper.html()).toContain('1');
  });

  it('should decrese by 1', async () => {
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#button1').trigger('click');
    await wrapper.find('#button2').trigger('click');
    expect(wrapper.html()).toContain('1');
  });
});
