<template>
	<div class="row">
		<div class="col-12">
			<app-list
				ref="app"
				permalink="appname"
				view="viewname"
				:fields="fields"
			>
				<template
					slot="turn"
					slot-scope="turn"
				>
					<a-tag
						v-if="turn == 0"
						:color="$colors['blue-light']"
					>
						<fa-icon :icon="['far', 'sunrise']" /> Turn 1
					</a-tag>
					<a-tag
						v-else
						:color="$colors.orange"
					>
						<fa-icon :icon="['far', 'sun']" /> Turn 2
					</a-tag>
				</template>

				<template slot="head-left">
					<!-- Topbar table left section -->
				</template>

				<template slot="head-right">
					<!-- Topbar table right section -->
				</template>
			</app-list>
		</div>
	</div>
</template>

<script>

export default {
	name: 'ExampleComponent',
	data() {
		return {
			fields: [
				{
					title: 'User',
					index: '_EntityCreateUser',
					slot: '_user'
				},
				{
					title: 'Date',
					index: 'date',
					slot: '_date',
					sorter: true
				},
				{
					title: 'Turno',
					index: 'turn',
					sorter: true,
					slot: 'turn',
					filters: [
						{
							text: 'Mañana',
							value: '0'
						},
						{
							text: 'Tarde',
							value: '1'
						},
						{
							text: 'Noche',
							value: '2'
						}
					]
				},
				{
					title: 'Actions',
					slot: '_actions',
				}
			]
		};
	},
	created() {
		this.$hub.$on('eventButton', () => {
			// Topbar button action
		});
	},
	beforeDestroy() {
		this.$hub.$off('eventButton');
	},
};
</script>

<style lang="scss"></style>
