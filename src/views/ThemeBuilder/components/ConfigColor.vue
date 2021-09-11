<template>
  <div class="form-group">
    <div class="col-sm-3"><input type="checkbox" v-model="enabled" v-if="canDisable"/> <label
      class="control-label">{{title}}</label></div>
    <div class="col-sm-9">
      <color :color.sync="color" v-show="enabled"></color>
    </div>
  </div>
</template>

<script>
import color from './color'

export default {
  name: "ConfigColor",
  components: {color},
  props: {
    title: String,
    canDisable: {type: Boolean, default: !1},
    color: {twoWay: !0},
    enabled: {twoWay: !0, default: !0}
  }
}
</script>

<style scoped>

</style>
