function createItemPortfolio(link, title, description, img) {
  const linkContainer = $(`<a href="${link}" target="_balnk"></a>`);
  const infoContainer = $(`<div></div>`);
  const name = $(`<h2>${title}</h2>`);
  const descriptionText = $(`<p>${description}</p>`);
  const imgLink = $(`<img src="${img}" alt="${title}" />`);

  infoContainer.append(name, descriptionText);
  linkContainer.append(infoContainer, imgLink);

  $(".portfolio-container").append(linkContainer);
}

fetch("../portfolio.json")
  .then((response) => response.json())
  .then((res) => {
    res.forEach((item) => {
      createItemPortfolio(item.link, item.name, item.description, item.img);
    });
  });
