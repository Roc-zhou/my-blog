/*滚动添加css*/
import $ from 'jquery'
export default {
  /*初始化*/
  init: function (_el) {
    this.start(_el);
    let self = this;
    $(window).on('scroll', function () {
      self.start(_el)
    });
  },
  /*开始*/
  start: function (_el) {
    let self = this;
    $(_el).each(function () {
      let _self = $(this);
      /*滚动高度*/
      let isScrollTop = $(window).scrollTop();
      /*滚动视度*/
      let isWindowHeiget = $(window).height() * 0.8;
      /**/
      let _class = $(this).data('animation');
      if (isScrollTop + isWindowHeiget > $(this).offset().top) {
        _self.addClass(_class);
      }
    });
  }
}
