<template>
  <div class="web-header-container">
    <div class="web-navBar">
      <h1 class="web-logo"><span>Dazhang</span><span>个人简历</span></h1>
      <nav class="web-nav">
        <router-link tag="div" :class="{active:routerLink=='/index'}" to="/index">首页</router-link>
        <router-link tag="div" :class="{active:routerLink=='/program'}" to="/program">项目</router-link>
        <router-link tag="div" :class="{active:routerLink=='/me'}" to="/me">个人资料</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routerLink() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss">
.web-header-container {
  width: 100%;
  .web-navBar {
    height: 100px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .web-logo {
      span:nth-of-type(1) {
        color: #ffc001;
        font-size: 34px;
      }
      span:nth-of-type(1) {
        color: #ffc001;
      }
    }
    .web-nav {
      width: 360px;
      font-size: 16px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      >div{
        cursor: pointer;
        &:hover{
          color: #ffc001;
        }
        &.active{
          color: #ffc001;
        }
      }
    }
  }
}
</style>