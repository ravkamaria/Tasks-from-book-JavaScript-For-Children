    //Chapter 10, page 208//////////////////////////////////////////////////////////////////////////////////////////////////////

    // $("html").mousemove(function(event){
      //     $("#heading").offset({
      //         left: event.pageX,
      //         top: event.pageY
      //     });
      // });

      //#1, page 208 ////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Слідуємо клікам.
      // $("html").click(function(event){
      //     $("#heading").offset({
      //         left: event.pageX,
      //         top: event.pageY
      //     });
      // });
      //#2, page 208 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Створіть власну анімацію.
      let offset = 0;
      let direction = "right";
      let interval = 80;

      $("#heading").offset({ top: offset, left: offset });

      function moveHeading() {
        if (direction === "right") {
          $("#heading").offset({ left: offset });
          offset++;
          if (offset > 200) {
            offset = 0;
            direction = "bottom";
          }
        } else if (direction === "bottom") {
          $("#heading").offset({ top: offset });
          offset++;
          if (offset > 200) {
            offset = 200;
            direction = "left";
          }
        } else if (direction === "left") {
          $("#heading").offset({ left: offset });
          offset--;
          if (offset < 0) {
            offset = 200;
            direction = "top";
          }
        } else if (direction === "top") {
          $("#heading").offset({ top: offset });
          offset--;
          if (offset < 0) {
            offset = 0;
            direction = "right";
          }
        }
      }
      let animation = setInterval(moveHeading, interval);
      //#3, page 208 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // скасуйте анімацію за допомогою кліка.

      // $("#heading").click(function () {
      //   clearInterval(animation);
      // });
      //#4, page 208 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Створіть гру "Клацни по заголовку".
      let times = 0;

      $("#heading").click(function () {
        clearInterval(animation)
        times += 1;
        interval /= 2;
        if (times < 5) {
          $("#heading").text(`You caught me ${times} times!`);
          animation = setInterval(moveHeading, interval);
        } else {
          clearInterval(animation);
          $("#heading").text("You Win!");
        }
      });