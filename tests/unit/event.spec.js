import { shallowMount } from "@vue/test-utils"
import EventItem from '@/components/EventItem.vue'

describe('EventItem', () => {

  it('renders alert info message when prop is not passed', () => {
    const wrapper = shallowMount(EventItem, {})
    expect(wrapper.text()).toMatch("An error has occurred.")
  })

  it('renders event title when prop is passed', () => {
    const event = {
        title: "Test title",
        date: "2021-07-30",
        time: "21:00",
        description: "Test description",
        picture: "https://picsum.photos/500/400",
        eventType: "Sport",
        telephone: "+123456789",
        email: "test@email",
        location: "testland"
    }
    const wrapper = shallowMount(EventItem, {
      props : { event: event },
    })
    expect(wrapper.find('[data-test="event-title"]').text()).toBe(event.title);
  })
})
