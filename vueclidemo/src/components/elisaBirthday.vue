<template>
  <div class='main'>
        <div class='background'></div>
        <div class='box userInfo'></div>
        <div class='box content'></div>
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
.main {
    position: relative;
}
.background {
    height: 565px;
    overflow: hidden;
    background-image: url(../assets/bg2.jpg);
    background-size: 100%;
    filter: blur(13px);
}
.box {
    position: absolute;
    top: 30px;
    float: left;
    height: 500px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 1px 20px lightgrey;
}
.userInfo {
    left: 100px;
    width: 270px;
}
.content {
    left: 400px;
    width: 870px;
}

</style>