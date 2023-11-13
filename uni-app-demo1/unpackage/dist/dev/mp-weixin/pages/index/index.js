"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bannerArr: [
        { id: "1", url: "../../static/desktop_1.jpg" },
        { id: "2", url: "../../static/desktop_2.jpg" },
        { id: "3", url: "../../static/desktop_3.jpg" },
        { id: "4", url: "../../static/desktop_4.jpg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    handlePreview(url) {
      common_vendor.index.previewImage({
        urls: this.bannerArr.map((v) => v.url)
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bannerArr, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handlePreview(item.url), item.id),
        b: item.url,
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/WorkCode/uni-app/uni-app-demo1/uni-app-demo1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
