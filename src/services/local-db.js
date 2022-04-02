const SAVED_POSTS_KEY = 'saved_posts';

function _readPostsFromLocalStorage() {
  return JSON.parse(localStorage.getItem(SAVED_POSTS_KEY)) || [];
}

function _writePostsToLocalStorage(data) {
  localStorage.setItem(SAVED_POSTS_KEY, JSON.stringify(data));
}

export function savePost(post) {
  let posts = _readPostsFromLocalStorage();
  posts.push(post);
  console.log(posts);
  _writePostsToLocalStorage(posts);
}

export function getPosts() {
  return _readPostsFromLocalStorage();
}
