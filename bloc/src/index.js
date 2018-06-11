import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter,IndexRoute,Switch,Redirect } from 'react-router-dom';
import "../style/common.less";

import IndexHead from "../page/indexHead";  //首页头部
import Index from "../page/index";          //首页
import LeaveWord from "../page/leaveWord";  //留言板页面
import ListCommon from "../page/listcommon";  //js，css页面的模板页面
import Interview from "../page/interview";  //面试专用页面
import CommonMethod from "../page/commonMethod";
import Manage from "../page/login/manage";  //后台页面
import LoginIn from "../page/login/login";  //后台页面


/**
 * 这里开始引入css页面
*/
import CssBase from "../page/css/cssbase";
import Css3 from "../page/css/css3";
import CssShow from "../page/css/show";
import Layout from "../page/css/layout";



/**
 * 这里开始引入js页面
*/
import Closure from "../page/js/closure";
import Prototype from "../page/js/prototype";
import CallApply from "../page/js/callApply";





class IndexPage extends Component{
	render(){
		return (<div>
			{/* 一级路由 */}
			<Route path="/home" render={()=>{
				return (<IndexHead>
					{/* 二级路由 */}
					<Route path="/home/index" exact component={Index}></Route>
					<Route path="/home/leaveWord" exact component={LeaveWord}></Route>
					<Route path="/home/interview" exact component={Interview}></Route>
					<Route path="/home/commonMethod" exact component={CommonMethod}></Route>
				</IndexHead>)
			}}></Route>
			{/* css页面一级路由 */}
			<Switch>
				<Redirect from="/csslist" exact to="/csslist/base" />
				<Route path="/csslist"  render={()=>{
					return <ListCommon menu={this.state.cssmenu}>
						{/* 二级路由 */}
						<Route path="/csslist/base" component = {CssBase}></Route>
						<Route path="/csslist/css3" component = {Css3}></Route>
						<Route path="/csslist/layout" component = {Layout}></Route>
						<Route path="/csslist/show" component = {CssShow}></Route>
					</ListCommon>
				}}></Route>
			</Switch>
			{/* js页面一级路由 */}
			<Switch>
				<Redirect from="/jslist" exact to="/jslist/closure" />
				<Route path="/jslist"  render={()=>{
					return <ListCommon menu={this.state.jsmenu}>
						{/* 二级路由 */}
						<Route path="/jslist/closure" component={Closure}></Route>
						<Route path="/jslist/prototype" component={Prototype}></Route>
						<Route path="/jslist/callApply"  component={CallApply}></Route>
					</ListCommon>
				}}></Route>
			</Switch>
			{/* 后套管理页面 */}
			<Route path="/manage" exact component={Manage}></Route>
			<Route path="/login" exact component={LoginIn}></Route>
		</div>)
	}
	constructor(props){
		super(props);
		this.state = {
			cssmenu:[{
				name:"css小技巧",
				link:"/csslist/base"
			},{
				name:"css3分享",
				link:"/csslist/css3"
			},{
				name:"css布局",
				link:"/csslist/layout"
			},{
				name:"css小展示",
				link:"/csslist/show"
			}],
			jsmenu:[{
				name:"js闭包",
				link:"/jslist/closure"
			},{
				name:"原型，构造函数",
				link:"/jslist/prototype"
			},{
				name:"call,apply",
				link:"/jslist/callApply"
			}],
		}
	}
}

//渲染根节点
reactDOM.render(
	<HashRouter>
		<IndexPage/>
	</HashRouter>,
	document.getElementById('contain')
);


