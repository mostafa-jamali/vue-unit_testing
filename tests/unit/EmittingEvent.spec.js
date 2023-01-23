import {mount} from '@vue/test-utils'
import ParentComponent from '@/App'
import ChildComponent from '@/components/Child2'

describe('ParentComponent', () => {
    it("displays 'Emitted!' when custom event is emitted", async () => {
        const wrapper = await mount(ParentComponent)
        // wrapper.findComponent(ChildComponent).vm.$emit('custom')

        const childWrapper = await mount(ChildComponent)
        const clickedEmitButton = childWrapper.find('button')
        await clickedEmitButton.trigger('click')
        setTimeout(() => {
            expect(wrapper.html()).toContain('Emitted!')
        })
    })
})
