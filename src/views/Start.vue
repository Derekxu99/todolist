<template>
	<div>
		<button @click="start">开始任务</button>
	</div>
</template>

<script>
	import {defineComponent,ref} from 'vue'
	import {useRouter} from 'vue-router'
	
	export default defineComponent({
		name:"Start",
		setup(){
			let router = useRouter()
			let start = () =>{
				console.log("start")
				router.push({
					path:"/home"
				})				
			}
			return{
				start
			}
		}
	})
	
	</script>

<style>
</style>
