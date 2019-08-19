<template>
  <div id="app">
    <div id="header">
      <div class="header-content">
        <div @click="$router.push('./home')">
          <i class="iconfont icon-shouye"></i>
        </div>
        <slot name="aperson" ></slot>
        <slot name="casegoods"></slot>
        <div >
          <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        </div>
        <div >
          <i class="iconfont icon-gouwuche" @click="$router.push('/shopping')"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
