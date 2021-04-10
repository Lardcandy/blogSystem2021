var mysql = require('mysql')

// 连接数据库的配置
var sqlConfig = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'chan9527',
    database:'blog_system2020'    
}

// 使用连接池连接mysql
var pool = mysql.createPool(sqlConfig)

module.exports = pool