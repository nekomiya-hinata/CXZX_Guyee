(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_js_validata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/js/validata */ \"./src/assets/js/validata.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      captchaPath: '',\n      ruleForm: {\n        username: '',\n        password: '',\n        uuid: '',\n        captcha: ''\n      },\n      rules: {\n        username: [{\n          required: true,\n          message: '请输入用户名',\n          trigger: 'blur'\n        }],\n        password: [{\n          required: true,\n          message: '请输入密码',\n          trigger: 'blur'\n        } // { validator: validata.pwdValidate,  trigger: 'blur'}\n        ],\n        captcha: [{\n          required: true,\n          message: '请输入验证码',\n          trigger: 'blur'\n        }]\n      }\n    };\n  },\n  methods: {\n    getUUID: function getUUID() {\n      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        return (c === 'x' ? Math.random() * 16 | 0 : 'r&0x3' | '0x8').toString(16);\n      });\n    },\n    // 获取验证码\n    getCaptcha: function getCaptcha() {\n      this.ruleForm.uuid = this.getUUID(); // this.captchaPath = `${this.axios.defaults.baseURL}/captcha?uuid=${this.ruleForm.uuid}`\n\n      this.captchaPath = \"http://10.42.220.80:23000/captcha?uuid=\".concat(this.ruleForm.uuid);\n    },\n    login: function login() {\n      var _this = this;\n\n      this.$refs['ruleForm'].validate(function (valid) {\n        if (!valid) {\n          return false;\n        }\n\n        _this.axios.post('/login', _this.ruleForm).then(function (_ref) {\n          var res = _ref.data;\n\n          if (res.code !== 0) {\n            _this.getCaptcha();\n\n            return _this.Message.error(res.msg);\n          } else {\n            // this.$store.state.settings.userInfo = res.data\n            _this.$store.commit('USERINFO', res.data);\n\n            sessionStorage.setItem('token', res.data.token); // Cookies.set('token', res.data.token)\n\n            _this.$router.push('/');\n          }\n        }).catch(function () {});\n      });\n    }\n  },\n  created: function created() {\n    this.getCaptcha();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/login/index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b09eeea-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4b09eeea-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"main-content\" }, [\n    _vm._m(0),\n    _c(\n      \"div\",\n      { staticClass: \"login-form-content\" },\n      [\n        _c(\"div\", { staticClass: \"login-form-content-head\" }, [_vm._v(\"登录\")]),\n        _c(\n          \"el-form\",\n          {\n            ref: \"ruleForm\",\n            staticClass: \"demo-ruleForm\",\n            attrs: {\n              model: _vm.ruleForm,\n              rules: _vm.rules,\n              \"label-width\": \"80px\"\n            }\n          },\n          [\n            _c(\n              \"el-form-item\",\n              { attrs: { label: \"账号\", prop: \"username\" } },\n              [\n                _c(\"el-input\", {\n                  attrs: { placeholder: \"请输入登录账号\" },\n                  model: {\n                    value: _vm.ruleForm.username,\n                    callback: function($$v) {\n                      _vm.$set(_vm.ruleForm, \"username\", $$v)\n                    },\n                    expression: \"ruleForm.username\"\n                  }\n                })\n              ],\n              1\n            ),\n            _c(\n              \"el-form-item\",\n              { attrs: { label: \"密码\", prop: \"password\" } },\n              [\n                _c(\"el-input\", {\n                  attrs: { type: \"password\", placeholder: \"请输入密码\" },\n                  model: {\n                    value: _vm.ruleForm.password,\n                    callback: function($$v) {\n                      _vm.$set(_vm.ruleForm, \"password\", $$v)\n                    },\n                    expression: \"ruleForm.password\"\n                  }\n                })\n              ],\n              1\n            ),\n            _c(\n              \"el-form-item\",\n              {\n                staticClass: \"captcha-item\",\n                attrs: { label: \"验证码\", prop: \"captcha\" }\n              },\n              [\n                _c(\"el-input\", {\n                  attrs: { placeholder: \"验证码\" },\n                  nativeOn: {\n                    keyup: function($event) {\n                      if (\n                        !$event.type.indexOf(\"key\") &&\n                        _vm._k($event.keyCode, \"enter\", 13, $event.key, \"Enter\")\n                      ) {\n                        return null\n                      }\n                      return _vm.login($event)\n                    }\n                  },\n                  model: {\n                    value: _vm.ruleForm.captcha,\n                    callback: function($$v) {\n                      _vm.$set(_vm.ruleForm, \"captcha\", $$v)\n                    },\n                    expression: \"ruleForm.captcha\"\n                  }\n                }),\n                _c(\"div\", { staticClass: \"code-content\" }, [\n                  _c(\"img\", {\n                    attrs: { src: _vm.captchaPath },\n                    on: {\n                      click: function($event) {\n                        return _vm.getCaptcha()\n                      }\n                    }\n                  })\n                ])\n              ],\n              1\n            ),\n            _c(\"div\", { staticClass: \"login-btn\", on: { click: _vm.login } }, [\n              _vm._v(\"登 录\")\n            ])\n          ],\n          1\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"logo-content\" }, [\n      _c(\"img\", {\n        attrs: { src: __webpack_require__(/*! ../../assets/img/logo.png */ \"./src/assets/img/logo.png\"), alt: \"\" }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/login/index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224b09eeea-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/img/login-bac.png */ \"./src/assets/img/login-bac.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \".main-content[data-v-37dfd6fc] {\\n  height: 100%;\\n  position: relative;\\n  width: 100%;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n.main-content .logo-content[data-v-37dfd6fc] {\\n  text-align: left;\\n  padding: 20px;\\n}\\n.main-content .logo-content img[data-v-37dfd6fc] {\\n  height: 2rem;\\n}\\n.main-content .login-form-content[data-v-37dfd6fc] {\\n  width: 30%;\\n  padding: 0.5rem 30px;\\n  height: 65%;\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  left: 60%;\\n  background: rgba(77, 84, 113, 0.52);\\n  border-radius: 5px;\\n  color: white;\\n  border: 4px solid #1b263c;\\n}\\n.main-content .login-form-content .login-form-content-head[data-v-37dfd6fc] {\\n  text-align: center;\\n  width: 120px;\\n  border-bottom: 1px dashed #fff;\\n  margin: 0 auto;\\n  margin-bottom: 50px;\\n  margin-top: 15px;\\n  padding: 0.5rem 0;\\n  font-size: 20px;\\n  letter-spacing: 0.5rem;\\n  padding-left: 0.5rem;\\n}\\n.main-content .login-form-content .captcha-item .code-content[data-v-37dfd6fc] {\\n  width: 35%;\\n}\\n.main-content .login-form-content .captcha-item .code-content img[data-v-37dfd6fc] {\\n  width: 100%;\\n  height: 2rem;\\n}\\n.main-content .login-form-content .captcha-item[data-v-37dfd6fc] .el-form-item__content {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.main-content .login-form-content .captcha-item[data-v-37dfd6fc] .el-input {\\n  width: 60%;\\n}\\n.login-btn[data-v-37dfd6fc] {\\n  color: white;\\n  font-size: 16px;\\n  letter-spacing: 0.5rem;\\n  background: #305eb5;\\n  height: 2rem;\\n  line-height: 2rem;\\n  text-align: center;\\n  border-radius: 5px;\\n  cursor: pointer;\\n}\\n[data-v-37dfd6fc] .el-form-item__label {\\n  color: white;\\n  font-size: 16px;\\n  text-align: left;\\n}\\n[data-v-37dfd6fc] .el-form-item {\\n  margin-bottom: 26px;\\n}\\n[data-v-37dfd6fc] .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {\\n  display: none;\\n  color: rgba(77, 84, 113, 0.52);\\n}\\n[data-v-37dfd6fc] .el-input__inner {\\n  background: #FDF1F1;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/login/index.vue?./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"b1c1feca\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/login/index.vue?./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/assets/img/login-bac.png":
/*!**************************************!*\
  !*** ./src/assets/img/login-bac.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/img/login-bac.f2c13631.png\";\n\n//# sourceURL=webpack:///./src/assets/img/login-bac.png?");

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/img/logo.71caa9e7.png\";\n\n//# sourceURL=webpack:///./src/assets/img/logo.png?");

/***/ }),

