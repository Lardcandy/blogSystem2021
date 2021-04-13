<template>
  <div class='main'>
        <div class='background'></div>
        <div class='box userInfo'>

            <UserInfo></UserInfo>    
        </div>
        <div class='box content'>
            <ElisaBirthdayContent></ElisaBirthdayContent>
        </div>
        <div class="song">
            <audio autoplay="autoplay" controls="controls">
                <source :src="songUrl" />
                不支持
            </audio>
            <!-- <iframe :src="songUrl" allow="autoplay" frameborder="0"></iframe> -->
        </div>
  </div>
</template>

<script>
import UserInfo from './elisaBirthdaySub/userInfo'
import ElisaBirthdayContent from './elisaBirthdaySub/elisaBirthdayContent'

export default {
    name: 'app',
    data() {
        return {
            songUrl: "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C4000022qJBx2sbCrt.m4a?guid=5482205086&vkey=01192196F0B46C2C076B03EB49CB6AF57CC286252E9017D4E78B6F093F98ABEC1C850481B5C7D2CA0BF53C452DACDF37B5CDE2554E58981E&uin=&fromtag=38",
        }
    },
    methods: {
        autoplay() {

        }
    },
    components: {
        UserInfo, ElisaBirthdayContent
    },
    create() {
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
    top: 20px;
    float: left;
    height: 590px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 1px 20px lightgrey;
}
.userInfo {
    left: 100px;
    width: 270px;
}
.userBtnPage>.el-button {
    margin: 20px 0 0 0;
}
.content {
    left: 400px;
    width: 870px;
}
.song {
    display: none;
    position: absolute;
    width: 100px;
    height: 30px;
    bottom: 0;
}

</style>