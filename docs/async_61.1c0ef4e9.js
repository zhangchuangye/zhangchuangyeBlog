(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{109:function(t,u,B){"use strict";B.r(u);var o={created:function(){this.content=unescape("%3Ch3%3Eform%3C/h3%3E%0A%3Cp%3E%u8868%u5355%uFF0C%u5C06%u7EC4%u4EF6%u5185%u7684%u7528%u6237%u8F93%u5165%u7684%3Cac-switch/%3E%20%3Cac-input/%3E%20%3Cac-checkbox/%3E%20%3Cac-slider/%3E%20%3Cac-radio/%3E%u63D0%u4EA4%u3002%3C/p%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u5C5E%u6027%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u63CF%u8FF0%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E@submit%3C/td%3E%0A%3Ctd%3EEventHandle%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3Ctd%3E%u643A%u5E26%20form%20%u4E2D%u7684%u6570%u636E%u89E6%u53D1%20submit%20%u4E8B%u4EF6%u3002%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3E@reset%3C/td%3E%0A%3Ctd%3EEventHandle%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3Ctd%3E%u8868%u5355%u91CD%u7F6E%u65F6%u4F1A%u89E6%u53D1%20reset%20%u4E8B%u4EF6%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eaction%3C/td%3E%0A%3Ctd%3EString%3C/td%3E%0A%3Ctd%3E%3C/td%3E%0A%3Ctd%3E%u8BE5%u5C5E%u6027%u5F53%u4F7F%u7528%u641C%u7D22%u65F6%uFF0C%u9700%u8981%u6307%u5B9A%uFF08%u53EF%u4EE5%u4F7F%u952E%u76D8%u51FA%u73B0%u641C%u7D22%u6309%u94AE%uFF09%u3002%u5176%u4ED6%u573A%u666F%u5E76%u4E0D%u662F%u5FC5%u8981%u7684%u3002%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Cp%3EBug%26amp%3BTip%0A1%u3001%u5F53form%u8868%u5355%u7EC4%u4EF6%u7684form-type%20%u8BBE%u7F6E%u4E3A%20submit%u65F6%uFF0C%u70B9%u51FBform%u91CC%u9762%u7684%20button%20%u7EC4%u4EF6%uFF0C%u4F1A%u5C06%u8868%u5355%u7EC4%u4EF6%u4E2D%u7684%20value%20%u503C%u8FDB%u884C%u63D0%u4EA4%uFF0C%u9700%u8981%u5728%u8868%u5355%u5185%u7684%u7EC4%u4EF6%u4E2D%u52A0%u4E0A%20name%20%u6765%u4F5C%u4E3A%20key%u3002/%0A2%u3001@submit%u89E6%u53D1%u540E%uFF0C%u8FD4%u56DE%u503C%u4E3A%u6570%u636E%u5185%u5BB9%u7EC4%u6210%u7684%u5BF9%u8C61%u3002%u8FD4%u56DE%u683C%u5F0F%u5982%u4E0B%uFF1A%3C/p%3E%0A%3Cp%3E%3Cimg%20src%3D%22./img/form/form1.png%22%20alt%3D%22%22%3E%3C/p%3E%0A%3Cp%3E%u793A%u4F8B%u4EE3%u7801%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-script%22%3E%26lt%3Btemplate%26gt%3B%0A%20%20%20%26lt%3Bac-layout%26gt%3B%0A%20%20%20%20%20%20%20%20%20%26lt%3Bac-form%20@submit%3D%26quot%3BformSubmit%26quot%3B%20@reset%3D%26quot%3BformReset%26quot%3B%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-cell-item%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bspan%20slot%3D%26quot%3Bleft%26quot%3B%26gt%3B%u7528%u6237%u540D%uFF1A%26lt%3B/span%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-input%20slot%3D%26quot%3Bright%26quot%3B%20%20name%3D%26quot%3Binput%26quot%3B%20max%3D%26quot%3B20%26quot%3B%20placeholder%3D%26quot%3B%u8BF7%u8F93%u5165%u7528%u6237%u540D%26quot%3B%26gt%3B%26lt%3B/ac-input%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-item%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bac-cell-item%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bspan%20slot%3D%26quot%3Bleft%26quot%3B%26gt%3B%u5F00%u5173%26lt%3B/span%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-switch%20slot%3D%26quot%3Bright%26quot%3B%20name%3D%26quot%3Bswitch%26quot%3B%20title%3D%26quot%3B%u5F00%u5173%26quot%3B%26gt%3B%26lt%3B/ac-switch%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-item%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bac-cell-item%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bspan%20slot%3D%26quot%3Bleft%26quot%3B%26gt%3Bcheckbox%26lt%3B/span%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-checkbox-group%20name%3D%26quot%3Bcheckbox%26quot%3B%20slot%3D%26quot%3Bright%26quot%3B%20style%3D%26quot%3Bpadding%3A%20.3rem%200%3B%26quot%3B%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-checkbox%20value%3D%26quot%3Bcheckbox1%26quot%3B%20%26gt%3B%26lt%3B/ac-checkbox%26gt%3B%u9009%u9879%u4E00%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-checkbox%20value%3D%26quot%3Bcheckbox2%26quot%3B%20%26gt%3B%26lt%3B/ac-checkbox%26gt%3B%u9009%u9879%u4E8C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B/ac-checkbox-group%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-item%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bac-cell-item%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-radio-group%20name%3D%26quot%3Bradio%26quot%3B%20slot%3D%26quot%3Bleft%26quot%3B%20style%3D%26quot%3Bpadding%3A%20.3rem%200%3B%26quot%3B%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-radio%20value%3D%26quot%3Bradio1%26quot%3B%26gt%3B%26lt%3B/ac-radio%26gt%3B%u9009%u98791%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-radio%20value%3D%26quot%3Bradio2%26quot%3B%26gt%3B%26lt%3B/ac-radio%26gt%3B%u9009%u98792%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-radio%20value%3D%26quot%3Bradio3%26quot%3B%26gt%3B%26lt%3B/ac-radio%26gt%3B%u9009%u98793%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B/ac-radio-group%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-item%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bac-cell-item%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bspan%20slot%3D%26quot%3Bleft%26quot%3B%26gt%3Bslider%26lt%3B/span%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-label%20slot%3D%26quot%3Bright%26quot%3B%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-slider%20%3Awidth%3D%26quot%3B300%26quot%3B%20show-value%3D%26quot%3Btrue%26quot%3B%20name%3D%26quot%3Bslider%26quot%3B%26gt%3B%26lt%3B/ac-slider%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%26lt%3B/ac-label%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-item%26gt%3B%0A%0A%20%20%20%20%20%20%20%20%26lt%3Bac-cell-group%20title%3D%26quot%3B%26quot%3B%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-button%20form-type%3D%26quot%3Bsubmit%26quot%3B%20type%3D%26quot%3Bprimary%26quot%3B%26gt%3BSubmit%26lt%3B/ac-button%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bac-button%20form-type%3D%26quot%3Breset%26quot%3B%26gt%3BReset%26lt%3B/ac-button%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3B/ac-cell-group%26gt%3B%0A%20%20%20%20%20%20%20%20%20%26lt%3B/ac-form%26gt%3B%0A%20%20%20%20%26lt%3B/ac-layout%26gt%3B%0A%26lt%3B/template%26gt%3B%0A%0A%26lt%3Bscript%26gt%3B%0Aexport%20default%20%7B%0A%20%20config%3A%20%7B%0A%20%20%20%20%26quot%3BnavigationBarTitleText%26quot%3B%3A%20%26quot%3B%u8868%u5355%26quot%3B%0A%20%20%7D%2C%0A%20%20data%20%28%29%20%7B%0A%20%20%20%20return%20%7B%20%0A%20%20%20%20%20%20left%3A%200%2C%0A%20%20%20%20%20%20sliderValue%3A%2020%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20formSubmit%20%28e%29%20%7B%0A%20%20%20%20%20%20console.log%28e%29%0A%20%20%20%20%7D%2C%0A%20%20%20%20formReset%20%28e%29%20%7B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0A%26lt%3B/script%26gt%3B%0A%0A%26lt%3Bstyle%20lang%3D%26quot%3Bless%26quot%3B%26gt%3B%0A%20%20.sample_content%7B%0A%20%20%20%20line-height%3A%20inherit%3B%0A%20%20%7D%0A%26lt%3B/style%26gt%3B%0A%0A%3C/code%3E%3C/pre%3E%0A%20%3C%21--%20%u6548%u679C%0A%20%0A%20%21%5B%5D%28./img/form/form2.png%29%20--%3E")}},l=B(2),e=Object(l.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);u.default=e.exports}}]);