<template>
  <div class="form-group">
    <div class="col-sm-3"><input type="checkbox" v-model="enabled" v-if="canDisable"/>
      <label class="control-label">{{ title }}</label></div>
    <div class="col-sm-9">
      <div v-for="(color,index) in colors" :key="index">
        <el-row>
          <el-col :span="20">
            <el-input v-model="colors[index]"/>
          </el-col>
          <el-col :span="4">
            <el-color-picker @active-change="colorChange($event,index)" v-model="colors[index]"></el-color-picker>
          </el-col>
        </el-row>
      </div>
      <div class="theme-color-control"><a v-on:click="addColor()">增加</a>
        <a v-on:click="removeColor()" v-show="colors.length > 1">减少</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ConfigColorList",
  props: {
    title: String,
    canDisable: {type: Boolean, default: !1},
    colors: {twoWay: !0},
    enabled: {twoWay: !0, default: !0}
  },
  data() {
    return {
      chooseColor: this.color
    }
  },
  methods: {
    colorChange($event, index) {
      this.colors[index] = $event
      this.$emit('update:colors', this.colors)
    },
    addColor: function () {
      this.colors.push("#333333")
    },
    removeColor: function () {
      this.colors.pop()
    }
  }
}
</script>

<style scoped>

</style>
