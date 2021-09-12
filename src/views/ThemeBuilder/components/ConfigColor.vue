<template>
  <div class="form-group">
    <div class="col-sm-3"><input type="checkbox" v-model="enabled" v-if="canDisable"/> <label
        class="control-label">{{ title }}</label></div>
    <div class="col-sm-9">
      <el-row>
        <el-col :span="20">
          <el-input v-model="chooseColor"/>
        </el-col>
        <el-col :span="4">
          <el-color-picker @active-change="colorChange" :disabled="!enabled" v-model="chooseColor"></el-color-picker>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "ConfigColor",
  props: {
    title: String,
    canDisable: {type: Boolean, default: !1},
    color: {twoWay: !0},
    enabled: {twoWay: !0, default: !0}
  },
  data() {
    return {
      chooseColor: this.color
    }
  },
  methods: {
    colorChange(val) {
      this.$emit('update:color', val)
    }
  }
}
</script>

<style scoped>

</style>
