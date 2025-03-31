<template>
  <div id="stuIntroduce">
    <div class="box">
      <div class="head">
        <div class="back">
          <img src="@/assets/student/stuIntroduce/back-icon.5f962735.svg" />
        </div>
        <div class="head-mes">学生简介</div>
      </div>

      <div class="stu-box">
        <div class="left">
          <div class="left-contain">
            <img
              class="stu-img"
              src="@/assets/student/stuIntroduce/376623.png"
            />

            <!-- 左边底部，三个盒子部分 -->
            <div class="left-bottom">
              <div class="rank">
                <div class="rank-top">
                  <div class="rt-left">
                    <img
                      class="loveimg"
                      src="@/assets/student/stuIntroduce/left/love.png"
                    />
                    <div class="stu-name">爱露</div>
                  </div>
                  <div class="rt-right">
                    <img
                      class="starimg"
                      src="@/assets/student/stuIntroduce/left/star.png"
                    />
                    <div class="attack-type">STRIKER</div>
                  </div>
                </div>

                <div class="rank-bottom">
                  <div class="rb-left">LV.90</div>
                  <div class="rb-right">
                    <span>MAX</span>
                  </div>
                </div>
              </div>

              <!-- 表情盒子 -->
              <div class="base-data">
                <div class="base-data-left">
                  <div class="bdl-left">
                    <div class="bdll-profession">
                      <img
                        src="@/assets/student/stuIntroduce/left/profession1.png"
                        alt=""
                      />
                      输出
                    </div>
                    <div class="bdll-position">BACK</div>
                  </div>

                  <div class="bdl-mid">
                    <div class="bdlm-attack">
                      <img
                        src="@/assets/student/stuIntroduce/left/attack.webp"
                      />
                      <div class="">爆发</div>
                    </div>
                    <div class="bdlm-defense">
                      <img
                        src="@/assets/student/stuIntroduce/left/defence.png"
                      />
                      <div class="">轻装</div>
                    </div>
                  </div>

                  <div class="bdl-right">
                    <div class="bdlr-face1">
                      <img
                        src="@/assets/student/stuIntroduce/left/terrain1.png"
                      />
                      <img src="@/assets/student/stuIntroduce/left/face3.png" />
                    </div>
                    <div class="bdlr-face2">
                      <img
                        src="@/assets/student/stuIntroduce/left/terrain2.png"
                      />
                      <img src="@/assets/student/stuIntroduce/left/face2.png" />
                    </div>
                    <div class="bdlr-face3">
                      <img
                        src="@/assets/student/stuIntroduce/left/terrain3.png"
                      />
                      <img src="@/assets/student/stuIntroduce/left/face1.png" />
                    </div>
                  </div>
                </div>
                <div class="base-data-right" @click="hobbyPopup()">
                  <img
                    src="@/assets/student/stuIntroduce/left/mes.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right">
          <div class="right-contain">
            <div class="right-top">
              <div id="right-top-box" class="right-top-box">基本信息</div>
              <div class="right-top-box">升级</div>
              <div class="right-top-box">神秘解放</div>
            </div>

            <div class="right-main">
              <!-- 基本信息 -->
              <div class="number-value">
                <div class="search">
                  <div class="sear-left">基本信息</div>
                  <div class="sear-right" @click="mesgPopup()">
                    <img
                      src="@/assets/student/stuIntroduce/search.png"
                      alt=""
                    />
                    详细
                  </div>
                </div>

                <div class="nv-bottom">
                  <div class="nvb-left">
                    <div class="nvbl-top">
                      <div class="hp">
                        <span>HP</span>
                        37169
                      </div>
                      <div class="attack">
                        <span>ATTACK</span>
                        37169
                      </div>
                    </div>
                    <hr />
                    <div class="nvbl-bottom">
                      <div class="defence">
                        <span>DEFENCE</span>
                        109
                      </div>
                      <div class="heal">
                        <span>HEAL</span>
                        5694
                      </div>
                    </div>
                  </div>
                  <div class="nvb-right">能力解放</div>
                </div>
              </div>

              <div class="skill">
                <div class="sk-left">
                  <div
                    class="skl-skill"
                    v-for="skill in skills"
                    :key="skill.id"
                    @click="skillPopup(skill)"
                  >
                    <div class="skill-name">
                      {{ getSkillTypeName(skill.specialName) }}
                    </div>
                    <img src="@/assets/student/stuIntroduce/skill/ex.png" />
                    <hr />
                    <div class="max">max</div>
                  </div>

                  <!-- <div class="skl-skill">
                    <div class="skill-name">普通技能</div>
                    <img src="@/assets/student/stuIntroduce/skill/common.png" />
                    <hr />
                    <div class="max">max</div>
                  </div>
                  <div class="skl-skill">
                    <div class="skill-name">被动技能</div>
                    <img
                      src="@/assets/student/stuIntroduce/skill/passivity.png"
                    />
                    <hr />
                    <div class="max">max</div>
                  </div>
                  <div class="skl-skill">
                    <div class="skill-name">辅助技能</div>
                    <img
                      src="@/assets/student/stuIntroduce/skill/passivity.png"
                    />
                    <hr />
                    <div class="max">max</div>
                  </div> -->
                </div>
                <div class="sk-right">技能升级</div>
              </div>

              <!-- 武器 -->
              <div class="weapon">
                <div class="we-left">SR</div>
                <div class="we-mid">
                  <img
                    class="is-weapon"
                    src="@/assets/student/stuIntroduce/isWeapon.png"
                  />
                  <img
                    class="weapon-img"
                    src="@/assets/student/stuIntroduce/weapon.png"
                  />
                </div>
                <div class="we-right">固有武器</div>
              </div>

              <!-- 装备 -->
              <div class="equipment">
                <div class="eq-left">
                  <div class="eql-eq1">
                    <img
                      src="@/assets/student/stuIntroduce/equipment/173546.png"
                    />
                    <div class="weapon-rank">T1</div>
                  </div>
                  <div class="eql-eq2">
                    <img
                      src="@/assets/student/stuIntroduce/equipment/746384.png"
                    />
                    <div class="weapon-rank">T1</div>
                  </div>
                  <div class="eql-eq3">
                    <img
                      src="@/assets/student/stuIntroduce/equipment/324321.png"
                    />
                    <div class="weapon-rank">T1</div>
                  </div>
                  <div class="eql-eq4">
                    <img src="@/assets/student/stuIntroduce/567858.png" />
                    <div class="weapon-rank">T1</div>
                  </div>
                </div>
                <div class="eq-right">装备强化</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索弹框 -->
    <div
      v-if="isMesgPopup"
      class="mesg-popup-container"
      @click="closePopupIfOutside"
    >
      <div class="mesg-box">
        <div class="mesg-content">
          <div class="head">
            数值详细
            <div class="close" @click="mesgPopup()">X</div>
          </div>
          <div class="body">
            <div class="body-contain">
              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">生命值</div>
                  <div class="num-value">23837</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">治愈力</div>
                  <div class="num-value">5694</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">攻击力</div>
                  <div class="num-value">5134</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">防御力</div>
                  <div class="num-value">109</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">命中值</div>
                  <div class="num-value">905</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">闪避值</div>
                  <div class="num-value">201</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">暴击值</div>
                  <div class="num-value">201</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">暴击伤害率</div>
                  <div class="num-value">200%</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">暴击值</div>
                  <div class="num-value">201</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">暴击伤害率</div>
                  <div class="num-value">200%</div>
                </div>
              </div>
              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">安定值</div>
                  <div class="num-value">1988</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">射程</div>
                  <div class="num-value">750%</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">CC强化力</div>
                  <div class="num-value">100</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">CC抵抗力</div>
                  <div class="num-value">100</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">载弹量</div>
                  <div class="num-value">5 (1)</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">防御贯穿</div>
                  <div class="num-value">0</div>
                </div>
              </div>

              <div class="row">
                <div class="row-left">
                  <div class="line"></div>
                  <div class="num-value-name">受治愈率</div>
                  <div class="num-value">100%</div>
                </div>
                <div class="row-right">
                  <div class="line"></div>
                  <div class="num-value-name">COST回复</div>
                  <div class="num-value">700%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 学生个人信息查询弹框 -->
    <div
      v-if="isHobyPopup"
      class="hobby-popup-contain"
      @click="closePopupIfOutside"
    >
      <div class="hobby-box">
        <div class="hobby-content">
          <div class="head">
            学生信息
            <div class="close" @click="hobbyPopup()">X</div>
          </div>

          <div class="body">
            <div class="body-left">
              <div class="top">
                <img src="@/assets/student/stuIntroduce/avatar.png" />
                <div class="top-right">
                  <!-- 学校区域这里想不出来名字了，先暂定布局 -->
                  <div class="school-and-club-img-area">
                    <div class="school-img">
                      <img
                        src="@/assets/student/stuIntroduce/school/school1.png"
                        alt=""
                      />
                    </div>
                    <div class="school-and-club">
                      <div class="school-area">
                        <div class="school-area-name">格黑娜学园</div>
                        <div class="school-area-rank">2年纪</div>
                      </div>
                      <div class="club-area">
                        <div class="club">社团</div>
                        <div>便利屋68</div>
                      </div>
                    </div>
                  </div>
                  <div class="tr-name">爱露</div>
                </div>
              </div>

              <div class="bottom">
                <div class="base-information">基本情报</div>
                <div class="text">
                  格黑娜学园所属，自称便利屋68社长。
                  作为格黑娜学园的社团活动，阿露喜欢以便利屋68为据点，从事一些不法行当。
                  阿露虽然十分向往成为一位帅气的黑帮分子，但因为经常做事错漏百出，所以总是很快就暴露无遗。
                </div>
              </div>
            </div>

            <div class="body-right">
              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">年龄</div>
                  <div class="row-value">16岁</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">生日</div>
                  <div class="row-value">3月12日</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">身高</div>
                  <div class="row-value">160 cm</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">爱好</div>
                  <div class="row-value">学习经营</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">角色设计</div>
                  <div class="row-value">DoReMi</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">角色原画</div>
                  <div class="row-value">DoReMi</div>
                </div>
                <hr />
              </div>

              <div class="row-value-hr">
                <div class="row">
                  <div class="row-name">cv.</div>
                  <div class="row-value">近藤玲奈</div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技能组件 -->
    <SkillPopup
      :skillData="selectSkill"
      :visible="isSkillPopup"
      @close="skillPopup"
    ></SkillPopup>
  </div>
