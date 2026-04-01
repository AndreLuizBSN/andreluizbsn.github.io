const baseList = ["home", "about", "contact"];

const renderData = (datas) => {
  let form = [];

  datas.forEach((data) => {
    if (data.type === "paragraph") form.push("<p>" + data.content + "</p>");
    if (data.type === "title4") form.push("<h4>" + data.content + "</h4>");
    if (data.type === "title5") form.push("<h5>" + data.content + "</h5>");
    if (data.type === "list") {
      form.push("<ul>");
      data.content.forEach((item) => form.push("<li>" + item + "</li>"));
      form.push("</ul>");
    }
    if (data.type === "link") {
      form.push(
        "<a href='" +
          data.content.href +
          "' target='" +
          data.content.target +
          "' class='" +
          data.content.class +
          "'>",
      );
      form.push(
        "<img src='" +
          data.content.image +
          "' style='" +
          data.content.style +
          "'/>",
      );
      form.push(data.content.label);
      form.push("</a>");
    }
    if (data.type === "memo")
      form.push("<img src='" + data.content.image + "' />" + data.content.text);
  });

  return form.join("");
};

fetch("./data.json")
  .then((response) => response.json())
  .then((dt) => {
    console.log(dt);
    var page = localStorage.getItem("page") || "home";

    const menu = dt.menu;
    baseList.forEach((bs) => {
      document.getElementById(bs + "-content").style.display = "none";
    });
    document.getElementById(page + "-content").style.display = "block";

    const pageContent = document.getElementById(page + "-content");
    pageContent.getElementsByClassName("content")[0].innerHTML = renderData(
      dt[page],
    );

    //menu on click
    const menuItems = document.getElementsByClassName("menu-item");

    for (let i = 0; i < menuItems.length; i++) {
      const element = menuItems[i];

      const id = element.id;
      element.onclick = function () {
        baseList.forEach((bs) => {
          document.getElementById(bs + "-content").style.display = "none";
        });
        document.getElementById(id + "-content").style.display = "block";
        localStorage.setItem("page", id);
        const pageContent = document.getElementById(id + "-content");
        pageContent.getElementsByClassName("content")[0].innerHTML = renderData(
          dt[id],
        );
      };
    }
  })
  .catch((err) => console.error(err));
