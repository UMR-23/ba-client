<template>
  <div id="app">
    <div class="nav-bar" :class="{ scrolled: isScrolled }">
      <div class="left"><img src="@/assets/LogoJP.png" alt="" /></div>
      <div class="right">
        <div class="user">
          <img id="user-img" src="@/assets/user.png" alt="" />
        </div>
        <div class="home">
          <img src="@/assets/data.jpg" alt="" />
          <span>首页</span>
        </div>
        <div class="studet" @click="$router.push('/stuBook')">
          <img src="@/assets/data.jpg" alt="" />
          <span >学生图鉴</span>
        </div>
        <div
          class="video"
          @mouseenter="showDropdown()"
          @mouseleave="showDropdown()"
        >
          <img src="@/assets/data.jpg" alt="" />
          <span>video</span>
          <div class="video-dropdown-menu" v-show="isShow">
            <div class="menu1">video</div>
            <div class="menu2">message</div>
            <div class="menu3">community</div>
          </div>
        </div>
        <div class="more">
          <img src="@/assets/data.jpg" alt="" />
          <span>更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationBar",
  data() {
    return {
      isScrolled: false, //用于标记是否滚动
      isShow: false, //下拉框展示
    };
  },
  methods: {
    handleScroll() {
      // 当滚动距离大于 0 时，改变导航栏背景
      this.isScrolled = window.scrollY > 0;
    },
    showDropdown() {
      console.log(this.isShow);
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    // 添加滚动监听器
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动监听器
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.3s ease;
  z-index: 1000; /* 确保导航栏在最上层 */
}

/*当滚动时，切换背景颜色 */
.nav-bar.scrolled {
  background-color: white;
}

.right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
}
span{
  font-size: 15px;
  font-weight: 1000;
}

.right img {
  margin-right: 10px;
}

.right img,
.right span {
  vertical-align: middle;
}

.right span:hover {
  color: aquamarine;
}

.left img {
  width: 180px;
  height: 70px;
}

.left {
  margin-left: 10px;
}

#user-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgb(249, 247, 248);
}

.right .user {
  transition: all 0.5s;
}

.right .user:hover {
  transform: scale(1.2);
}

.right img {
  width: 30px;
  height: 30px;
}

.video {
  position: relative;
}

/* 先设置下拉框样式和定位 */
.video .video-dropdown-menu {
  position: absolute;
  /* 定位 */
  top: 100%;
  left: -60px;

  /* 样式 */
  background: linear-gradient(to right, #e5ceeb, #ade4e0);
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgb(84, 83, 83);
  width: 220px;
  padding: 20px;
  transition: all 0.3s ease;
}

.video-dropdown-menu div {
  padding: 10px;
  color: ghostwhite;
  text-align: center;
  transition: all 1s;
}

.video-dropdown-menu div:hover {
  background-color: rgb(178, 232, 241);
  border-radius: 5px;
}
</style>