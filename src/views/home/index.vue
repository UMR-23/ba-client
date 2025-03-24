<template>
  <div id="home">
    <navBar></navBar>
    <div class="contain">
      <div class="main">
        <div class="head">
          <div class="left">
            <div
              class="time"
              @click="changeTime()"
              :class="{ rotated: isRotated }"
            >
              <div class="img-area">
                <img :src="require(`@/assets/time${timeImg}.png`)" alt="" />
              </div>
              <div class="text-area" :class="{ textAreaBg: isRotated }">
                <div>
                  <img
                    src="@/assets/changeTime.png"
                    style="width: 15px"
                    alt=""
                  />
                </div>
                <span>Time {{ nowTime }}</span>
              </div>
            </div>
            <div class="game">
              <!-- 游戏 -->
              <div class="wrapper">
                <!-- 当前状态显示 -->
                <div class="current-status" id="currentStatus">
                  <img :src="currentBeastImg" id="currentBeastImg" alt="" />
                  <p>&nbsp; 's turn</p>
                </div>
                <!-- 棋盘 -->
                <div
                  class="board"
                  id="board"
                  :class="{
                    smallpeach: smallpeachTurn,
                    alice: !smallpeachTurn,
                  }"
                >
                  <div
                    v-for="(cell, index) in cells"
                    :key="index"
                    class="cell"
                    :class="{
                      smallpeach: cell === 'smallpeach',
                      alice: cell === 'alice',
                    }"
                    @click="handleCellClick(index)"
                  ></div>
                </div>
                <!-- 游戏结束提示 -->
                <div v-if="!gameIsLive" class="game-end-message">
                  <div class="winning-message" data-winning-message>
                    <img
                      v-if="winner"
                      :src="winner === 'smallpeach' ? smallpeachImg : aliceImg"
                      alt=""
                    />
                    <p>{{ winningMessage }}</p>
                  </div>
                  <div class="btn-container">
                    <button
                      class="reset-button"
                      id="resetButton"
                      @click="startGame"
                    >
                      play again
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="to-video">
              <div class="video-contain">
                <img src="@/assets/loveBg.png" alt="" />
                <div class="text">
                  <div class="left-line"></div>
                  <span>羁绊剧情</span>
                </div>
                <hr />
                <div class="lv2d">
                  <span class="lv2d-box">"lv2d"</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="img-rotate">
              <div class="content">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navigationBar.vue";
