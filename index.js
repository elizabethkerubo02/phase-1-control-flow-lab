function scuberGreetingForFeet(feet){
  if(feet <= 400){
    return "This one is on me!";
  }else if(feet = 2000 && feet <= 2500){
    return "I will gladly take your thirty bucks.";

  }else{
    feet > 2500;
    return "No can do."
  }
};
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  // Write your code here!
  return(city === "NYC" )? "Ok, sounds good.": "No go.";
}
ternaryCheckCity("NYC");

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
     default:
      return "Bye."

  }

}
switchOnCharmFromTip("generous");