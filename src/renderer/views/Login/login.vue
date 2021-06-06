<template>
    <div id="login">
        <a-row style="padding: 0px 20px">
            <a-col :span="24">
                <a-form
                    id="components-form-demo-normal-login"
                    :form="loginForm"
                    class="login-form"
                    @submit="login"
                >
                    <a-row>
                        <a-col>
                            <a-form-item>
                                <a-input
                                    v-decorator="[
                                        'userName',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入用户名',
                                                },
                                                {
                                                    pattern: /^\w+$/,
                                                    message: '用户名不能是中文',
                                                },
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
                                                {
                                                    required: true,
                                                    message: '请输入密码',
                                                },
                                                // { min: 8, message: '密码至少8位' },
                                                {
                                                    pattern:
                                                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
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
                                <a class="login-form-forgot" href="">
                                    忘记密码？
                                </a>
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
        //TODO:这里可以写自定义验证
        async login(e) {
            e.preventDefault();
            const result = this.loginForm.getFieldsValue();
            console.log("result", result);
            let res = await this.$api.user_login();
            if(res?.status == 200 && res?.data?.code == 1){
              console.log(res.data)
              //登陆成功提示用户
              this.$message.success(res.data?.msg, 2)
              setTimeout(()=>this.$router.push('/main'), 2000)
            }
            
        },
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