export default {
  name: "homeIndex",
  components: {
    navBar,
  },
  data() {
    return {
      nowTime: "",
      timeImg: 1,
      isRotated: false,

      gameIsLive: true, // 游戏是否进行中
      smallpeachTurn: true, // 当前是否是独角兽回合
      winner: null, // 获胜者
      cells: Array(9).fill(null), // 棋盘格子状态
      smallpeachImg: require("@/assets/peach.webp"), // 独角兽图片路径
      aliceImg: require("@/assets/alice.webp"), // 龙图片路径
      winningMessage: "", // 获胜信息
    };
  },
  created() {
    this.getNowTime();
  },
  computed: {
    currentBeastImg() {
      return this.smallpeachTurn ? this.smallpeachImg : this.aliceImg; // 当前状态图片
    },
  },
  mounted() {
    // 每秒更新一次时间
    setInterval(this.getNowTime, 1000);
  },
  methods: {
    getNowTime() {
      // 获取当前时间并格式化
      this.nowTime = new Date().toLocaleString();
    },
    changeTime() {
      // 点击切换图片
      this.timeImg = this.timeImg === 1 ? 2 : 1;
      // 切换旋转状态
      this.isRotated = !this.isRotated;
    },

    startGame() {
      this.cells = Array(9).fill(null); // 重置棋盘
      this.winner = null; // 重置获胜者
      this.winningMessage = ""; // 重置获胜信息
      this.gameIsLive = true; // 重新开始游戏
      this.smallpeachTurn = true; // 重置为独角兽回合
    },
    handleCellClick(index) {
      if (!this.gameIsLive || this.cells[index]) return; // 如果游戏结束或格子已被占用，返回

      this.cells[index] = this.smallpeachTurn ? "smallpeach" : "alice"; // 在格子上放置生物

      if (this.checkWin(this.smallpeachTurn ? "smallpeach" : "alice")) {
        // 检查是否获胜
        this.winner = this.smallpeachTurn ? "smallpeach" : "alice"; // 设置获胜者
        this.winningMessage = `${this.winner} wins!!!`; // 设置获胜信息
        this.gameIsLive = false; // 结束游戏
      } else if (!this.cells.includes(null)) {
        // 检查是否平局
        this.winningMessage = "draw!"; // 设置平局信息
        this.gameIsLive = false; // 结束游戏
      } else {
        this.smallpeachTurn = !this.smallpeachTurn; // 切换回合
      }
    },
    checkWin(currentBeast) {
      const winningCombinations = [
        // 所有获胜组合
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      return winningCombinations.some(
        (
          combination // 遍历所有获胜组合
        ) => combination.every((index) => this.cells[index] === currentBeast) // 检查组合中的每个格子
      );
    },
  },
};
</script>


<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");

#home {
  width: 100vw; /* 宽度占满视口 */
  min-height: 100vh; /* 最小高度为视口高度 */
  background-image: url("@/assets/background.jpg");
  background-size: cover; /* 背景图片覆盖整个容器 */
  background-position: center; /* 背景图片居中 */
  background-attachment: fixed; /* 背景图片固定，不随滚动条移动 */
  overflow: hidden; /* 防止坍缩 */
}

.contain {
  margin: 150px auto;
  width: 94%;
  background-color: rgb(255, 254, 253, 0.7);
  border-radius: 10px;
}

.main {
  margin: 10px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;
  border-radius: 10px;
  margin-top: -100px;
  left: 20px;
  transform-style: preserve-3d;
  transition: all 2.2s;
}

.time.rotated {
  transform: rotateY(360deg);
}

.time img {
  width: 144px;
}

.time .text-area {
  position: absolute;
  top: 80px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: rgb(156, 247, 247);
  text-align: center;
}

.text-area.textAreaBg {
  background-color: rgb(249, 224, 244);
}

.img-rotate {
  position: relative;
  width: 65vw;
  height: 75vh;
  margin: 10px;
  transform-origin: center;
  perspective: 1100px;
  background-image: linear-gradient(
    102.7deg,
    rgb(253, 218, 255) 8.2%,
    rgb(223, 173, 252) 19.6%,
    rgb(173, 205, 252) 36.8%,
    rgb(173, 252, 244) 73.2%,
    rgb(202, 248, 208) 90.9%
  );
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  animation: carousel 9s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
  transform: translateZ(-35vw) rotateY(0);
}

.item {
  position: absolute;
  width: 65vw;
  height: 55vh;
  max-width: 700px;
  max-height: 650px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-size: cover;
  -webkit-box-reflect: below 25px -webkit-linear-gradient(transparent 50%, rgba(255, 255, 255, 0.3));
}

.item:nth-child(1) {
  background-image: url(@/assets/home/rorate1.jpg);
  transform: rotateY(0) translateZ(35vw);
}

.item:nth-child(2) {
  background-image: url(@/assets/home/rorate2.png);
  transform: rotateY(120deg) translateZ(35vw);
}

.item:nth-child(3) {
  background-image: url(@/assets/home/rorate3.png);
  transform: rotateY(240deg) translateZ(35vw);
}

@keyframes carousel {
  0%, 17.5% {
    transform: translateZ(-35vw) rotateY(0);
  }
  27.5%, 45% {
    transform: translateZ(-35vw) rotateY(-120deg);
  }
  55%, 72.5% {
    transform: translateZ(-35vw) rotateY(-240deg);
  }
  82.5%, 100% {
    transform: translateZ(-35vw) rotateY(-360deg);
  }
}

