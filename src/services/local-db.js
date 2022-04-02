const SAVED_POSTS_KEY = 'saved_posts';

function readPostsFromLocalStorage() {
  return JSON.parse(localStorage.getItem(SAVED_POSTS_KEY)) || [];
}

function writePostsToLocalStorage(data) {
  localStorage.setItem(SAVED_POSTS_KEY, JSON.stringify(data));
}

export function savePost(post) {
  let posts = readPostsFromLocalStorage();
  posts.push(post);
  writePostsToLocalStorage(posts);
}

export function getPosts() {
  return readPostsFromLocalStorage();
}