</template>

<script>
import { getStuInfor } from "@/api/student";
import SkillPopup from "@/components/skillPopup.vue";
export default {
  name: "stuIntroduce",
  data() {
    return {
      isMesgPopup: false,
      isHobyPopup: false,
      isSkillPopup: false,
      selectSkill: null,
      // 0代表是ex,1普通技能，2是被动技能，3是辅助技能
      skills: [],
    };
  },
  components: {
    SkillPopup,
  },
  created() {
    this.getStuInfor();
  },
  methods: {
    mesgPopup() {
      this.isMesgPopup = !this.isMesgPopup;
    },
    hobbyPopup() {
      this.isHobyPopup = !this.isHobyPopup;
    },
    skillPopup(skill) {
      this.isSkillPopup = !this.isSkillPopup;
      // 把选中的skill数据赋值给变量里面存着，然后给组件
      this.selectSkill = skill;
    },
    closePopupIfOutside(event) {
      // 检查点击的目标是否是弹框容器本身
      if (event.target === event.currentTarget) {
        this.isMesgPopup = false; // 关闭弹框
        this.isHobyPopup = false; // 关闭弹框
      }
    },
    async getStuInfor() {
      const res = await getStuInfor(1);
      this.skills = res.data.skills
    },
    // 判断技能名字
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
/* 背景颜色 */
#stuIntroduce {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #d3f4f0, #f9d9fb);
  overflow: hidden;
}

.box {
  margin: 10px auto;
  width: 78%;
  height: 90%;
}

.box .head {
  position: relative;
  background-color: rgb(254, 250, 250, 0.4);
  width: 100%;
  height: 8%;
}

.head .head-mes {
  width: 100%;
  height: 100%;
  margin-left: 7%;
  color: rgb(44, 69, 99);
  display: flex;
  align-items: center;
  font-weight: 1000;
  font-size: 1.5rem;
}

.back {
  position: absolute;
  width: 4%;
  height: 100%;
  left: 2%;
  top: 40%;
  border-radius: 50%;
  background-color: rgb(106, 124, 159);
  display: flex;
  align-items: center;
}

.back img {
  width: 80%;
  height: 80%;
}

.box .stu-box {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/student/stuIntroduce/bg/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 左边区域 */
.left {
  width: 50%;
  height: 100%;
}
.left-contain {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left-contain .stu-img {
  width: 160%;
  height: 148%;
  margin-left: -30%;
  margin-top: -4%;
}

.left-contain .left-bottom {
  position: absolute;
  width: 84%;
  height: 26%;
  left: 3%;
  bottom: 2%;
}

/* 左边区域底部,星级栏 */
.left-bottom .rank {
  width: 60%;
  height: 40%;
  /* 15, 77,139 */
  background-image: linear-gradient(
    to right,
    rgb(15, 77, 139),
    rgb(13, 45, 76)
  );
  transform: skewX(-15deg); /* 沿X轴倾斜30度 */
  border-radius: 5px;
  opacity: 0.9;
}

/* 星级栏的上面部分 */
.rank .rank-top {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.rank .rank-top .rt-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  padding-left: -3%;
}

.rank-top .rt-left .stu-name {
  width: 100%;
  margin: 0 2%;
  font-weight: 800;
  color: aliceblue;
}

.rank .rank-top .rt-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  padding-left: 20%;
}

.rank-top .rt-right .attack-type {
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: aliceblue;
  font-weight: 800;
  color: red;
}

/* 图片大小 */
.rank-top .rt-left .loveimg {
  width: 25%;
  margin: 0 4%;
}
.rank-top .rt-right .starimg {
  width: 40%;
}

/* 星级栏的下面部分 */
.rank .rank-bottom {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.rank-bottom .rb-left {
  font-weight: 1000;
  width: 16%;
  display: flex;
  justify-content: center;
  color: rgb(206, 217, 223);
}

.rank-bottom .rb-right {
  position: relative;
  width: 75%;
  height: 80%;
  background-color: rgb(254, 237, 0);
}

.rb-right span {
  color: rgb(197, 196, 196);
  font-weight: 1000;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-60%, -50%);
}

/* 攻击和防御栏，还有学生信息介绍： */
.left-bottom .base-data {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/* 攻击和防御，表情栏*/
.base-data .base-data-left {
  width: 60%;
  height: 90%;
  background-color: rgb(199, 198, 198, 0.9);
  transform: skewX(-15deg);
  margin: 0 1%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 输出与占位 */
.base-data-left .bdl-left {
  width: 32%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bdl-left .bdll-profession {
  width: 90%;
  height: 40%;
  background-color: #d3f4f0;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bdl-left .bdll-position {
  width: 90%;
  height: 40%;
  font-weight: 800;
  background-color: rgb(44, 69, 99);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  margin: 2%;
}

.bdl-left .bdll-profession img {
  width: 34%;
  margin: 0 4%;
}

/* 输出和防御类型 */
.base-data-left .bdl-mid {
  width: 32%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 攻击 */
.bdl-mid .bdlm-attack {
  width: 90%;
  height: 40%;
  background-color: #fafafa;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.bdlm-attack div {
  width: 70%;
  height: 100%;
  background-color: rgb(146, 0, 8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  font-weight: 800;
}

.bdl-mid .bdlm-attack img {
  width: 20%;
  margin: 0 2%;
}

/* 防御 */
.bdl-mid .bdlm-defense {
  width: 90%;
  height: 40%;
  background-color: #ffffff;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
}

.bdlm-defense div {
  width: 70%;
  height: 100%;
  background-color: rgb(146, 0, 8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  font-weight: 800;
}

.bdl-mid .bdlm-defense img {
  width: 30%;
}

/* 适合场地 */
.base-data-left .bdl-right {
  width: 32%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bdl-right .bdlr-face1,
.bdl-right .bdlr-face2,
.bdl-right .bdlr-face3 {
  width: 33%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebf2f1;
  margin: 0 2%;
  border-radius: 3px;
}

.bdl-right img {
  width: 90%;
  margin: 4%;
}

/* 学生信息展示小图标 */
.base-data .base-data-right {
  width: 8%;
  height: 36%;
  background-color: rgb(243, 244, 244);
  transform: skewX(-15deg);
  margin-left: 2%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
}

.base-data .base-data-right img {
  width: 80%;
}

/* 右边区域 */
.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right .right-contain {
  width: 90%;
  height: 80%;
  border-radius: 5px;
}
.right-contain .right-top {
  height: 12%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-top .right-top-box {
  width: 33%;
  height: 100%;
  background-color: rgb(86, 107, 134, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 800;
  color: rgb(233, 236, 240);
  cursor: pointer;
}

#right-top-box {
  background-color: rgba(215, 234, 242);
  color: rgb(55, 57, 60);
}

/* 右边区域，下面的信息内容 */
.right-contain .right-main {
  width: 100%;
  height: 88%;
  background-color: rgb(215, 234, 242);
  border-radius: 4px;
  overflow: hidden;
}

/* 数值部分 */
.right-main .number-value {
  width: 98%;
  height: 26%;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin-top: 1%;
  margin-left: 1%;
  overflow: hidden;
  box-shadow: 0 3px 5px rgb(137, 136, 136);
}

/* 查询数值信息 */
.number-value .search {
  width: 96%;
  height: 24%;
  margin: 1% auto;
  background-color: rgb(45, 76, 114);
  transform: skewX(-15deg);
  color: #fafafa;
  font-weight: 800;
  padding: 1%;
  border-radius: 3px;
}
.number-value .search .sear-right {
  position: absolute;
  top: 20%;
  right: 1%;
  width: 20%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(80, 111, 142);
  cursor: pointer;
}

.number-value .search img {
  width: 14%;
}

/* 数值部分的下半区 */
.number-value .nv-bottom {
  width: 100%;
  height: 64%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.number-value .nv-bottom .nvb-left {
  width: 76%;
  height: 100%;
  background-color: rgb(215, 234, 242);
  margin-left: 1.5%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 能力解放 */
.number-value .nv-bottom .nvb-right {
  width: 20%;
  height: 84%;
  background-image: linear-gradient(
    to bottom right,
    rgb(20, 180, 249),
    rgb(136, 224, 253)
  );
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 5px rgb(78, 115, 126);
  color: rgb(92, 116, 161);
  font-weight: 800;
}

/* 下划线 */
.nvb-left hr {
  border: 0;
  height: 2px;
  background-color: rgb(206, 215, 223);
  width: 96%;
}

/* 数值部分,乱七八糟变量名,我都看不下去了 */
.nvb-left .nvbl-top {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nvb-left .nvbl-top .hp,
.nvb-left .nvbl-bottom .defence {
  width: 50%;
  margin-left: 3%;
  color: rgb(25, 26, 26);
  font-weight: 600;
}

.nvb-left .nvbl-top .attack,
.nvb-left .nvbl-bottom .heal {
  width: 50%;
  color: rgb(25, 26, 26);
  font-weight: 600;
}
.nvb-left .nvbl-bottom {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* 灰色字体设置 */
.nvb-left span {
  color: rgb(63, 85, 112);
  font-weight: 800;
}

/* 技能介绍 */
.right-main .skill {
  width: 98%;
  height: 24%;
  background-color: rgb(255, 255, 255);
  margin: 1%;
  margin-left: 1%;
  overflow: hidden;
  box-shadow: 0 3px 5px rgb(145, 144, 144);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sk-left {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76%;
  height: 90%;
  transform: skewX(-10deg);
  margin-top: 1%;
  margin-left: 2%;
  border-radius: 3px;
}

.skl-skill,
.skl-skill,
.skl-skill,
.skl-skill {
  width: 22%;
  height: 92%;
  margin: 0 1%;
  background-color: #ebf2f1;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 10px rgb(180, 179, 179);
  cursor: pointer;
}
.skl-skill hr,
.skl-skill hr,
.skl-skill hr,
.skl-skill hr {
  border: 0;
  height: 2px;
  background-color: rgb(206, 215, 223);
  width: 80%;
}

.skl-skill .skill-name,
.skl-skill .skill-name,
.skl-skill .skill-name,
.skl-skill .skill-name {
  color: rgb(92, 116, 161);
  font-weight: 800;
}

.skl-skill .max,
.skl-skill .max,
.skl-skill .max,
.skl-skill .max {
  color: #060406;
  font-weight: 1000;
}

.skill img {
  width: 60%;
}

/* 技能升级部分 */
.sk-right {
  width: 16%;
  height: 80%;
  background-color: blanchedalmond;
  transform: skewX(-15deg);
  margin: 0 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    rgb(20, 180, 249),
    rgb(136, 224, 253)
  );
  border-radius: 4px;
  box-shadow: 0 3px 10px rgb(180, 179, 179);
  color: rgb(92, 116, 161);
  font-weight: 800;
}

/* 武器介绍 */
.right-main .weapon {
  width: 98%;
  height: 20%;
  background-color: rgb(255, 255, 255);
  margin-top: 1%;
  margin-left: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 5px rgb(165, 160, 160);
}
.weapon .we-left {
  width: 17%;
  height: 80%;
  background-color: rgb(215, 234, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(-15deg);
  border-radius: 4px;
  color: rgb(92, 116, 161);
  font-weight: 800;
}

.weapon .we-mid {
  width: 54%;
  height: 80%;
  background-color: rgb(215, 234, 242);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(-15deg);
  border-radius: 4px;
}
.weapon .we-mid .is-weapon {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 10%;
}
.weapon .we-mid .weapon-img {
  width: 84%;
  height: 100%;
}

.weapon .we-right {
  width: 18%;
  height: 80%;
  background-image: linear-gradient(
    to bottom right,
    rgb(20, 180, 249),
    rgb(136, 224, 253)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(-15deg);
  color: rgb(92, 116, 161);
  font-weight: 800;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgb(149, 145, 145);
}

/* 装备和爱用品 */
.right-main .equipment {
  width: 98%;
  height: 20%;
  background-color: rgb(255, 255, 255);
  margin-top: 2%;
  margin-left: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 5px 10px rgb(149, 145, 145);
}
.equipment .eq-left {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.eq-left .eql-eq1,
.eq-left .eql-eq2,
.eq-left .eql-eq3,
.eq-left .eql-eq4 {
  width: 22%;
  height: 80%;
  background-color: rgb(216, 243, 239);
  transform: skewX(-15deg);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.weapon-rank {
  position: absolute;
  left: 10%;
  bottom: 5%;
  width: 30%;
  height: 20%;
  background-color: rgb(250, 240, 240);
  border: 1px solid rgb(122, 133, 143);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 800;
  color: rgb(92, 116, 161);
}

.equipment .eq-left img {
  width: 98%;
}
.equipment .eq-right {
  width: 26%;
  height: 80%;
  background-image: linear-gradient(
    to bottom right,
    rgb(20, 180, 249),
    rgb(136, 224, 253)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 800;
  color: rgb(92, 116, 161);
  transform: skewX(-15deg);
  box-shadow: 0 3px 4px rgb(134, 134, 134);
}

/* 详细数值信息弹框 */
.mesg-popup-container {
  width: 100vw;
  height: 100vh;
  background-color: rgba(68, 69, 69, 0.55);

  /* 固定在浏览器上面,这里可以让弹框在最上层 */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mesg-box {
  width: 60%;
  height: 70%;
  background-color: rgb(240, 240, 239);
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(53, 53, 53);
  overflow: hidden;
}

.mesg-content {
  width: 100%;
  height: 100%;
}

/* 弹框头部样式 */
.mesg-content .head {
  position: relative;
  width: 100%;
  height: 10%;
  background-image: linear-gradient(
    to bottom right,
    rgb(175, 221, 241),
    rgb(151, 196, 209)
  );
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(45, 70, 99);
  font-weight: 800;
  font-size: 2vw;
}
.mesg-content .head .close {
  color: rgb(16, 33, 64);
  font-weight: 800;
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 2vw;
}

/* 弹框内容区域 */
.mesg-content .body {
  width: 100%;
  height: 88%;
  margin-top: 1%;
  background-color: rgb(240, 240, 239);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mesg-content .body .body-contain {
  width: 94%;
  height: 90%;
  background-color: rgb(226, 226, 225);
  overflow-y: auto; /* 允许垂直滚动 */
  scrollbar-width: none; /* 隐藏滚动条（Firefox） */
}

.body-contain::-webkit-scrollbar {
  display: none;
}
.body-contain .row {
  width: 96%;
  height: 20%;
  background-color: rgb(255, 255, 255);
  margin: 2% auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
}

/* 数值弹框,里面每行样式进行排版 */
.body-contain .row .row-left,
.body-contain .row .row-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.row-left .line,
.row-right .line {
  width: 1%;
  height: 25%;
  background-color: rgb(115, 214, 253);
  margin-left: 2%;
}
.row-left .num-value-name,
.row-right .num-value-name {
  font-weight: 800;
  font-size: 1.2vw;
  margin: 0 1%;
  color: rgb(49, 74, 102);
}

.row-left .num-value,
.row-right .num-value {
  font-weight: 600;
  font-size: 1vw;
  color: rgb(63, 65, 68);
}

/* 下面是学生爱好弹框展示 */
.hobby-popup-contain {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(82, 83, 84, 0.6);
}

.hobby-box {
  width: 60%;
  height: 70%;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(53, 53, 53);
  overflow: hidden;
}

.hobby-box .hobby-content {
  width: 100%;
  height: 100%;
}

/* 头部设置 */
.hobby-content .head {
  position: relative;
  width: 100%;
  height: 10%;
  background-image: linear-gradient(
    to bottom right,
    rgb(175, 221, 241),
    rgb(151, 196, 209)
  );
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(45, 70, 99);
  font-weight: 800;
  font-size: 2vw;
}
.hobby-content .head .close {
  color: rgb(16, 33, 64);
  font-weight: 800;
  position: absolute;
  top: 10%;
  right: 2%;
  font-size: 2vw;
}

/* 学生爱好，学校介绍内容布局设置样式 */
.hobby-content .body {
  height: 88%;
  width: 100%;

  margin-top: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body .body-left {
  width: 60%;
  height: 100%;
}

/* 学生爱好区域，身体部分，左边区域 */
.body-left .top {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* 身体部分，左区域，上面的头部照片和学校区域 */
.body-left .top img {
  width: 22%;
  height: 84%;
}

.body-left .top .top-right {
  width: 76%;
  height: 84%;
}

.top-right .school-and-club-img-area {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.school-and-club-img-area .school-img {
  width: 18%;
  height: 94%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 5px 5px rgb(116, 115, 115);
  display: flex;
  justify-content: center;
  align-items: center;
}
.school-and-club-img-area .school-img img {
  width: 80%;
  height: 90%;
}
.school-and-club-img-area .school-and-club {
  width: 80%;
  height: 100%;
}
.school-and-club .school-area {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4%;
}

.school-area .school-area-name {
  font-weight: 800;
  color: rgb(97, 111, 129);
  margin: 0 1%;

  background-color: rgb(253, 250, 158);
  border-radius: 5px;
}

.school-area .school-area-rank {
  font-weight: 800;
  color: rgb(97, 111, 129);
  background-color: rgb(245, 232, 74);
  border-radius: 5px;
}

.school-and-club .club-area {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.club-area .club {
  font-weight: 900;
  color: rgb(97, 111, 129);
}

.club-area div {
  font-weight: 700;
  color: rgb(75, 77, 79);
  margin-left: 1%;
}

.top-right .tr-name {
  width: 30%;
  height: 40%;
  background-color: rgb(220, 220, 220, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgb(138, 136, 136);
  font-weight: 800;
  font-size: 2vw;
}

/* 身体部分，左区域，下面的内容介绍区域 */
.body-left .bottom {
  width: 100%;
  height: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.body-left .bottom .base-information {
  width: 98%;
  height: 10%;
  background-color: rgb(45, 76, 114);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skewX(-10deg);
  border-radius: 2px;
  color: #ebf2f1;
  font-weight: 500;
  font-size: 1.1vw;
}

.body-left .bottom .text {
  width: 100%;
  height: 88%;
  margin-top: 2%;
  color: rgb(74, 75, 78);
  font-weight: 800;
  font-size: 1.2vw;
}

/* 学生爱好弹框，右边信息区域 */
.body .body-right {
  width: 36%;
  height: 92%;
  background-color: rgb(253, 253, 253);
  box-shadow: 0 5px 10px rgb(116, 109, 109);
  border-radius: 10px;
  margin-left: 2%;
}

.body-right .row-value-hr {
  width: 90%;
  height: 12%;
  margin: 1% auto;
}

.row-value-hr .row {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
}
.body-right .row .row-name {
  width: 40%;
  color: rgb(46, 70, 99);
  font-weight: 800;
  font-size: 1.3vw;
  text-transform: uppercase;
}

.body-right .row .row-value {
  width: 60%;
  color: rgb(55, 57, 60);
  font-weight: 800;
  font-size: 1.2vw;
  margin-left: 4%;
}

.body-right hr {
  border: 0;
  height: 2px;
  background-color: rgb(206, 215, 223);
  margin: 0 auto;
  width: 80%;
}
</style>