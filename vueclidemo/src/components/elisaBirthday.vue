<template>
  <div class='main'>
        <div class='background'></div>
        <div class='userInfo'></div>
        <div class='content'></div>
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
    height: 640px;
    overflow: hidden;
    background-image: url(../assets/bg2.jpg);
    background-size: 100%;
    filter: blur(13px);
}
.userInfo {
    position: absolute;
    top: 0px;
    left: 100px;
    float: left;
    width: 200px;
    height: 500px;
    background-color: pink;
}
.content {
    position: absolute;
    top: 0px;
    left: 400px;
    width: 600px;
    height: 500px;
    background-color: powderblue;
}

</style>