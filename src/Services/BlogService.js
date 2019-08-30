const BASE_BLOG_URL = "https://13akstjq.github.io/";

// blog html 을 받아오는 메소드
export const getBlog = () =>
  fetch(BASE_BLOG_URL)
    .then(response => response.text())
    .then(html => html);

// postTag를 받아서 postList형태로 변환해주는 메소드
export const postTagToPostList = postTag => {
  const postList = [];
  console.log(postTag);
};
