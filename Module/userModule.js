var mysql = require('mysql');
var moment = require('moment')

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'albx',
    dateStrings:true
});

connection.connect();

// 获取文章列表
module.exports = {
    getlist(params, callback) {
        // 1.创建sql语句
    var sql = `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
        connection.query(sql, (err, results) => {
            if (err) {
                callback(err)
            } else {
           
                callback(null, results)
                console.log(results);
            }
        })
    }
}