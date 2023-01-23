import {shallowMount} from '@vue/test-utils';  // Vue Test Utils allows you to mount a component without rendering its child components
import HelloWorld from '@/components/Child1.vue'

describe('Child1.vue', () => {
    it('renders props.msg when passed', async () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: {msg}
        })
        expect(wrapper.text()).toMatch(msg)
    })
});


const Counter = {
    template: `
        <div>
        <button @click="count++">Add up</button>
        <p>Total clicks: {{ count }}</p>
        </div>
    `,
    data() {
        return {count: 0}
    }
}

test('increments counter value on click', async () => {
    const wrapper = shallowMount(Counter)
    const button = wrapper.find('button')
    const text = wrapper.find('p')

    expect(text.text()).toContain('Total clicks: 0')

    await button.trigger('click')

    expect(text.text()).toContain('Total clicks: 1')

    setTimeout(() => {
        wrapper.destroy(); // When using either the 'mount' or 'shallowMount' methods, it is important to note that beforeDestroy and destroyed will not be triggered unless the component is manually destroyed using Wrapper.destroy()
    }, 1000)
})