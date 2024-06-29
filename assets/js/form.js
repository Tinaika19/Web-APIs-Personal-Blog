// Select the form element
const form = document.querySelector('form');

// Function to handle form submission
const handleFormSubmit = event => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const error = document.getElementById('error');

  if (username && title && content) {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    const blogPost = {
      username,
      title: `Title ${blogPosts.length + 1}`,
      content: `Content ${blogPosts.length + 1}: ${content}`
    };
    
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    redirectPage('blog.html');
  } else {
    error.textContent = 'Please complete the form.';
  }
};

// Add an event listener to the form on submit
form.addEventListener('submit', handleFormSubmit);

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
