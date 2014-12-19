$(function(){
  // Load Amazon products from iframe proxy on heroku.
  $('div.amazon-product').each(function(_, el){
    var $el = $(el);
    $el.load('http://better-amazon-widgets.herokuapp.com/product_iframe_html?path=' + encodeURIComponent($el.data('product-path')));
  });

  $('a[title], i[title]').qtip({
    style: {classes: 'qtip-light'},
    position: {
      viewport: $(window),
      my: 'bottom middle',
      at: 'top middle',
    }
  });
});
