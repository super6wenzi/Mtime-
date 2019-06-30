const mysql = require("mysql");
const express = require("express");
// 引入express-session组件
const session=require("express-session");
// 2.1创建跨域模块
const cors =require("cors");
// 2.2配置允许列表

//3:创建连接池
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"mtime"
});
//4:创建express 对象
var server = express();
// 4.1配置session
server.use(session({
  secret:"128位字符串",//配置密钥
  resave:false,   //每次请求是否更新数据
  saveUninitialized:true  //保存初始化数据
}))

// 4.1配置允许列表
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))
//5:绑定监听端口 3000
server.listen(3000);
server.use(express.static("public"));
//6:处理用户登录请求
  //login GET
server.get("/login",(req,res)=>{
  //6.1:获取参数
  var name = req.query.name;
  var pwd = req.query.pwd;
  //6.2:创sql
  var sql = "SELECT id FROM xz_login";
  sql+=" WHERE name = ? AND pwd=md5(?)";
  //6.3:执行sql
  pool.query(sql,[name,pwd],(err,result)=>{
     if(err)throw err;
     //6.4:获取返回结果
     //6.5:判断结果返回 登录成功或者失败
     if(result.length==0){
       res.send({code:-1,msg:"用户名或密码有误"});
     }else{
       //将用户登录成功凭据保存在session对象
      //  -获取uid
      var uid=result[0].id;
      //  -保存session对象中
      console.log(uid);
      req.session.uid=uid;
       res.send({code:1,msg:"登录成功"})
     }
  });
});  

 
// 首页轮播图
// 1.将轮播保存服务器端
  //  public/img/banner1.png
// 2.接收客户端发送请求/imglist
server.get("/imglist",(req,res)=>{
    var rows=[
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ];
    res.send({code:1,data:rows})
})
// 列表分页显示
server.get("/shoplist",(req,res)=>{
  // 1获取参数
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!ps){
    ps=7;
  }
   // 2sql
   var sql=" SELECT id,dname,img_url,";
       sql+="ditails,point";
       sql+=" FROM mtime_shoplist"
       sql+=" LIMIT ?,?";
   var offset=(pno-1)*ps;
   ps=parseInt(ps);
   pool.query(sql,[offset,ps],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result}); 
   })
})

