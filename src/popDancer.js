var PopDancer = function(top, left, timeBetweenSteps){

  // make this a subclass
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.setPosition(top, left);
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.step();
  // // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    console.log("inside PopDancer.prototype.step");

    Dancer.prototype.step.call(this);
    this.$node.toggle();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
