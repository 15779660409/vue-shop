<template>
  <div>
    <!--首页头部-->
    <header class="header">
      <slot name="left"/>
      <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
      </span>
      <slot name="right"/>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
