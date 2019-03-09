<template>
	<div class="[ container ]">
		<div class="[ row ]">

			<div><br/>
				<div class="[ col-sm-4 ]"><img :src="jobImg"/><br><br><br></div>
				<b>Date Created: </b>{{dateCreated}}<br/>
				<b>Title: </b>{{title}}<br/>
				<b>Company Name: </b>{{companyName}}<br/>
				<b>Location: </b>{{location}}<br/>
				<b>Type: </b>{{type}}<br/>
				<b>Description: </b> <span v-html="description"></span><br/>
				<b>How to apply: </b> <span v-html="howToApply"></span><br/>
				<b>Company Website: </b><a :href="website" target="_blank">Click Here</a><br/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'JobListingComponent',
		props: ['jobImg', 'dateCreated', 'title', 'companyName', 'location', 'type', 'description', 'howToApply', 'website'],
	}
</script>

<style scoped>
	img {
		max-width: 400px;
		padding-top: 20px;
	}
</style>
