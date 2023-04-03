const vue_app = Vue.createApp({
    created () {
          fetch('schedules.json').then(response => response.json()).then(json => {
                this.schedules = json
          })
    },
    data() {
      return {
        schedules: [],

          test: "Jacob's Schedule"

        }
    },
    methods: {

    }
})

vue_app.mount("#vue_app")