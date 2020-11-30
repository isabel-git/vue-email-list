// Genera 10 mail tramite api e stampale in una lista

var app = new Vue({
  el: "#app",
  data: {
    email: []
  },
  mounted: function () {
    for (let index = 0; index < 10; index++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {

        this.email.push(risposta.data.response)

      });

    }
  }
});