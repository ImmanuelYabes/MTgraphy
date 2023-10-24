function scroll_into(target){
  document.getElementById(target).scrollIntoView({behavior: 'smooth'});
}

if (new URLSearchParams(window.location.search).get('scroll_to') == 'about-us') {
  scroll_into('about-us');
} else if (new URLSearchParams(window.location.search).get('scroll_to') == 'gallery') {
  scroll_into('gallery');
}