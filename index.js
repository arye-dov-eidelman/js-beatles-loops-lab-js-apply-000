function theBeatlesPlay(musicians, instruments){
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  for (let i = 0; facts.length > i; i++){
  facts[i] += "!!!"
  }
  return facts;
}

function iLoveTheBeatles(num){
  var result = []
  do {
    result.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return result;
}