.game {
  margin-top: 50px;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Bungee Inline", cursive;
  color: #f5f5f5;
  overflow: hidden;
}

.wrapper {
  background-color: #07e1f553;
  padding: 50px;
  border-radius: 5px;
}

.current-status {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.current-status p {
  margin: 0 5px 0 0;
  font-size: 24px;
}

.current-status img {
  width: auto;
  height: 32px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, minmax(90px, 1fr));
  grid-template-rows: repeat(3, minmax(90px, 1fr));
  grid-gap: 12px;
  width: 100%;
  height: 100%;
  max-width: 495px;
  margin: 0 auto 15px;
}

.board.smallpeach .cell:not(.alice):not(.smallpeach):hover::before,
.board.alice .cell:not(.alice):not(.smallpeach):hover::before {
  content: "";
  width: 70%;
  height: 70%;
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-size: contain;
  opacity: 50%;
}

.board.smallpeach .cell:not(.alice):hover::before {
  background-image: url("@/assets/peach.webp");
}

.board.alice .cell:not(.smallpeach):hover::before {
  background-image: url("@/assets/alice.webp");
}

.cell {
  cursor: pointer;
  position: relative;
  background-color: #f5f5f5;
  width: 90px;
  height: 90px;
  opacity: 0.5;
  transition: opacity 0.1s ease-in-out;
}

.cell:hover {
  opacity: 1;
}

.cell.alice,
.cell.smallpeach {
  opacity: 1;
  position: relative;
  cursor: not-allowed;
}

.cell.alice::before,
.cell.smallpeach::before {
  content: "";
  width: 70%;
  height: 70%;
  display: block;
  position: absolute;
  background-repeat: no-repeat;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-size: contain;
}

.cell.alice::before {
  background-image: url("@/assets/alice.webp");
}

.cell.smallpeach::before {
  background-image: url("@/assets/peach.webp");
}

.game-end-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0d1021;
}

.game-end-overlay.show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.winning-message {
  margin: -50px 0 20px;
}

.winning-message img {
  width: 100px;
}

.btn-container {
  position: relative;
}
.reset-button {
  color: #f5f5f5;
  font-family: "Bungee Inline", cursive;
  font-size: 30px;
  white-space: nowrap;
  border: none;
  padding: 10px 20px;
  background-color: #a186be;
  box-shadow: 5px 5px 0 #55acee;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  position: relative;
}

.reset-button:hover {
  transform: scale(1.2);
}

.reset-button:active {
  top: 6px;
  left: 6px;
  box-shadow: none;
  background-color: #9475b5;
}

.game-end-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  z-index: 9999;
}

.winning-message {
  margin-bottom: 20px;
}

.winning-message img {
  width: 100px;
  margin-bottom: 10px;
}

.to-video {
  position: relative;
  width: 410px;
  border-radius: 10px;
  margin: 12px 20px;
  background-color: rgb(252 238 240);
  overflow: hidden;
}

.to-video img {
  position: absolute;
  left: 310px;
  top: 0px;
  width: 100px;
  z-index: 0;
}

.video-contain {
  margin: 0 8px;
}

.text {
  position: relative;
  margin: 5px 0;
  height: 30px;
}

.left-line {
  position: absolute;
  top: 5px;
  width: 0;
  height: 18px;
  border-left: 3px solid rgb(180, 127, 159);
}

.text span {
  font-weight: 700;
  color: rgb(76 91 111);
  position: absolute;
  left: 12px;
  top: 4px;
}

.lv2d {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(252 135 155);
  height: 40px;
  margin: 10px 0px;
  border-radius: 10px;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 999;
}

.lv2d .lv2d-box {
  --tw-text-opacity: 1;
  color: rgb(255 255 255);
}

.lv2d:hover {
  transform: scale(1.03);
}
</style>


