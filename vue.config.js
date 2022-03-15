const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
module.exports = {
	lintOnSave: true,
	publicPath: './', // 基本路径
	outputDir: 'meta-monster-dist', // 输出文件目录
	css: {
		requireModuleExtension: true,
		// extract: true,
		sourceMap: process.env.NODE_ENV == 'development' ? true : false,
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', path.resolve(__dirname, 'src'))
			.set('components', '@/components')
			.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
		config.plugin('AutoImport').use(
			AutoImport({
				imports: ['vue'],
				resolvers: [
					ElementPlusResolver({
						importStyle: 'css',
						exclude: new RegExp(/^(?!.*loading-directive).*$/)
					})
				],
				dts: 'auto-imports.d.ts'
			})
		)
		config.plugin('Components').use(
			Components({
				resolvers: [ElementPlusResolver({ importStyle: 'css' })],
				dts: 'components.d.ts'
			})
		)
		return config
	},
}