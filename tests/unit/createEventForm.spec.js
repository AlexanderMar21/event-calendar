import { mount } from "@vue/test-utils"
import CreateEventForm from '@/components/CreateEventForm.vue'

describe('CreateEventForm' , () => {
   let wrapper;
   beforeEach(() =>{
      wrapper = mount(CreateEventForm);
   })

   it('should shows 8 error messages when form submited', async () => {
      await wrapper.get('[data-test="form"]').trigger('submit');
      // the event type (select) has a default value and it wont show error message
      expect(wrapper.findAll(".form-error")).toHaveLength(8);
   })

   it('should shows 6 error messages when form submited with only the title & description filled', async () => {
      await wrapper.get('[data-test="event-title"]').setValue("The Test Title");
      await wrapper.get('[data-test="event-description"]').setValue("The Test Desctiption should be more than 15 chars");
      await wrapper.get('[data-test="form"]').trigger('submit');
      expect(wrapper.findAll(".form-error")).toHaveLength(6);
   })

})