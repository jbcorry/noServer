angular.module('noServer')
.service('mainService', function() {

  var tabs = [
    {
      name: 'Home',
      view: 'home'
    },
    {
      name: 'Portfolio',
      view: 'portfolio'
    },
    {
      name: 'About Me',
      view: 'about'
    },
    {
      name: 'Resume',
      view: 'resume'
    },
    {
      name: 'Contact Me',
      view: 'contact'
    },
    {
      name: 'Bored?',
      view: 'connect4'
    },
  ]

  this.getTabs = function() {
    return tabs;
  }

  var aboutMe = [
    {
      name: 'Birthplace',
      desc: 'Fullerton, California'
    },
    {
      name: 'Hobbies',
      desc: 'Snowboarding, drawing, running, traveling'
    },
    {
      name: 'Bio',
      desc: 'I was born in 1992 in California, we then moved to Sandy, Utah in 1996 and we\'ve lived there ever since.  I graduated from Alta High School in 2010. Blah blah blah...hire me.'
    }

  ]

  this.getMyInfo = function() {
    return aboutMe;
  }

  var myContactInfo = [
    {
      name: 'Name',
      value: 'Jake Corry -',
    },
    {
      name: 'fa fa-envelope',
      value: 'jakecorry123@gmail.com'
    },
    {
      name: 'fa fa-phone',
      value: '801-913-5682'
    },
    {
      name: 'fa fa-linkedin-square',
      value: 'jakecorry@linked-in.com'
    },
    {
      name: 'fa fa-github-square',
      value: 'https://github.com/jbcorry'
    }
  ]

  this.getMyContactInfo = function() {
    return myContactInfo;
  }

  var portfolio = [
    {
      project: 'This is where I will put my first thing I\'m actually proud of',
    },
    {
      project: 'Then I\'ll put another here',
    },
    {
      project: 'and another',
    },
    {
      project: 'and another',
    },
  ]

  this.getPortfolio = function() {
    return portfolio;
  }

  var projects = [
    {
      name: 'Twitter Clone',
      path: '../../day10/twitterproject',
      image: '/images/twitter-pic.jpeg'
    },
    {
      name: 'NBA Routes',
      path: '../day1/nbaRoutes',
      image: '/images/nba.jpeg'
    },
    {
      name: 'Website Clone',
      path: '../../day4',
      image: '/images/troll.jpeg'
    },

  ]

  this.getProjects = function() {
    return projects;
  }

})
