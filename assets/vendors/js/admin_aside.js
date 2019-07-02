$(function(){
    // 获取url的路径
    var herf = location.href

    // 声明一个变量查看是否有?的
    var index = herf.indexOf('?')
    
    // 定义一个变量存储路由名
    var routername=''

    // 获取斜杆后的路由名  users
    if(index==-1){
        // 如果index为-1时说明没有?,获取/之后的内容路由
        routername=herf.substring(herf.lastIndexOf('/')+1)
    }else{
        // 有问号的话获取/之后和?之前的路由名
        routername=herf.substring(herf.lastIndexOf('/')+1 , index )
    }
    console.log(routername);

    // 判断路由和id属性是否相同,如果相同则设置相对应的属性
    if(routername=='posts' || routername=='post-add' || routername=='categories'){
        $('#menu-posts').addClass('in')
        $('#menu-posts').attr('aria-expanded','true')

    }

    // 导航菜单也需要设置一下
    if(routername=='nav-menus' || routername=='slides' || routername=='settings'){
        $('#menu-settings').addClass('in')
        $('#menu-settings').attr('aria-expanded','true')
    }

    // 添加active样式：排它法
    $('li').removeClass('active')
    $('#'+routername).addClass('active')

})