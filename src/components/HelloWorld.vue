<template>
  <div class="hello">
    <p>dialog sample.</p>
    <button @click.prevent="showDialog">show</button>
  </div>
</template>

<script>
import DialogHelper from '@/DialogHelper';

export default {
  name: 'HelloWorld',
  methods: {
    showDialog () {
      DialogHelper.showDialog(this, {
        subject: 'Subject',
        message: 'open temporary dialog sample',
        ok: () => { console.log('click ok') },
        cancel: () => { console.log('click cancel') }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
