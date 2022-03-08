<template>
	<div>
		<span>已完成{{isComplete}}/全部{{list.length}}
		
		</span>
		<div v-if="isComplete > 0 ">
		<button @click="clear">清除已完成</button>
		</div>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref,
		computed
	} from 'vue'

	import {
		useStore
	} from 'vuex'

	export default defineComponent({
		name: "NavFooter",
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		emits:['clear'],
		setup(props,ctx) {
			let store = useStore()
			let isComplete = computed(() => {
				//filter 数据过滤器
				let arr = props.list.filter(item =>{
					return item.complete
				})
				return arr.length
			})
			let clear = () =>{
				let arr = props.list.filter(item =>{
					return item.complete === false
				})
				ctx.emit('clear',arr)
				console.log(arr)
			}
			return {
				isComplete,
				clear
			}
		}
	})
</script>

<style scoped>
</style>
