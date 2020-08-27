<template>
	<div class="row" />
</template>

<script>

export default {
	name: 'Configuration',
	data() {
		return {
			config: {
				ConfigKey1: 0,
				ConfigKey2: '',
				ConfigKey3: '',
				ConfigKey4: null
			}
		};
	},
	async created() {
		const config = await this.$gestios.config.list(Object.keys(this.config));

		if (config.ok) {
			Object.keys(this.config).forEach((key) => {
				this.config[key] = config.data[key];
			});
		}
	},
	methods: {
		async save(section) {
			if (this.validated(section)) {
				this.$nprogress.start();

				const result = await this.$gestios.config.edit(this.config);
				if (result.ok) this.$message.success('Configuracion guardada');

				this.$nprogress.done();
			}
		}
	}
};
</script>

<style lang="scss">

</style>
