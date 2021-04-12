<template>
    <div>
        <div class="openPage" v-if="flowNum === 0">
            <p>热烈庆祝Elisa 3岁生日！</p>
            <p>以下是你的忠实拥趸David写给你的一封信</p>
            <el-button id="open-btn" type="primary" size="small" @click="openPage">打开</el-button>
        </div>
        <div class="letterPage" v-else-if="flowNum === 1">
            <div class="text">

            </div>
            <div class="btn">
                <el-button id="cancel-btn" size="mini" round>去你丫 不接受</el-button>
                <el-button id="submit-btn" type='success' size="mini" round>好啦 接受啦靓仔</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            flowNum: 0,
        }
    },
    methods: {
        // 0 打开信件
        openPage() {
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