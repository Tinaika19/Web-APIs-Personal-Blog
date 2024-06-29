// Select the main element
const main = document.querySelector('main');

// Function to build and append an element to the DOM
const buildElement = (tag, text, className = '') => {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.classList.add(className);
  return element;
};

// Function to handle no blog posts case
const displayNoPostsMessage = () => {
  const message = buildElement('p', 'No blog posts yet.');
  main.appendChild(message);
};

// Function to read from local storage
const getBlogPosts = () => {
  return JSON.parse(localStorage.getItem('blogPosts')) || [];
};

// Render list of blog posts
const renderPosts = () => {
  const blogPosts = getBlogPosts();

  if (blogPosts.length === 0) {
    displayNoPostsMessage();
  } else {
    blogPosts.forEach((post, index) => {
      const article = buildElement('article', '');
      const title = buildElement('h2', `Title ${index + 1}`);
      const content = buildElement('blockquote', `Content ${index + 1}: ${post.content}`);
      const author = buildElement('p', `Written by: ${post.username}`);

      article.appendChild(title);
      article.appendChild(content);
      article.appendChild(author);

      main.appendChild(article);
    });
  }
};

// Call the function to render the list of blog posts
renderPosts();
