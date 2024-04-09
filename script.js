$(document).ready(function() {
    $('#filter-select').change(function() {
      // Lógica de filtragem aqui
    });
  
    $('#sort-select').change(function() {
      var sortValue = $(this).val();
      if (sortValue === 'menor') {
        sortByPrice('menor');
      } else if (sortValue === 'maior') {
        sortByPrice('maior');
      }
    });
  
    function sortByPrice(order) {
      var $wrapper = $('.card-wrapper');
      var $items = $('.card-item');
      $items.sort(function(a, b) {
        var priceA = parseFloat($(a).data('price'));
        var priceB = parseFloat($(b).data('price'));
        if (order === 'menor') {
          return priceA - priceB;
        } else if (order === 'maior') {
          return priceB - priceA;
        }
      });
      $wrapper.empty().append($items);
    }
  });
  