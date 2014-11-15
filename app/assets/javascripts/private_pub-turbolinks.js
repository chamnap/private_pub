$(function() {
  $(document).on('page:before-change', function() {
    PrivatePub.disconnect();
  });
});