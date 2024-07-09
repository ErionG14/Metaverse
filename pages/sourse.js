$(document).ready(function () {
  $('.toggle-mode').on('click', function () {
    $('body').toggleClass('dark-mode');
    $('.navbar').toggleClass('navbar-dark-mode');
    $('.nav-link, .navbar-brand, .navbar-toggler-icon').toggleClass('text-white-in-dark-mode');
    $('.bi').toggleClass('icon-white-in-dark-mode');
    $('.card, .dropdown-menu').toggleClass('dark-mode');
    
    if ($('body').hasClass('dark-mode')) {
      $(this).html('<i class="bi bi-brightness-high white-icon"></i>');
      logoImage.src = '../Photos/meta-logo dark-mode.png';
    } else {
      $(this).html('<i class="bi bi-moon"></i>');
      $('.card').removeClass('dark-mode');
      logoImage.src = '../Photos/meta-icon.jpg';
    }
  });


  $('.Print').click(function () {
    window.print();
    return false;
  });
});

window.addEventListener('scroll', function () {
  var articleElement = document.getElementById('article');
  var position = articleElement.getBoundingClientRect();

  // Checking if the article is within the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    articleElement.classList.add('show-article');
  }
});
