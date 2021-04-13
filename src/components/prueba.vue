<template>
  <div>
      {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Estudiaaa",
      user: {
        first: "Leo",
        last: "Rufino"
      },
      myHtml: "<h3>estudia rufo</h3>",
      ShowName: false,
      tasks: [
        {title: "eat"},
        { title: "dinner" },
        { title: "study" },
        { title: "dinner" }
      ]
    }
  },
  methods: {
      saludar(first){
            alert('hello ' + first)
      },
      enterTheVoid (e){
          console.log('funciona el enter');
      }
    },
    computed: {
        FullName() {
            return this.user.first + ' ' + this.user.last;
        }
    },
    props: {
        msg: {
            type:String,
            default: 'nada para mostrar'
        }
    }
}
</script>

<style media="screen"></style>
