// 等待页面的dom-ready
$(init);

function init() {
  // 获取后台数据
  getData().done(function (data) {
    // 渲染列表
    $("#list").html(renderList(data.list));

    // 监听列表的点击事件，这里采用了事件代理的方式，减少内存占用
    $("#list").on("click", "li", function () {
      var idx = $(this).data("idx");
      var item = data.list[idx];

      location.href = item.detail_url;
    });

    // 渲染头图
    $("#slider").html(renderSlider(data.imgs));
    
    // 初始化swiper插件
    $("#slider").swiper({
      autoplay: 3000,
      speed: 400,
      spaceBetween: 10
    });
  });
}

function getData() {
  // 这里由于还没有实际的后台数据，直接获取本地的json数据作为示意
  return $.getJSON("./data.json");
}

function renderList(list) {
  return list.map(renderItem).join("");
}

function renderItem(item, idx) {
  return `
    <li data-idx="${ idx }">
      <div class="news">
        <span class="news_cover" style="background-image:url(${ item.cover_url })"></span>
        <div>
          <h2>${ item.title }</h2>
          <p>${ item.description }</p>
        </div>
      </div>
    </li>
  `;
}

function renderSlider(imgs) {
  return `
    <div class="swiper-wrapper">
        ${ imgs.map(renderSlide).join("") }
    </div>
  `;
}

function renderSlide(img) {
  return `
    <div class="swiper-slide">
      <span class="news-slide" style="background-image:url(${ img })"></span>
    </div>
  `;
}
