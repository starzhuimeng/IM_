<template>
  <div id="login">
    <a-row style="padding: 100% 20px">
      <a-col :span="24">
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
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
  name: 'login',
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.flex-box-row-between
  width: 100%
  display: flex
  flex-direction: row
  justify-contents: space-between

#login
  width: 30vw
  height: 100vh
  background: #fff
  color: #000
</style>
