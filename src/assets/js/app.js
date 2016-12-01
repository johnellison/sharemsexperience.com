// $(document).foundation();

// GA Event Step 1
$('#step1').click(function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'apply',
    eventAction: $(this).attr('id'),
    eventLabel: $(this).text()
  });
});

// GA Event Step 2
$('#step2').click(function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'apply',
    eventAction: $(this).attr('id'),
    eventLabel: $(this).text()
  });
});
