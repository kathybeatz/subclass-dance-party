var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="dancer"></span>');
  // console.log("node: ", this.$node);
  // console.log("what is $node an instance of? ", $node instanceof jQuery);
  // make this a subclass

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  console.log("is step function here? ", $node);
  // this.oldStep = this.step;
};


makeBlinkyDancer.prototype.step = function() {

    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.call(this);
    // var test = oldStep();
    console.log("this: ", this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


var test = new makeBlinkyDancer(100, 100, 100);
console.log("test top: ", test.top);
console.log("test $node: ", test.$node);
console.log("what is $node an instanceof? ", test.$node instanceof jQuery);
console.log("test step: ", test.step());

