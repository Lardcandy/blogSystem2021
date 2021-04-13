<template>
    <div>
        <div class="openPage" v-if="flowNum === 0">
            <p>热烈庆祝Elisa小朋友3岁生日！</p>
            <!-- <p>以下是你的忠实拥趸David写给你的一封信</p> -->
            <p>以下是肥集人字[1707]003号 关于Elisa Kwok 3岁生日应援项目的通知</p>
            <el-tooltip class="item" effect="light" content="等我入去睇下你搞乜鬼先" placement="bottom">
                <el-button id="open-btn" type="primary" size="small" @click="openPage">请查阅并审批</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="落左班啦！唔得闲审啊！掉你落垃圾桶~" placement="left">
                <el-button id="drop-btn" type="info" icon="el-icon-delete" size="mini" @click="dropLetter" plain circle></el-button>
            </el-tooltip>
        </div>
        <div class="letterPage" v-else-if="flowNum === 1">
            <div class="text">
                Elisa Kwok 3岁生日应援项目分组文件[秘密]
            肥集人字[1707]003号
            关于Elisa Kwok 3岁生日应援项目上线的通知
            根据肥圆集团“员工第一，体重第二”的战略，满足员工对集团人文关怀的期望，特申请在肥圆集团广夏分部石洞事业部狗灵狗有限公司上线生日应援项目，具体通知如下：
            一、上线范围：肥圆集团广夏分部石洞事业部狗灵狗有限公司
            二、上线时间：2021年4月16日
            三、涉及系统：G-CRM、C-CSS、全球资金系统
            四、上线支持人员
            五、上线内容：祝福内容
            系统问题或优化事项升级渠道：最终用户 -> 关键用户 -> 各系统支持 -> 总体组 -> Sponsor -> Dr.咪吵
            特此通知！

            肥圆集团生日应援项目组
            二〇二一年四月十六日
            
            发送范围：肥圆集团所有事业部
            </div>
            <div class="btn">
                <el-tooltip class="item" effect="light" content="行埋一二边啦，我去稳Jackson，哼！" placement="top">
                    <el-button id="cancel-btn" type="info" size="mini" @click="cancel" plain round>驳回</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="light" content="David咁靓仔，实通过啦!" placement="top">
                    <el-button id="submit-btn" type='success' size="mini" @click="submit" round>通过</el-button>
                </el-tooltip>
            </div>
        </div>
        <div v-else-if="flowNum === 2">
            <iframe src="https://bruno-simon.com/" frameborder="0" width="870px" height="500px"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            flowNum: 0,
            cancelNum: 0,
        }
    },
    methods: {
        // 0 打开信件
        openPage() {
            this.flowNum++
        },
        // 扔掉信件
        dropLetter() {
            this.$message({
                showClose: true,
                message: 'G-CRM系统异常，请稍后再试！',
                type: 'error'
            });
        },
        // 不接受 取消
        cancel() {
            if (this.cancelNum == 0) {
                this.$message({
                    showClose: true,
                    message: 'CSS系统异常，请稍后再试！'
                })
                this.cancelNum = 1
            }else {
                this.$message({
                    showClose: true,
                    message: 'Jackson Chan系广夏10栋909房B，欢迎拨打热线15521004119'
                })
                this.cancelNum = 0
            }
        },
        // 1 接受信件
        submit() {
            this.flowNum++
        }
    }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.openPage {
    float: left;
    width: 100%;
    height: 500px;
    /* background-color: lightgrey; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.openPage>p {
    font-size: 20px;
}
#drop-btn {
    position: absolute;
    bottom: 5px;
    right: 5px;
}
#open-btn {
    margin: 10px 0 0 0;
}
.text {
    width: 100%;
    height: 450px;
    border-bottom: 1px dotted lightgray;
}
.btn {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
}
.btn>.el-button {
    margin: 10px 0;
}
#cancel-btn {
}

</style>