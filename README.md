# vuepress-plugin-code-preview

> A vuepress plugin for codesandbox embed code preview

[![npm](https://img.shields.io/npm/v/vuepress-plugin-code-preview.svg)](https://www.npmjs.com/package/vuepress-plugin-code-preview)
[![GitHub stars](https://img.shields.io/github/stars/vxhly/vuepress-plugin-code-preview)](https://github.com/vxhly/vuepress-plugin-code-preview/stargazers)
[![GitHub license](https://img.shields.io/github/license/vxhly/vuepress-plugin-code-preview)](https://github.com/vxhly/vuepress-plugin-code-preview/blob/master/LICENSE)

## Install

``` bash
# install dependencies
npm i vuepress-plugin-code-preview -D

# or use yarn
yarn add vuepress-plugin-code-preview -D
```

## Usage

Write vuepress config

``` javascript
module.exports = {
  plugins: ['code-preview']
}
```

Write article

``` markdown
<code-preview embed-url="<url>" />
```

## Options

### embedUrl

Copy codesandbox embed url to it.

- type: *String*
- required: *true*
- default: *null*

### embedBox

Code embedding platform.

- type: *String*
- required: *fasle*
- default: *codesandbox*

## License

[MIT](https://github.com/vxhly/vuepress-plugin-code-preview/blob/master/LICENSE).