<template>
  <div id="login">
    <div class="form-box">
      <div class="move-box" :class="{ move: ismove }">
        <span>Blue-Archive</span>
        <img :src="require(`@/assets/login/${img}.jpg`)" />
      </div>

      <div class="register-box">
        <div class="head">register</div>
        <div class="body">
          <input type="text" placeholder="用户名" v-model="username" />
          <input type="password" placeholder="密码" v-model="password" />
          <input type="text" placeholder="qq账号" v-model="QQEmail" />
          <div class="auth-box">
            <input type="text" placeholder="验证码" v-model="authCode" />
            <div @click="getMeail()">
              {{
                nowTime === onlyTime
                  ? "点击获取验证码"
                  : nowTime + "s后可再获取"
              }}
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="to-register" @click="register()">注册</div>
          <span @click="moveImg()">已有账号？去注册</span>
        </div>
      </div>

      <div class="login-box">
        <div class="head">login</div>

        <div class="body">
          <input type="text" placeholder="用户名" v-model="username" />
          <input type="password" placeholder="密码" v-model="password" />
        </div>
        <div class="foot">
          <div class="to-login" @click="tologin()">登录</div>
          <span @click="moveImg()">没有账号？去注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendEmail, register, login } from "@/api/user";
export default {
  name: "loginIndex",
  data() {
    return {
      username: "",
      password: "",
      QQEmail: "",
      authCode: "",
      img: 1,
      ismove: false,

      nowTime: 60,
      onlyTime: 60,
      intervalId: null,
    };
  },
  methods: {
    moveImg() {
      this.img = this.img === 1 ? 2 : 1;
      this.ismove = !this.ismove;
      //切换图片把两边信息清空一下,不然太丑了
      this.username = "";
      (this.password = ""), (this.QQEmail = ""), (this.authCode = "");
    },
    judgeEmail() {
      if (!/^[1-9]\d{4,10}@qq\.com$/.test(this.QQEmail)) {
        alert("qq邮箱格式有误,重新输入");
        return false;
      }

      return true;
    },
    // 下面发请求：
    getMeail() {
      //这里发验证前先判断用户和邮箱是否填写正确:
      if (!this.judgeEmail()) {
        return;
      }

      if (this.nowTime === this.onlyTime && !this.intervalId) {
        console.log(this.QQEmail);
        sendEmail(this.QQEmail)
          .then((res) => {
            console.log(res.data);
          })
          .catch(() => {
            console.log("错误信息");
          });

        this.intervalId = setInterval(() => {
          this.nowTime--;
          if (this.nowTime <= 0) {
            clearInterval(this.intervalId);
            this.nowTime = this.onlyTime;
            this.intervalId = null;
          }
        }, 1000);
      }
    },
    register() {
      //发请求前先判断内容是否填上:
      if (!this.judgeEmail) {
        return;
      }
      if (
        this.username === "" ||
        this.password === "" ||
        this.authCode === ""
      ) {
        alert("填信息,蠢比");
        return;
      }
      const registerData = {
        username: this.username,
        password: this.password,
        qqemail: this.QQEmail,
        authCode: this.authCode,
      };
      register(registerData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          alert(error.data);
        });
    },
    async tologin() {
      if (this.username === "" || this.password === "") {
        alert("填信息,蠢比");
        return;
      }
      const loginData = {
        username: this.username,
        password: this.password,
      };
      const res = await login(loginData);
       console.log(res);
       this.$store.commit("user/setUserInfo", res.data);
       this.$router.push("/")
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #e1bcea, #bbbbf5);
}
.form-box {
  position: relative;

  height: 65%;
  width: 800px;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgb(108, 106, 106);
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}

input {
  display: block;
}
.login-box,
.register-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100%;
  width: 38%;
}

.head {
  margin-top: 100px;
  color: aliceblue;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 3px;
}

.register-box .head {
  margin-left: 5px;
}

.body {
  margin: 5px;
}

.login-box input,
.register-box input {
  height: 40px;
  width: 260px;
  margin: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
}

.auth-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-box div {
  width: 45%;
  height: 20%;
  color: aliceblue;
  border-radius: 10px;
  border: 3px solid rgb(247, 231, 237);
  text-align: center;
  box-shadow: 0 2px 1px rgb(156, 155, 155);
  cursor: pointer;
}

.auth-box div:hover {
  transform: scale(1.05);
}

.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.foot .to-login,
.foot .to-register {
  background-color: #e5ceeb;
  width: 80px;
  height: 35px;
  text-align: center;
  margin: 0 5px;
  line-height: 35px;
  border-radius: 5px;
  transition: all 0.3s;
  color: #b7f4e7;
}

.foot .to-login:hover,
.foot .to-register:hover {
  transform: scale(1.1);
}

.foot span {
  color: #b7f4e7;
}

.move-box {
  position: absolute;
  height: 100%;
  width: 50%;
  left: 0;
  top: 0;
  background-color: #e1bcea;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.7s;
}
.move-box.move {
  transform: translate(100%);
  background-color: #bbbbf5;
}
.move-box span {
  color: aliceblue;
  font-size: 40px;
  font-weight: 800;
  margin-top: 70px;
}
.move-box img {
  width: 270px;
  height: 220px;
  margin-top: 30px;
  border-radius: 50%;
  box-shadow: 0 3px 20px rgb(151, 150, 150);
}
</style>