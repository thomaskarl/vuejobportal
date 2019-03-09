<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  (function () {
    localStorage.setItem('username', 'thomas');
    localStorage.setItem('password', '123');
  })();

export default {
  name: 'app',
}
</script>
