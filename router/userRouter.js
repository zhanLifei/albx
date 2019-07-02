// 设置express模块
const express = require('express')

// 引入控制器模板
const userControllers = require('../controllers/userControllers')


// 设置路由实例
const router = express.Router()

// 建立路由路柄

    // 前台页面 
router.get('/', (req, res) => {
    userControllers.showindex(req, res)
})
    .get('/list', (req, res) => {
        userControllers.showlist(req, res)
    })
    .get('/detail', (req, res) => {
        userControllers.showdetail(req, res)
        res.render('detail')
    })



    /******读取后台页面统一admin后缀********/

    .get('/admin', (req, res) => {
        userControllers.showadminindex(req, res)
    })
    .get('/admin/categories', (req, res) => {
        userControllers.showadmincategories(req, res)
    })
    .get('/admin/comments', (req, res) => {
        userControllers.showadmincomments(req, res)
    })
    .get('/admin/login', (req, res) => {
        userControllers.showadminlogin(req, res)
    })
    .get('/admin/nav-menus', (req, res) => {
        userControllers.showadminmenus(req, res)
    })
    .get('/admin/passwordreset', (req, res) => {
        userControllers.showadminpasswordReset(req, res)
    })
    .get('/admin/post-add', (req, res) => {
        userControllers.showadminpostDdd(req, res)
    })
    .get('/admin/posts', (req, res) => {
        userControllers.showadminposts(req, res)
    })
    .get('/admin/profile', (req, res) => {
        userControllers.showadminprofile(req, res)
    })
    .get('/admin/settings', (req, res) => {
        userControllers.showadminsettings(req, res)
    })
    .get('/admin/slides', (req, res) => {
        userControllers.showadminslides(req, res)
    })
    .get('/admin/users', (req, res) => {
        userControllers.showadminusers(req, res)
    })


    // 获取文章列表
    .get('/getlist',(req,res)=>{
        userControllers.getlist(req,res)
    })
    



module.exports = router