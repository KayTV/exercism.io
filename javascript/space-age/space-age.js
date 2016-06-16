function SpaceAge(seconds) {
  this.seconds = seconds;
  var age = this.seconds;
  function OnEarth(age) {
    return age * 365.25;

  }
}
