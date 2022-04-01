$(document).ready(function() {
  function listOfProducts() {
    var filter = $('.select_filter').val(); 
    
    $.getJSON( "products.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        
        var nameOfProduct = val.prod_name;
        var priceOfProduct = val.prod_price;
        var statusOfProduct = val.prod_status;

        if(filter == 'all') {
          if(statusOfProduct == undefined) {
            return false;
          }

          items.push( `<div class="item">
          <div class="img_wrapper">
          <img src="https://dummyimage.com/400x3:4 " alt="">
          </div>
          <div class="item_info">
          <div class="name">`
          +nameOfProduct +
          `</div>
            <div class="price">`
              +priceOfProduct +
            ` zł</div>
          </div>
        </div>` );
        }
        
        else if(statusOfProduct == undefined) {
          statusOfProduct = '';
        }
        
        else if(statusOfProduct.includes(filter)) {
          items.push( `<div class="item">
          <div class="img_wrapper">
          <img src="https://dummyimage.com/400x3:4 " alt="">
          </div>
          <div class="item_info">
          <div class="name">`
          +nameOfProduct +
          `</div>
            <div class="price">`
              +priceOfProduct +
            `zł</div>
          </div>
        </div>` );
        }
      });
      
      $('.products_list').html(items);
      items.splice(0, items.length);
    });
  }
  
  listOfProducts();
  
  $(".select_filter").change(function(){
    listOfProducts();
  });
});