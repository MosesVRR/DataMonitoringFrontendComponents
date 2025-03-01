module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options;
      });

    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        transpileOnly: true,
        appendTsSuffixTo: [/\.vue$/]
      })
      .end();

    config.resolve.extensions
      .add('.ts')
      .add('.tsx')
      .add('.js')
      .add('.vue')
      .add('.json');
  }
};
