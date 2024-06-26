$(document).ready(function () {
  $('.toggle-mode').on('click', function () {
    $('body').toggleClass('dark-mode');
    $('.navbar').toggleClass('navbar-dark-mode'); // Toggle the dark mode class on the navbar
    $('.nav-link, .navbar-brand, .navbar-toggler-icon').toggleClass('text-white-in-dark-mode');
    $('.bi').toggleClass('icon-white-in-dark-mode'); // Toggle the color for icons
    $('.card').addClass('dark-mode');
    // Change the icon to a sun if dark mode is active
    if ($('body').hasClass('dark-mode')) {
      $(this).html('<i class="bi bi-brightness-high white-icon"></i>');
      // Add dark mode styles to cards
    } else {
      // Change back to the moon icon if dark mode is not active
      $(this).html('<i class="bi bi-moon"></i>');
      $('.card').removeClass('dark-mode'); // Remove dark mode styles from cards
    }
  });

  const logoImage = document.getElementById('logo');
  if ($('body').hasClass('dark-mode')) {
    logoImage.src = '../Photos/meta-logo dark-mode.png';
  } else {
    logoImage.src = '../Photos/meta-icon.jpg';
  }



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
