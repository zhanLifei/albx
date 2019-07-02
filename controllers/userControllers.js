const express = require('express')

var userModule=require('../Module/userModule.js')


module.exports = {
    // 前台页面
    showindex(req, res) {
        res.render('index')
    },
    showlist(req, res) {
        res.render('list')
    },
    showdetail(req, res) {
        res.render('detail')
    },



    /*************后台页面****************/

    showadminindex(req, res) {
        res.render('admin/index.ejs')
    },
    showadmincategories(req, res) {
        res.render('admin/categories.ejs')
    },
    showadmincomments(req, res) {
        res.render('admin/comments.ejs')
    },
    showadminlogin(req, res){
        res.render('admin/login.ejs')
    },
    showadminmenus(req, res){
        res.render('admin/nav-menus.ejs')
    },
    showadminpasswordReset(req, res){
        res.render('admin/passwordreset.ejs')
    },
    showadminpostDdd(req, res){
        res.render('admin/post-add.ejs')
    },
    showadminposts(req, res){
        res.render('admin/posts.ejs')
    },
    showadminprofile(req, res){
        res.render('admin/profile.ejs')
    },
    showadminsettings(req, res){
        res.render('admin/settings.ejs')
    },
    showadminslides(req, res){
        res.render('admin/slides.ejs')
    },
    showadminusers(req, res){
        res.render('admin/users.ejs')
    },

    // 获取文章列表
    getlist(req,res){

        var obj= req.query

        userModule.getlist(obj,(err,data)=>{
            if(err) res.json({
                "code":201,
                "msg":"获取失败"
            })
            res.json({
                "code":200,
                "msg":"获取成功",
                "data":data
            })
        })
    },



}