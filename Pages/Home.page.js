var HomePage = function () {

    this.mainHeader = $$('.nav>ul>li');
    this.title = "Education Advances | Hobsons";
    this.logo = $('#logo');

    this.Solutions = this.mainHeader.get(1);
    this.solutionsLinks = $$('.nav>ul>li:nth-of-type(2)>ul li a');
    
    this.Resources = this.mainHeader.get(3);
    this.resourcesLinks = $$('.nav>ul>li:nth-of-type(4)>ul li');

    this.About = this.mainHeader.get(4);
    this.aboutLinks = $$('.nav>ul>li:nth-of-type(5)>ul li');

    this.rightTopArrow = $('#home-carousel .owl-next');
    this.rightTopBox = $('#home-carousel .owl-item:nth-of-type(8) a');
    this.leftTopArrow = $('#home-carousel .owl-prev');
    this.leftTopBox = $('#home-carousel .owl-item:nth-of-type(4) a');

    this.rightBottomArrow = $('#res-carousel .owl-next');
    this.rightBottomBox = $('#res-carousel .owl-item:nth-of-type(10) a');
    this.leftBottomArrow = $('#res-carousel .owl-prev');
    this.leftBottomBox = $('#res-carousel .owl-item:nth-of-type(6) a');

    this.learnMore = $('.pagetitle.c a');
    this.resourcesBottom = $('.fullwidth.home-resources h2');

    this.careers = element(by.linkText('Careers'));
    this.cookieNotice = $('#cookienotice button');
    this.locations = $('.careers-locations h4');
    this.bottomPage = $('.social')
};

module.exports = new HomePage();