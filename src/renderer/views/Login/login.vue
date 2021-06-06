<template>
  <div id="login">
    <a-row style="padding: 0px 20px">
      <a-col :span="24">
        <a-form
          id="components-form-demo-normal-login"
          :form="loginForm"
          class="login-form"
          @submit="beforeLogin"
        >
          <a-row>
            <a-col>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'userName',
                    {
                      rules: [
                        { required: true, message: '请输入用户名' },
                        { pattern: /^\w+$/, message: '用户名不能是中文' },
                      ],
                    },
                  ]"
                  placeholder="用户名"
                >
                  <a-icon
                    slot="prefix"
                    type="user"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    {
                      rules: [
                        { required: true, message: '请输入密码' },
                        // { min: 8, message: '密码至少8位' },
                        {
                          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
                          message:
                            '必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间',
                        },
                      ],
                    },
                  ]"
                  type="password"
                  placeholder="密码"
                >
                  <a-icon
                    slot="prefix"
                    type="lock"
                    style="color: rgba(0, 0, 0, 0.25)"
                  />
                </a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-form-item>
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    },
                  ]"
                >
                </a-checkbox>
                <span> 记住密码</span>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-form-item>
                <a-col span="10" offset="2">
                  <a-button
                    type="primary"
                    html-type="submit"
                    class="login-form-button"
                  >
                    登录
                  </a-button>
                </a-col>
                <a-col span="10" offset="2">
                  <a-button
                    type="primary"
                    html-type="submit"
                    class="login-form-button"
                  >
                    注册
                  </a-button>
                </a-col>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-form-item>
                <a class="login-form-forgot" href=""> 忘记密码？ </a>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "login",
  beforeCreate() {
    this.loginForm = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    beforeLogin(e) {
      e.preventDefault();
      const result = this.loginForm.getFieldsValue();
      if (result) {
        this.loginError(result);
      } else {
        this.loginForm.getFieldsValue().then(this.login).catch(this.loginError);
      }
    },
    login(params) {
      if (params) {
        // 处理一下然后请求
        this.$api
          .user_login(params)
          .then(this.afterLogin)
          .catch((err) => this.$message.error(err));
      }
      console.log(params);
    },
    loginError(err) {
      console.log(err);
    },
    afterLogin(res) {},
  },
};
</script>

<style lang="sass" scoped>
.flex-box-row-between
  width: 100%
  display: flex
  flex-direction: row
  justify-contents: space-between

#login
  width: 100vw
  height: 100vh
  background: #fff
  color: #000
</style>
