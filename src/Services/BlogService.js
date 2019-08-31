const BASE_BLOG_URL = "https://13akstjq.github.io/";

// blog html 을 받아오는 메소드
export const getBlog = () =>
  fetch(BASE_BLOG_URL)
    .then(response => response.text())
    .then(html => html);

// postTag를 받아서 postList형태로 변환해주는 메소드
export const postTagToPostList = postTags => {
  const postList = [];
  for (let i = 0; i < 10; i++) {
    const postItem = {};
    postItem.id = i;
    postItem.url = hrefToURL(postTags[i].children[0].href);
    postItem.category = postTags[i].children[0].href.split("/")[3];
    postItem.title = postTags[i].children[0].children[0].children[0].innerText;
    postItem.name = "Han ManSub";
    postItem.createdAt =
      postTags[i].children[0].href.split("/")[4] +
      "." +
      postTags[i].children[0].href.split("/")[5] +
      "." +
      postTags[i].children[0].href.split("/")[6];
    postList[i] = postItem;
    // console.log(postItem);
  }
  return postList;
};

// href를 입력 받으면 url주소로 변환해주는 메소드
const hrefToURL = href => {
  const URLList = href.split("/");
  URLList[0] = "";
  URLList[2] = "13akstjq.github.io";
  let postURL = "https:";
  URLList.forEach((URLItem, index) => {
    if (index > 0) {
      postURL = postURL + "/" + URLItem;
    }
  });
  //  console.log(postURL);
  return postURL;
};
