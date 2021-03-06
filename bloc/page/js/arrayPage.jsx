import React, { Component, ReactDOM } from "react";
import Prism from 'prismjs';

export default class ArrayPage extends Component {
    render() {
        return (<div>
            <div className="content">
                <div className="title">1.push,pop,shift,unshift</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var arr = ["a","b","c"]
console.log(arr.push("d")); //4  返回push以后数组的长度
console.log(arr) //["a","b","c","d"]  会改变原数组

var arr = ["a","b","c"]
console.log(arr.pop()); //c  返回数组的最后一个值
console.log(arr); //[a,b]  会改变原数组

var arr = ["a","b","c"]
console.log(arr.unshift("t")); //4  返回unshift以后数组的长度
console.log(arr); //["t", "a", "b", "c"]  会改变原数组

var a = ["a","b","c"]
console.log(arr.shift()); //a  返回数组的第一项
console.log(arr); //["b", "c"]  会改变原数组`}   
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>2.sort,reverse,concat</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var a = ["a","d","b","i","h","c"];
console.log(a.sort()); //["a", "b", "c", "d", "h", "i"]  //数组排序
console.log(a); //["a", "b", "c", "d", "h", "i"]    //会改变原数组

var a = ["a","d","b","i","h","c"];
console.log(a.reverse()); //["c", "h", "i", "b", "d", "a"]  //数组倒叙排列
console.log(a); //["c", "h", "i", "b", "d", "a"]    会改变原数组

var a = ["a","b"];
var b = ["c","d"];
console.log(a.concat(b));   //["a", "b", "c", "d"]  返回两个数组拼接后的结果
console.log(a);    //["a", "b"] 原数组没有改变
console.log(b);    //["c", "d"] 原数组没有改变`}   
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>2.join,slice,splice</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`var a = ["a","b"];
console.log(a.join("-"))    //a-b 把数组按照自定符号拼接字符串
console.log(a)  //["a","b"] 不会改变原数组


slice用法:array.slice(start,end) //start:开始索引,end:结束索引

var a = ["a", "b","c","d","e"];
console.log(a.slice());    //["a", "b", "c", "d", "e"]  不给参数默认返回全部
console.log(a.slice(1,3));    //["b", "c"]  返回索引从1到3的值，不包括最后一个索引(3)
console.log(a.slice(-1));    //["e"] 负数情况下从数组的末尾开始取值
console.log(a);  //["a", "b", "c", "d", "e"]    //不改变原数组


splice用法:array.splice(index,num,items) //index:开始索引; num:删除的个数; items:要插入的数据

var a = ["a", "b","c","d","e"];
console.log(a.splice(1,3))    //["b", "c", "d"]  返回被删除的数据
console.log(a.splice(1,1,"k","g"))  //["e"]    有插入的情况下，返回的还是删除的数据，num为0的情况下，返回空数组
console.log(a)  //["a", "k", "g"] 原数组发生改变`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>3.indexOf,lastIndexOf</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`用法:array.indexOf(str),array.lastIndexOf(str);<br/>
若str在数组中存在，indexOf则返回第一个匹配的索引，lastIndexOf则返回最后一个匹配的索引<br/>
var a = ["a","b","c","d","e"];<br/>
console.log(a.indexOf("b"));   // 返回1<br/>
console.log(a.indexOf("h"));   // 返回-1<br/>
console.log(a.lastIndexOf("b"));  // 返回1<br/>
console.log(a.lastIndexOf("h"));  // 返回-1`}
                        
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>4.forEach</div>
                <pre className="hljs"> 
                    <code className="lang-css">
                        {`用法:array.forEach((value,index)=>{/**处理数据*/})`}<br/>
                        var a = ["a","b","c"];<br/>
{`a.forEach((value,index)=>{
    console.log("value:"+value,"index:"+index);
});
结果:
value:a index:0,
value:b index:1,
value:c index:2
`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>5.map</div>
                <pre className="hljs"> 
                    <code className="lang-css">
                        {`用法:array.map((value,index)=>{/**处理数据*/});返回一个新的数组`}<br/>
{`var a = ["a","b","c"];
var b = a.map((value,index)=>{
    return value+"..."
});
console.log(b) //["a...", "b...", "c..."] 数组的每一项都加了...
console.log(a)  //["a", "b", "c"]   原数组没有改变`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>6.filter</div>
                <pre className="hljs"> 
                    <code className="lang-css">
                        {`用法:array.filter((value,index)=>{/**处理数据*/});返回一个满足条件的新数组`}<br/>
{`var a = [1,2,3,4,5,6,7,8,9];
var b = a.filter((value)=>{
    return value>3&&value%3==0  //筛选条件：大于3并且是3的倍数
})
console.log(b); //[6, 9]
console.log(a); //[1, 2, 3, 4, 5, 6, 7, 8, 9]   原数组没有改变`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>7.every,some</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`用法:array.every((value,index)=>{/**处理数据*/});循环数组，数组中所有项都满足条件则返回true,否则返回false
array.some((value,index)=>{/**处理数据*/});循环数组，数组中只要有一项满足条件则返回true,否则返回false

every示例:
var a = [1,2,3,4,5,6,7,8,9];
var b = a.every((value)=>{
    return value>=1
});
var c = a.every((value)=>{
    return value>5
});
console.log(b)  //true 数组中所有项都大于等于1，所以返回true
console.log(c)  //false  数组中存在1，2，3，4比5小，所以返回false
console.log(a)  //[1, 2, 3, 4, 5, 6, 7, 8, 9]  原数组没有改变

some示例:
var a = [1,2,3,4,5,6,7,8,9];
var b = a.some((value)=>{
    return value>=5
});
var c = a.some((value)=>{
    return value>10
});
console.log(b)  //true 数组中存在大于5的输，所以返回true
console.log(c)  //false  数组中不存在比10大的数，所以返回false
console.log(a)  //[1, 2, 3, 4, 5, 6, 7, 8, 9]  原数组没有改变`}
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>8.isArray:判断是否是数组类型</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`console.log(Array.isArray([]));  //true
console.log(Array.isArray({}));  //false
console.log(Array.isArray(""));  //false`} 
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>9.以下是es6数组方法:includes</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`用法:Array.includes(item); //数组中存在则返回true,不存在则返回false
var arr = ["a","b","c","d"];
console.log(arr.includes("a")); //true
console.log(arr.includes("f")); //false`} 
                    </code>
                </pre>
                <div className="title" style={{ marginTop: "20px" }}>10.find,findIndex</div>
                <pre className="hljs"> 
                    <code className="lang-css">
{`用法:Array.find((value)=>{...}); //返回满足条件的第一个值
用法:Array.findIndex((value)=>{...}); //返回满足条件的第一个值的索引

var arr = [1,2,3,4,5,6];
var a = arr.find(function(value){
    return value<4
})
console.log(a);  //1  数组中小于4的第一个值是1

var b = arr.findIndex(function(value){
    return value<4
})
console.log(b);  //0  数组中小于4的第一个值是1，索引是0`}
                    </code>
                </pre>
            </div>
        </div>)
    }
    componentDidMount() {
        //hljs.initHighlighting();
        //Prism.highlight(); 
        Prism.highlightAll();
    }
}