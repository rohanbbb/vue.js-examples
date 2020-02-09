<template>
  <div id="app">
    <single-select />
    <multiple-select />
    <single-select-search />
    <multiple-select-search />
  </div>
</template>

<script>
import SingleSelect from "./components/SingleSelect.vue";
import MultipleSelect from "./components/MultipleSelect.vue";
import MultipleSelectSearch from "./components/MultipleSelectSearch.vue";
import SingleSelectSearch from "./components/SingleSelectSearch.vue";

export default {
  name: "App",
  components: {
    SingleSelect,
    MultipleSelect,
    SingleSelectSearch,
    MultipleSelectSearch
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-right: 20em;
  margin-left: 20em;
}
@media screen and (max-width: 1000px) {
  #app {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
