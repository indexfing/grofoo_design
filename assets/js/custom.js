jQuery(function ($) {
  "use strict";

  var mainbottom = $('#main').offset().top;
  $(window).on('scroll', function () {
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar').addClass('past-main');
      $('.navbar').addClass('effect-main')
    } else {
      $('.navbar').removeClass('past-main');
    }
  });


  $(document).on('click.nav', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
      $(this).removeClass('in').addClass('collapse');
    }
  });

  $(window).load(function () {
    setTimeout(function () {
      $('#loading').fadeOut('slow', function () {
      });
    }, 300);
  });

  $('#myModal').bind('hidden', function () {
    // do something ...
  })

  new WOW().init();


  $('.popup').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $(".reviews").owlCarousel({

    slideSpeed: 200,
    items: 1,
    singleItem: true,
    autoPlay: true,
    pagination: false
  });

  $(".final_product").owlCarousel({

    slideSpeed: 200,
    items: 1,
    singleItem: true,
    autoPlay: true,
    pagination: false
  });

  $("#owl_product").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_suggested").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_sponsored").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_sponsored_two").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_customers_viewed").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_rastaurants").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });


  $("#owl_brand").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $(document).ready(function () {

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["jul4", "jul6", "jul8", "jul10", "jul12", "jul14"],
        datasets: [{
          label: 'hourly order value',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)'
          ],
          borderColor: [
            'rgba(142, 196, 73,1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    var ctx = document.getElementById("myChart2");
    var myChart2 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["jul4", "jul6", "jul8", "jul10", "jul12", "jul14"],
        datasets: [{
          label: 'hourly order count',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)',
            'rgba(142, 196, 73, 0.2)'
          ],
          borderColor: [
            'rgba(142, 196, 73,1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)',
            'rgba(142, 196, 73, 1)'
          ],
          borderWidth: 1
        }],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  });




  $(".clients").owlCarousel({
    slideSpeed: 200,
    items: 5,
    singleItem: false,
    autoPlay: true,
    pagination: false
  });



  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function () {
    $('#back-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });



  $(function () {
    $('a.page-scroll').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });


  $(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

      var $target = $(e.target);

      if ($target.parent().hasClass('disabled')) {
        return false;
      }
    });

    $(".next-step").click(function (e) {

      var $active = $('.wizard .nav-tabs li.active');
      $active.next().removeClass('disabled');
      nextTab($active);

    });
    $(".prev-step").click(function (e) {

      var $active = $('.wizard .nav-tabs li.active');
      prevTab($active);

    });
  });

  function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
  }


  // checkout process function :

  $(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //wizard checkout
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

      var $target = $(e.target);

      if ($target.parent().hasClass('disabled')) {
        return false;
      }
    });

    $(".next-step-checkout").click(function (e) {

      var $active = $('.wizard_checkout .nav-tabs li.active');
      $active.next().removeClass('disabled');
      nextTab($active);

    });
    $(".prev-step-checkout").click(function (e) {

      var $active = $('.wizard_checkout .nav-tabs li.active');
      prevTab($active);

    });
  });

  function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
  }

  // end of checkout process function



});


$("#id-picture").change(function () {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#idPreview').attr('src', e.target.result).fadeIn('slow');
    }
    reader.readAsDataURL(input.files[0]);
  }
}


