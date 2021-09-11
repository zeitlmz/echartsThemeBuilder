<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.el-scrollbar__wrap {
  overflow-x: hidden !important;
}

/*.el-scrollbar {*/
/*  padding-bottom: 16px;*/
/*}*/

.el-dialog__body {
  padding: 0 20px 30px 20px;
}
</style>
