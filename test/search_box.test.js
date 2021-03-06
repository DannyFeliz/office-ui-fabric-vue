import { mount } from 'vue-test-utils';

import fabric from '../lib/office-ui-fabric';
import SearchBox from '../src/components/search_box/SearchBox.vue';

describe('SearchBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SearchBox, {
      propsData: {
        placeholder: 'placeholder'
      },

      mocks: {
        $fabric: fabric
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should render correct', () => {
    expect(wrapper.contains('.ms-SearchBox')).toBeTruthy();
    expect(wrapper.contains('.ms-SearchBox-field')).toBeTruthy();
    expect(wrapper.find('.ms-SearchBox-text').text()).toBe('placeholder');
  });

  test('should return value when input text', () => {
    const inputEvent = jest.fn();

    wrapper.vm.$on('input', inputEvent);
    wrapper.find('.ms-SearchBox-field').element.value = 'input';
    wrapper.find('.ms-SearchBox-field').trigger('input');

    expect(inputEvent).toBeCalledWith('input');
  });

  test('should can set input text by value', () => {
    wrapper.setProps({ value: 'input' });

    expect(wrapper.find('.ms-SearchBox-field').element.value).toBe('input');
  });
});
