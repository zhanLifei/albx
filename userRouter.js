// 设置express模块
const express = require('express')

// 引入module模板
const userModule = require('./userModule')


// 设置路由实例
const router = express.Router()

// 建立路由路柄

    // 前台页面 
router.get('/', (req, res) => {
    userModule.showindex(req, res)
})
    .get('/list', (req, res) => {
        userModule.showlist(req, res)
    })
    .get('/detail', (req, res) => {
        userModule.showdetail(req, res)
        res.render('detail')
    })



    /******读取后台页面统一admin后缀********/

    .get('/admin', (req, res) => {
        userModule.showadminindex(req, res)
    })
    .get('/admin/categories', (req, res) => {
        userModule.showadmincategories(req, res)
    })
    .get('/admin/comments', (req, res) => {
        userModule.showadmincomments(req, res)
    })
    .get('/admin/login', (req, res) => {
        userModule.showadminlogin(req, res)
    })
    .get('/admin/nav-menus', (req, res) => {
        userModule.showadminmenus(req, res)
    })
    .get('/admin/passwordreset', (req, res) => {
        userModule.showadminpasswordReset(req, res)
    })
    .get('/admin/post-add', (req, res) => {
        userModule.showadminpostDdd(req, res)
    })
    .get('/admin/posts', (req, res) => {
        userModule.showadminposts(req, res)
    })
    .get('/admin/profile', (req, res) => {
        userModule.showadminprofile(req, res)
    })
    .get('/admin/settings', (req, res) => {
        userModule.showadminsettings(req, res)
    })
    .get('/admin/slides', (req, res) => {
        userModule.showadminslides(req, res)
    })
    .get('/admin/users', (req, res) => {
        userModule.showadminusers(req, res)
    })
    



module.exports = router