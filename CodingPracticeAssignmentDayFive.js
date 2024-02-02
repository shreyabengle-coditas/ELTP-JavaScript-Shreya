function feast(beast, dish) {
    //your function here
      let beastLen=beast.length -1;
      let dishLen= dish.length-1;
      if(beast[0]=== dish[0] && beast[beastLen]===dish[dishLen]){
        return true;
      }
      else return false;
    }