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
      toggleA: function() {
        this.schedules[0].isActive = true;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = false;
      },
      toggleB: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = true;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = false;
      },
      toggleC: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = true;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = false;
      },
      toggleD: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = true;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = false;
      },
      toggleE: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = true;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = false;
      },
      toggleF: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = true;
        this.schedules[6].isActive = false;
      },
      toggleG: function() {
        this.schedules[0].isActive = false;
        this.schedules[1].isActive = false;
        this.schedules[2].isActive = false;
        this.schedules[3].isActive = false;
        this.schedules[4].isActive = false;
        this.schedules[5].isActive = false;
        this.schedules[6].isActive = true;
      }

    },
    computed: {
      filteredS() {
        return this.schedules.filter((schedule) => schedule.isActive)
      }
    }
})

vue_app.mount("#vue_app")