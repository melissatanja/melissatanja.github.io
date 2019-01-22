function trade(tradeFrom, tradeTo){


  if(tradeFrom === "red"){

    if(tradeTo === "b"){

      if(Blue[0] > 0 && Red[1] > 0){

        Blue[0] -= 1;
        Red[0] += 1;

        Red[1] -= 1;
        Blue[1] += 1;

      }else{

        window.alert("no birds available");

      }

    }

    if(tradeTo === "g"){

      if(Green[0] > 0 && Red[2] > 0){

        Green[0] -= 1;
        Red[0] += 1;

        Red[2] -= 1;
        Green[2] += 1;

      }else{

        window.alert("no birds available");

      }

    }
    if(tradeTo === "y"){

      if(Yellow[0] > 0 && Red[3] > 0){

        Yellow[0] -= 1;
        Red[0] += 1;

        Red[3] -= 1;
        Yellow[3] += 1;

      }else{

        window.alert("no birds available");

      }

    }

  }


  if(tradeFrom === "blue"){

    if(tradeTo === "r"){

      if(Red[1] > 0 && Blue[0] > 0){

        Blue[0] -= 1;
        Red[0] += 1;

        Red[1] -= 1;
        Blue[1] += 1;

      }else{

        window.alert("no birds available");

      }

    }

    if(tradeTo === "g"){

      if(Green[1] > 0 && Blue[2] > 0){

        Green[1] -= 1;
        Blue[1] += 1;

        Blue[2] -= 1;
        Green[2] += 1;

      }else{

        window.alert("no birds available");

      }

    }
    if(tradeTo === "y"){

      if(Yellow[1] > 0 && Blue[3] > 0){

        Yellow[1] -= 1;
        Blue[1] += 1;

        Blue[3] -= 1;
        Yellow[3] += 1;

      }else{

        window.alert("no birds available");

      }

    }

  }


  if(tradeFrom === "green"){

    if(tradeTo === "b"){

      if(Blue[2] > 0 && Green[1] > 0){

        Blue[2] -= 1;
        Green[2] += 1;

        Green[1] -= 1;
        Blue[1] += 1;

      }else{

        window.alert("no birds available");

      }

    }

    if(tradeTo === "r"){

      if(Red[2] > 0 && Green[0] > 0){

        Green[0] -= 1;
        Red[0] += 1;

        Red[2] -= 1;
        Green[2] += 1;

      }else{

        window.alert("no birds available");

      }

    }
    if(tradeTo === "y"){

      if(Yellow[2] > 0 && Green[3] > 0){

        Yellow[2] -= 1;
        Green[2] += 1;

        Green[3] -= 1;
        Yellow[3] += 1;

      }else{

        window.alert("no birds available");

      }

    }

  }


  if(tradeFrom === "yellow"){

    if(tradeTo === "b"){

      if(Blue[3] > 0 && Yellow[1] > 0){

        Blue[3] -= 1;
        Yellow[3] += 1;

        Yellow[1] -= 1;
        Blue[1] += 1;

      }else{

        window.alert("no birds available");

      }

    }

    if(tradeTo === "r"){

      if(Red[3] > 0 && Yellow[0] > 0){

        Yellow[0] -= 1;
        Red[0] += 1;

        Red[3] -= 1;
        Yellow[3] += 1;

      }else{

        window.alert("no birds available");

      }

    }
    if(tradeTo === "g"){

      if(Yellow[2] > 0 && Green[3] > 0){

        Yellow[2] -= 1;
        Green[2] += 1;

        Green[3] -= 1;
        Yellow[3] += 1;

      }else{

        window.alert("no birds available");

      }

    }

  }
  
}

//   //red user presses blue button
//   //blue user presses red button
//   if(rbird_b > 0 && bbird_r > 0){

//     rbird_b -= 1;
//     rbird_r += 1;

//     bbird_r -= 1;
//     bbird_b += 1;

//   }else{

//     window.alert("no birds available");

//   }

//   //red user presses green button
//   //green user presses red button
//   if(rbird_g > 0 && gbird_r > 0){

//     rbird_g -= 1;
//     rbird_r += 1;

//     gbird_r -= 1;
//     gbird_g += 1;

//   }else{

//     window.alert("no birds available");

//   }

//   //red user presses yellow button
//   //yellow user presses red button
//   if(rbird_y > 0 && ybird_r > 0){

//     rbird_y -= 1;
//     rbird_r += 1;

//     ybird_r -= 1;
//     ybird_y += 1;

//   }else{

//     window.alert("no birds available");

//   }

//   //green user presses yellow button 
//   //yellow user presses green button
//   if(gbird_y > 0 && ybird_g > 0){

//     gbird_y -= 1;
//     gbird_g += 1;

//     ybird_g -= 1;
//     ybird_y += 1;

//   }else{

//     window.alert("no birds available");

//   }

//   //green user presses blue button
//   //blue user presses green button
//   if(gbird_b > 0 && bbird_g > 0){

//     gbird_b -= 1;
//     gbird_g += 1;

//     bbird_g -= 1;
//     bbird_b += 1;

//   }else{

//     window.alert("no birds available");

//   }

//   //blue user presses yellow button
//   //yellow user presses blue button
//   if(bbird_y > 0 && ybird_b > 0){

//     bbird_y -= 1;
//     bbird_b += 1;

//     ybird_b -= 1;
//     ybird_y += 1;

//   }else{

//     window.alert("no birds available");

//   }

// }

// function tradeRequest(){

//   //red user 
//   if(user === "red"){

//     //blue trade button pressed
//     if(trade_blue === 1){

//       if(blue_bird > 0){

//         //giving blue bird
//         blue_bird -= 1;

//         //blue user
//         if(user = 1){

//           //receiving blue bird
//           blue_bird += 1;

//         }
//       }

//     }else if(green_bird > 0){

//       //trading green bird
//       green_bird -= 1;

//       if(user = 1){

//         //receiving green bird
//         green_bird += 1;

//       }

//     }else if(yellow_bird > 0){

//       //trading yellow bird
//       yellow_bird -= 1;

//       if(user = 1){

//         //receiving yellow bird
//         yellow_bird += 1;

//       }

//     }else{

//       window.alert("No birds available");

//     }

//   }
// }

//     //trading with green user
//     if(trade_green === true){



//     }

//     //trading with yellow user
//     if(trade_yellow === true){



//     }

//   }

// }