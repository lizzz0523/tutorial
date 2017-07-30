$(init);

function init() {
  getData().done(function (data) {
    $("#list").html(renderList(data.list));

    $("#list").on("click", "li", function () {
      var idx = $(this).data("idx");
      var item = data.list[idx];

      location.href = item.detail_url;
    });

    $("#slider").html(renderSlider(data.imgs));
    $("#slider").swiper({
      autoplay: 3000,
      speed: 400,
      spaceBetween: 10
    });
  });
}

function getData() {
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
