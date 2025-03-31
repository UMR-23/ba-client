<template>
  <div id="skill-popup">
    <div
      v-if="visible"
      class="skill-popup-container"
      @click="closePopupIfOutside($event)"
    >
      <div class="skill-popup-box">
        <div class="skill-popup-content">
          <div class="head">
            <div class="line"></div>
            <div class="name">{{ skillData.skillName }}</div>
          </div>

          <hr class="hr1" />

          <div class="body">
            <div class="special-name">
              {{ getSkillTypeName(skillData.specialName) }}
            </div>
            <div class="rank">{{getSkillTypeName(skillData.specialName)!=='EX技能'?'lv.10':'lv.5'}}</div>
          </div>
          <hr class="hr2" />

          <div class="foot">
            {{ skillData.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillPopup",
  data() {
    return {};
  },
  props: ["visible", "skillData"],
  methods: {
    closeSkill() {},
    closePopupIfOutside(event) {
      // 检查点击的目标是否是弹框容器本身
      if (event.target === event.currentTarget) {
        this.$emit("close");
      }
    },
    getSkillTypeName(specialName) {
      switch (specialName) {
        case 0:
          return "EX技能";
        case 1:
          return "普通技能";
        case 2:
          return "被动技能";
        case 3:
          return "辅助技能";
        default:
          return "未知技能";
      }
    },
  },
};
</script>

<style scoped>
.skill-popup-container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(68, 69, 69, 0.55);
}

.skill-popup-box {
  width: 30%;
  position: absolute;
  bottom: 56%;
  right: 16%;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  border: 3.5px solid rgb(24, 182, 216); /* 2px宽的虚线边框，颜色为红色 */
}

.skill-popup-content {
  width: 90%;
}

.skill-popup-content .head {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head .line {
  width: 1%;
  height: 1.2vw;
  background-color: black;
  margin: 0 1%;
}

.head .name {
  color: rgb(22, 55, 86);
  font-weight: 800;
  font-size: 1.2vw;
}
.skill-popup-content .hr1 {
  border: 0;
  height: 2px;
  background-color: rgb(210, 210, 210);
  margin: 0 auto;
}
.skill-popup-content .body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body .special-name {
  color: rgb(84, 119, 148);
  font-weight: 800;
  font-size: 1.1vw;
}

.body .rank {
  color: rgb(252, 156, 0);
  font-weight: 800;
  font-size: 1.1vw;
  text-transform: uppercase;
}

.skill-popup-content .hr2 {
  border: 0;
  height: 2px;
  border-top: 2px dashed rgb(210, 210, 210); /* 设置顶部边框为虚线 */
  margin: 0 auto;
}
.skill-popup-content .foot {
  color: rgb(84, 119, 148);
  font-weight: 800;
  font-size: 1.2vw;
}
</style>