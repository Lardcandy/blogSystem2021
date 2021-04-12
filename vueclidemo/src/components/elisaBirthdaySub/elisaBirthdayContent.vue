<template>
    <div>
        <div class="text">

        </div>
        <div class="btn">
            <el-button type='danger' round>去你丫 不接受</el-button>
            <el-button type='success' round>好啦 接受啦靓仔</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
        }
    }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.text {
    width: 100%;
    height: 400px;
    background-color: antiquewhite;
}
.btn {
    width: 100%;
    height: 100px;
}

</style>