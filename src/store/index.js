import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		// list: [{
		// 	task: "stl",
		// 	complete: false
		// }, {
		// 	task: "arn",
		// 	complete: true
		// }, {
		// 	task: "cnbz",
		// 	complete: true
		// }],
		list:[]		
	},
	//第一个参数是state ,第二个参数是修改的值
	mutations: {
		//添加
		addTodo(state, payload) {
			state.list.push(payload)
		},
		//删除任务
		//splice (下标，个数)
		delTodo(state, payload) {
			console.log(payload)
			state.list.splice(payload, 1)
		},
		//删除已完成
		clearTodo(state, payload) {
			//传入过滤后的数组
			state.list = payload
		},
		initTodo(state, payload) {
			//初始化数组
			state.list = payload
		}
	},
	actions: {},
	modules: {}
})