$("#cheque-picture").change(function () {

  $("#cheque-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#chequePreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});

$("#id-picture").change(function () {

  $("#cheque-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#chequePreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});


$("#id-farmer").change(function () {

  $("#farmer-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#farmerPreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});

$(document).ready(function () {
  $('.filterable .btn-filter').click(function () {
    var $panel = $(this).parents('.filterable'),
      $filters = $panel.find('.filters input'),
      $tbody = $panel.find('.table tbody');
    if ($filters.prop('disabled') === true) {
      $filters.prop('disabled', false);
      $filters.first().focus();
    } else {
      $filters.val('').prop('disabled', true);
      $tbody.find('.no-result').remove();
      $tbody.find('tr').show();
    }
  });

  $('.filterable .filters input').keyup(function (e) {
    /* Ignore tab key */
    var code = e.keyCode || e.which;
    if (code == '9') return;
    /* Useful DOM data and selectors */
    var $input = $(this),
      inputContent = $input.val().toLowerCase(),
      $panel = $input.parents('.filterable'),
      column = $panel.find('.filters th').index($input.parents('th')),
      $table = $panel.find('.table'),
      $rows = $table.find('tbody tr');
    /* Dirtiest filter function ever ;) */
    var $filteredRows = $rows.filter(function () {
      var value = $(this).find('td').eq(column).text().toLowerCase();
      return value.indexOf(inputContent) === -1;
    });
    /* Clean previous no-result if exist */
    $table.find('tbody .no-result').remove();
    /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
    $rows.show();
    $filteredRows.hide();
    /* Prepend no-result row if all rows are filtered */
    if ($filteredRows.length === $rows.length) {
      $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
    }
  });
});


$(document).ready(function () {
  $("#list").click(function () {
    $("#list_view").toggleClass('collapse');
    alert("The paragraph was clicked.");
  });
});

// mega menu toggle class

$(document).ready(function () {
  var hClass = $('.menu_listing_box').hasClass('col-sm-9');
  //alert(hClass);
  $(".brand_toggle").click(function () {
    $('.icon_b').toggleClass('ion-chevron-right ion-chevron-left');
    if ($('.icon_b').text() == " Show") {
      $('.icon_b').text(" Hide")
    }
    else {
      $('.icon_b').text(" Show");
    }

    $(this).parents('.row').find('.brand_box').toggleClass('col-md-2 col-md-1');

    if(!($('.menu_listing_box').hasClass('col-md-10'))){
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-9');
    }else{
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-10 col-md-9');
    }

    if($('.brand_box').hasClass('col-md-1') && $('.filer_box').hasClass('col-md-1')){
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-10');
    } 

  });
  $(".filter_toggle").click(function () {
    $('.icon_f').toggleClass('ion-chevron-left ion-chevron-right');
    if ($('.icon_f').text() == " Show") {
      $('.icon_f').text(" Hide")
    }
    else {
      $('.icon_f').text(" Show");
    }

    $(this).parents('.row').find('.filer_box').toggleClass('col-md-2 col-md-1');

    if(!($('.menu_listing_box').hasClass('col-md-10'))){
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-9');
    }else{
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-10 col-md-9');
    }
    
    if($('.brand_box').hasClass('col-md-1') && $('.filer_box').hasClass('col-md-1')){
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-10');
    } 

  });
});


$(document).ready(function () {

  // Defining the local dataset
  var Categories = ['Rice', 'Flour & Atta', 'Dals & Pulses', 'Vegetables & Fruits', 'Dairy & Eggs', 'Oil & Ghee', 'Spices', 'Masalas', 'Pastes & Sauces', 'Coffee & Tea'];
  var Brands = ['Amul', 'Nestle', 'Dabur', 'Haldiram', 'Britannia', 'Godrej', 'Himalaya', 'Santoor', 'Nirma', 'Park Avenue'];
  var Products = ['Red Label Tea', 'Dove Bathing Bar', 'Fortune Sunflower Refined Oil', 'Tang Orange Instant Drink Mix', 'Bread - Brown, Chemical Free', 'Eggs - Table Tray', 'Sugar - Refined', 'Paratha - Onion', 'Fancy Bites Fryums - Biscuits', 'Nachoz - Sizzling Peri Peri'];

  
  // Constructing the suggestion engine
  var Categories = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Categories
  });

  var Brands = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Brands
  });

  var Products = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Products
  });

  

  // Initializing the typeahead
  $('.header_search_box .typeahead').typeahead({
    hint: true,
    highlight: true, /* Enable substring highlighting */
    minLength: 1 /* Specify minimum characters required for showing result */
  },
    {
      name: 'Categories',
      source: Categories,
      templates: {
        header: '<h3 class="league-name">Categories</h3>',
        empty: '<div class="empty-text"> No Categorie Found! </div>'
      }
    },
    {
      name: 'Brands',
      source: Brands,
      templates: {
        header: '<h3 class="league-name">Brands</h3>',
        empty: '<div class="empty-text"> No Brand Found! </div>'
      }
    },
    {
      name: 'Products',
      source: Products,
      templates: {
        header: '<h3 class="league-name">Products</h3>',
        empty: '<div class="empty-text"> No Product Found! </div>',
        suggestion: function (Products) {
          return '<div class="product_suggestion_box">' +
            '<div class="image search-product-img" >' +
            '<img width="50px" src="' + 'assets/images/23664a.jpg' + '" >' +
            '</div>' +
            '<div class="info">' +
            '<span class="name">' + 'Tang Orange Instant Drink Mix' + '</span>' +
            '<div class="price-box" >' + 'Rs 160.00' + '</div>' +
            '<div class="more_details">Tang is a fruit-flavored drink. It was formulated by General Foods </div>' +
            '</div>';
        }
      }
    });

    /* location search list */
    var Locations = ['USA', 'Canada', 'Netherlands', 'TX USA', 'Canada', 'Argentina', 'Germany', 'Spain', 'IL USA', 'Mexico'];
    
    var Locations = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: Locations
    });
    $('.location_search .typeahead').typeahead({
      hint: true,
      highlight: true, /* Enable substring highlighting */
      minLength: 1 /* Specify minimum characters required for showing result */
    },
      {
        name: 'Locations',
        source: Locations,
        templates: {
          header: '<h3 class="league-name">Locations</h3>',
          empty: '<div class="empty-text"> No Locations Found! </div>'
        }
      }
    );  
    
}); 