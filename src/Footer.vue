<template>
  <div class="web-footer-container">
    <div class="web-navBar">
      <h1 class="web-logo"><span>Dazhang</span><span>个人简历</span></h1>
      <nav class="web-nav">
        <router-link tag="div" :class="{active:routerLink=='/index'}" to="/index">首页</router-link>
        <router-link tag="div" :class="{active:routerLink=='/program'}" to="/program">项目</router-link>
        <router-link tag="div" :class="{active:routerLink=='/me'}" to="/me">个人资料</router-link>
      </nav>
    </div>
    <div class="web-bottom">
      <div>联系方式:18530928272</div>
      <div>邮箱:luciohtml@163.com</div>
      <div>Github:<a href="https://github.com/Wuli-Zhang">https://github.com/Wuli-Zhang</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss'>
.web-footer-container {
  width: 100%;
  height: 200px;
  background-color: #1e1e1e;
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
      > div {
        cursor: pointer;
        &:hover {
          color: #ffc001;
        }
        &.active {
          color: #ffc001;
        }
      }
    }
  }
  .web-bottom {
    height: 100px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #8e8e8e;
  }
}
</style>