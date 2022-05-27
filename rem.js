function remSize(){
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth>=1024){
        deviceWidth=1024
    }else if(deviceWidth<=160){
        deviceWidth=160
    }
    document.documentElement.style.fontSize=(deviceWidth/375*1)+'px'
    document.body.style.fontSize=16+'rem'
}
remSize()
window.onresize=function(){
    remSize()
}