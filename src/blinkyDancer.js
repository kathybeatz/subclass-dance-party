var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  // make this a subclass
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log("what is this? ", this);
  this.oldStep = this.step;
  this.oldStep();

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

    var callCount = 0;

    // call the old version of step at the beginning of any call to this new version of step
    // makeDancer.prototype.call(this);
    // this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    callCount++;
};

// var test = new makeBlinkyDancer(100, 100, 100);
// console.log("what is $node? ", test.$node);
