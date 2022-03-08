<template>
	<div class="home">
		<NavHeader @add='add' />
		<NavMain @del='del' :list='list' />
		<NavFooter @clear='clear' :list='list' />
	</div>
</template>

<script>
	import NavHeader from '@/components/navHeader/NavHeader.vue'
	import NavMain from '@/components/navMain/NavMain.vue'
	import NavFooter from '@/components/navFooter/NavFooter.vue'

	import {
		defineComponent,
		ref,
		computed,
		onMounted,
		onUnmounted
	} from 'vue'
	
	import {
		useStore
	} from 'vuex'

	export default defineComponent({
		name: 'Home',
		setup(props, ctx) {

			let store = useStore()
			let list = computed(() => {
				return store.state.list
			})

			let value = ref("")
			
			let add = (val) => {
				let flag = true
				if (val === "") {
					flag = false
					alert("任务为空")
				}
				list.value.map((item) => {
					if (item.task === val) {
						// 出现重复
						flag = false
						alert("任务重复")
					}
				})

				if (flag) {
					//参数来源于store/index.js
					store.commit('addTodo', {
						task: val,
						complete: false
					})
				}
			}
			let del = (val) => {
				store.commit('delTodo', val)
			}
			let clear = (val) => {
				console.log(val)
				store.commit('clearTodo', val)
			}

			onMounted(() => {
				console.log("onmounted")
				let iniArr = []
				if (window.localStorage.getItem("task") != null) {
					iniArr = JSON.parse(window.localStorage.getItem("task"))
				}
				store.commit('initTodo', iniArr)
			})
			onUnmounted(() => {
				console.log("onUnmounted")
				window.localStorage.setItem("task", JSON.stringify(list.value))
			})
			return {
				list,
				value,
				add,
				del,
				clear,
			}
		},
		components: {
			NavHeader,
			NavMain,
			NavFooter
		}
	})
</script>
