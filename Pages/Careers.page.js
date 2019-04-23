var Careers = function () {
    this.officeLocations = $('.careers-locations h2')
    this.locations = $$('.careers-locations h4');
    this.expectedLocations = [ 'Cincinnati, OH', 'Arlington, VA', 'Remote' ];

};

module.exports = new Careers();