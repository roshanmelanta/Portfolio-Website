var cardsModule = (function() {
    var trigger = $(".items"),
      closetrigger = $(".items span.close");
  
    var animateCard = function() {
      $(this).addClass("animate");
    };
  
    var closeCard = function(e) {
      console.log($(this)
        .parent())
      $(this)
        .parent()
        .removeClass("animate");
      e.stopPropagation();
    };
  
    trigger.on("click", animateCard);
    closetrigger.on("click", closeCard);
  })();
  