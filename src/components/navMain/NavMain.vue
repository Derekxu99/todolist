<template>
	<div>
		<div v-if="list.length > 0 ">
			<div v-for="(item,index) in list" :key="index">
				{{item.task}}
				<input type="checkbox" v-model="item.complete" />
				<button @click="del(index)">删除</button>
			</div>
		</div>
		<div v-else>
			<span>暂无任务</span>
		</div>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref,
		onMounted,
		onUnmounted
	} from 'vue'

	import {
		useStore
	} from 'vuex'

	export default defineComponent({
		name: "NavMain",
		//props 传入的数据可以直接使用，不再需要定义和return
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		setup(props, ctx) {
			let store = useStore()

			let del = (val) => {
				ctx.emit('del', val)
			}
			
			return {
				del
			}
		}
		
	})
</script>

<style scoped>
</style>
