const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  
  // C style loop
  // for (let i = 0; i < sentence.length; i++) {
  //     setTimeout(() => {
  //         process.stdout.write(sentence[i]);
  //         if (i === sentence.length - 1) {
  //             console.log('\n');
  //           } 
  //           }, i * 50);
  //       };

  //For of loop
  let ms = 0;
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      counter++;
      if (counter === sentence.length) {
        console.log('\n');
      }
    }, ms);
    ms += 50;
  }
};

typewriter(sentence);