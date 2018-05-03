//引入mockjs
import Mock from 'mockjs'
//创建Random对象
const Random = Mock.Random;
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
    useravatar: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    username: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    userphone:'1823223423',//生成邮箱
    address:[],//地址空数组
    date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
})
Mock.mock('/user/setname','post',{
    info:'success'
})
Mock.mock('/user/address/','post',{
    info:'success'
})