import { createApp } from 'vue'
import { createServer, Response } from "miragejs"
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles.scss"

import { makeServer } from "./mock/mockapi"

if (process.env.NODE_ENV === "development") {
  makeServer()
}

if (window.Cypress) {
  let otherDomains = []
  let methods = ["get", "put", "patch", "post", "delete"]

  createServer({
    environment: "test",
    routes() {
      for (const domain of ["/", ...otherDomains]) {
        for (const method of methods) {
          this[method](`${domain}*`, async (schema, request) => {
            let [status, headers, body] = await window.handleFromCypress(
              request
            )
            return new Response(status, headers, body)
          })
        }
      }
    },
  })
}



createApp(App).use(store).use(router).mount('#app')
