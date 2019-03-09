<template>
	<div class="[ row ]">
		<div v-for="job in jobs" class="[ col-sm-12 ]">
			<JobListingComponent v-bind:jobImg="job.company_logo"
v-bind:dateCreated="job.created_at"
v-bind:title="job.title"
v-bind:companyName="job.company"
v-bind:location="job.location"
v-bind:type="job.type"
v-bind:description="job.description"
v-bind:howToApply="job.how_to_apply"
v-bind:website="job.company_url"
			></JobListingComponent>
		</div>
	</div>
</template>

<script>
	import JobListingComponent from './components/JobListingComponent.vue'
	export default {
		name: "JobListing",
		components: {
			JobListingComponent
		},
		data() {
			return {
				jobs: []
			}
		},
		beforeMount: function () {
			const app = this;
			if (!sessionStorage.getItem('sessionID')) {
				app.$router.push({name: 'Home'});
			}

			const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
			const url = 'https://jobs.github.com/positions.json';

			fetch(conversionUrl + url)
				.then(function (response) {
					return response.json();
				})
				.then(function (result) {
					app.jobs = result;
				})
		}
	}
</script>
