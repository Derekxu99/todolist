<template>
	<div>
		<input placeholder="请输入任务" @keydown.enter="enter" v-model="value" />
	</div>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'
	
	

	export default defineComponent({
		name: "NavHeader",
		props:{
			
		},
		emits:["add"],
		setup(props,ctx) {
			let value = ref("")
			let enter = () => {
				console.log("enter")
				ctx.emit('add',value.value)
			}
			return {
				enter,
				value
			}
		}
	})
</script>

<style scoped>
</style>
