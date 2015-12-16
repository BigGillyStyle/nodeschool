var args = process.argv;

if (args.length < 3) {
  console.log(0);
} else {
  args.shift();
  args.shift();
  var sum = args.reduce(function(prev, curr) {
    return Number(prev) + Number(curr);
  });

  console.log(sum);
}
