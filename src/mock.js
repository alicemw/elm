//引入mockjs
import Mock from 'mockjs'
//创建Random对象
const Random = Mock.Random;
//配延时更逼真，全局配置应用所有请求，比较坑
Mock.setup({
    timeout:'200-1000'
})
//mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
Mock.mock('/user','get',{
    userid:/^[1-9]{0,1}[0-9]{2}$/,//用户id
    useravatar: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    username: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    userphone:/^[1]{1}[0-9]{10}$/,//生成电话
    address:[],//地址空数组
    realname:Random.cname(),//真实姓名
    balance:/^[1-9]{1}[0-9]{1}$/,//余额
    benefit:/^[1-9]{0,1}[0-9]{1}$/,//优惠
    jifen:/^[1-9]{0,1}[0-9]{0,3}$/,//积分
    date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
})
Mock.mock('/user/setname','post',{
    info:'success'
})
Mock.mock('/user/address/','post',{
    info:'success'
})
Mock.mock('/user/forget/vertify','get',function(){//这里是函数每次回重新生成数据， 这里是数据则不会重新生成数据
    const codenum = Mock.mock({'regexp': /\w{4}/}).regexp;
    return Mock.mock({
        vertifyimg:Random.dataImage('70x30',codenum),
        codenum:codenum
    })
})
Mock.mock('/user/hongbao','get',{
    'hongbaolist|3-5':[
        {
            hong_num:/^[1-9]{1}$/, //红包金额
            expire:'2018-05-10',//过期日期
            need_num:/^[1-9]{1}[0]{1}$/, //满多少可用
            hong_type:['蔬菜','水果','日用品'] //限制类型
        }
    ]
})
Mock.mock('/benefit','post',{
    info:'success'
})
Mock.mock('/benefit/history?userid=10','get',{
    'hongbaolist|8-10':[
        {
            hong_num:/^[1-9]{1}$/, //红包金额
            expire:'2018-05-05',//过期日期
            need_num:/^[1-9]{1}[0]{1}$/, //满多少可用
            hong_type:['蔬菜','水果','日用品'] //限制类型
        }
    ] 
})
var orderlist = ()=>{
    let arr =[]
    for(let i=0;i<10;++i){
        arr.push(
            Mock.mock({
                'id':i,
                'pay_num|1-100':1,
                'store_img|1':Random.dataImage('50x50','abcd'),
                'store_name|1':Random.cname()+'店'
            })
        )
    }
    return arr
}
Mock.mock('/order?userid=10','get',orderlist)
Mock.mock('/excard','post',{
    info:'success'
})
Mock.mock('/card/cardcord?userid=10&currentPage=1','get',{
    'paylist|10':[
        {
            pay_num:/^[1-9]{1}[0]{1}$/, //支付金额
            date:'2018-05-10',//购买日期
            viptype:'季卡'//卡类型
        }
    ]
})