/***/ "./src/assets/js/validata.js":
/*!***********************************!*\
  !*** ./src/assets/js/validata.js ***!
  \***********************************/
/*! exports provided: validata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validata\", function() { return validata; });\nvar validata = {\n  /**\n   * 手机号验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  phoneValidata: function phoneValidata(rule, value, callback) {\n    if (value) {\n      // var reg = /^[1][0-9]{10}|(0[0-9]{2,3}\\/-)?([2-9][0-9]{6,7})+(\\/-[0-9]{1,4})?$/\n      var reg = /^[1][0-9]{10}$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的电话号码'));\n      }\n    }\n\n    callback();\n  },\n  urlValidate: function urlValidate(rule, value, callback) {\n    if (!value) {\n      callback();\n    }\n\n    var reg = /^((https|http)?:\\/\\/)[^\\s]+$/;\n\n    if (reg.test(value)) {\n      callback();\n    } else {\n      callback(new Error('请输入正确的URL地址'));\n    }\n  },\n\n  /**\n   * 登录账号验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  accountValidata: function accountValidata(rule, value, callback) {\n    if (value === '') {\n      callback(new Error('请输入登录账号'));\n    } else {\n      var reg = /^[a-zA-Z0-9]{4,16}$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的用户名，4到16位（字母，数字）'));\n      }\n    }\n  },\n  emailValidate: function emailValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^([a-zA-Z]|[0-9])(\\w|\\-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的邮箱'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 密码验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  pwdValidate: function pwdValidate(rule, value, callback) {\n    // if (value.length >= 6 && value.length <= 20){\n    //     callback()\n    // } else {\n    //     callback(new Error('请输入6-20位的密码！'))\n    // }\n    var sc = /^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\\d!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]+$/;\n    var v1 = /[a-z]/;\n    var v2 = /[A-Z]/;\n    var v3 = /[0-9]/;\n    var v4 = /\\W/;\n    var v5 = /[._]/;\n    var sum = 0;\n\n    if (v1.test(value)) {\n      sum = sum + 1;\n    }\n\n    if (v2.test(value)) {\n      sum = sum + 1;\n    }\n\n    if (v3.test(value)) {\n      sum = sum + 1;\n    }\n\n    if (v4.test(value)) {\n      sum = sum + 1;\n    }\n\n    if (v5.test(value)) {\n      sum = sum + 1;\n    }\n\n    if (sum >= 4) {\n      callback();\n    } else {\n      callback(new Error('请输入正确的密码，密码包含大写字母，小写字母，数字，特殊字符'));\n    }\n  },\n\n  /**\n   * 经度验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  longitudeValidate: function longitudeValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^(\\-|\\+)?(((\\d|[1-9]\\d|1[0-7]\\d|0{1,3})\\.\\d{0,6})|(\\d|[1-9]\\d|1[0-7]\\d|0{1,3})|180\\.0{0,6}|180)$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的学校经度,经度整数部分为0-180,小数部分为0到6位!'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 纬度验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  latitudeValidate: function latitudeValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^(\\-|\\+)?([0-8]?\\d{1}\\.\\d{0,6}|90\\.0{0,6}|[0-8]?\\d{1}|90)$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的学校纬度,纬度整数部分为0-90,小数部分为0到6位!'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 角色key验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  roleKeyValidate: function roleKeyValidate(rule, value, callback) {\n    if (value) {\n      // let reg = /^[A-Z_\\-]+$/ig\n      var reg = /^(?!_)(?!.*?_$)[A-Z_\\u4e00-\\u9fa5]+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的角色key,包含大写字母、下划线'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 字典类型验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  enumTypeValidate: function enumTypeValidate(rule, value, callback) {\n    if (value) {\n      // let reg = /^[A-Z_\\-]+$/ig\n      var reg = /^(?!_)(?!.*?_$)[A-Z_\\u4e00-\\u9fa5]+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的字典类型,包含大写字母、下划线'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 菜单路由验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  menuRouteValidate: function menuRouteValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^(?:\\/)[a-zA-Z\\u4e00-\\u9fa5]+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的菜单路由，以’/‘开头，只能包含大小写字母'));\n      }\n    }\n\n    callback();\n  },\n  menuCodeValidate: function menuCodeValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^[0-9]+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的菜单编号，只能是数字'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 菜单图标验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  menuIconValidate: function menuIconValidate(rule, value, callback) {\n    if (value) {\n      // let reg =/^([a-zA-Z]|[0-9])(\\w|\\-)+-[a-zA-Z0-9]$/\n      var reg = /([a-zA-Z]|[0-9])+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入正确的菜单图标，由字符、数字、’-‘组成的class名'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 字典value值验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  dicValueValidate: function dicValueValidate(rule, value, callback) {\n    if (value) {\n      var reg = /([a-zA-Z]|[0-9])+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入由数字和英文字母组成的字典value'));\n      }\n    }\n\n    callback();\n  },\n\n  /**\n   * 字典key值验证\n   * @param rule\n   * @param value\n   * @param callback\n   */\n  dicKeyValidate: function dicKeyValidate(rule, value, callback) {\n    if (value) {\n      var reg = /^[0-9]+$/;\n\n      if (reg.test(value)) {\n        callback();\n      } else {\n        callback(new Error('请输入数字的字典key'));\n      }\n    }\n\n    callback();\n  }\n};\n\n//# sourceURL=webpack:///./src/assets/js/validata.js?");

/***/ }),

/***/ "./src/views/login/index.vue":
/*!***********************************!*\
  !*** ./src/views/login/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=37dfd6fc&scoped=true& */ \"./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/login/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& */ \"./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"37dfd6fc\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/login/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/login/index.vue?");

/***/ }),

/***/ "./src/views/login/index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/views/login/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/login/index.vue?");

/***/ }),

/***/ "./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=style&index=0&id=37dfd6fc&lang=less&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37dfd6fc_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/views/login/index.vue?");

/***/ }),

/***/ "./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b09eeea_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4b09eeea-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=37dfd6fc&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4b09eeea-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/index.vue?vue&type=template&id=37dfd6fc&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b09eeea_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4b09eeea_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_37dfd6fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/login/index.vue?");

/***/ })

}]);