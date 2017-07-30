$(init);

function init() {
  getData().done(function (data) {
    $("#list").html(renderList(data.list));
  });
}

function getData() {
  return $.getJSON("./data.json");
}

function renderList(list) {
  return list.map(renderItem).join("");
}

function renderItem(item) {
  return `
    <li>
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
