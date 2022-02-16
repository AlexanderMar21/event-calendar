import { Server, Response } from 'miragejs'
import events from './data.json'

export function makeServer({ environment = 'development' } = {}) {
   let data = [...events];

   let server = new Server({
    environment,

    routes() {

      this.namespace = 'api/v1/';


      this.get('/events', schema => {
        return new Response(200, {}, data)
      })

      this.get("/events/:id", (schema, request) => {
         let id = request.params.id

         let event = data.find((event) => event.id == id);

         if(!event) { return  new Response(404, {}, null) }

         return new Response(200, {}, event?? null)
      })


      this.post('/events', (schema, request) => {
        const headers = {}
        const event = JSON.parse(request.requestBody)
        let id = Math.random().toString(36).slice(2);
        // picture uoload is not working with this mock api
        const newEvent = {id,...event};
        data.push(newEvent);
        return new Response(
          200,
          headers,
          {event: event},
        )
      },


      { timing: 50 })
    },
  })

  return server
}