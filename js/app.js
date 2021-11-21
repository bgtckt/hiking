"use strict";
//Компоненты Vue для разделов resources, places и basic-classes

const AppResources = {
  data() {
    return {
      title: 'Hiking resources for your next hike',
      resources: []
    }
  },
  async created() {
    try {
      const response = await fetch('https://api.jsonbin.io/b/61851822dfffdf47a490a25d', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'secret-key': '$2b$10$zSd0ohZ8a/hueRrKb.vCUOJ9bKrHBi.lzXYggmzIv1SZZzwMrzSla'
        }
      });
      const data = await response.json();
      if(!data) {
        throw new Error('Resources list is empty now. Please reload this page.')
      }
      this.resources = data;
    } catch(e) {
      console.error(e);
    }
  }
};

Vue.createApp(AppResources).mount('#app-resources');

const AppPlaces = {
  data() {
    return {
      title: 'Places to visit in autumn',
      places: [
        {
          caption: 'Old Rag Summit',
          text: 'The journey to Old Rag is one of the most popular in the mid-Atlantic, and from the summit, it’s easy to see why.',
          length: '14.3 km',
          url: 'img/old_rag.png',
        },
        {
          caption: 'Clouds Rest',
          text: 'You can see many of the major mountains and a lot of the features of the Yosemite National Park from this vantage point.',
          length: '12.1 km',
          url: 'img/clouds_rest.png',
        },
        {
          caption: 'Trail Ridge Road',
          text: 'Trail Ridge Road offers visitors thrilling views, wildlife sightings and spectacular alpine wildflower exhibitions.',
          length: '10.8 km',
          url: 'img/trail_ridge_road.png',
        }
      ],
      warning: 'COVID-19 update: We are offering some of our top classes and day trips with extra precautions. Text us: hikinglife@yahoo.com.',
      currentIndex: 0,
      windowWidth: window.visualViewport.width
    }
  },
  methods: {
    showWarning(idx) {
      this.places[idx].text = this.warning;
    },
    showWarningMob() {
      this.places[this.currentIndex].text = this.warning;
    },
    setCurrent(i) {
      this.currentIndex = i;
    }
  },
  computed: {
    currentPlace() {
      return this.places[this.currentIndex];
    }
  }
};

Vue.createApp(AppPlaces).mount('#app-places');

const AppClasses = {
  data() {
    return {
      title: 'Hiking and camping classes',
      classes: [
        {
          caption: 'Backpacking',
          text: 'Our instructors explain how to choose and use equipment to maximize your comfort. You will also learn about campsite selection, camp cooking, water treatment and Leave No Trace etiquette.',
          duration: '8 hrs',
          price: '$200'
        },
        {
          caption: 'Hiking',
          text: 'From easy, low-elevation destinations to conditioning hikes where you will reach a summit, wehave a hike for you. Learn about our beginning hiker seminars to help you be prepared before heading out.',
          duration: '10 hrs',
          price: '$300'
        },
        {
          caption: 'Camping',
          text: 'Our instructors will show you where to position your kitchen area, food storage, and tent site formaximum safety and comfort. You will learn practical camping skills for use in every situation.',
          duration: '7 hrs',
          price: '$250'
        }
      ],
      currentIndex: 0,
      windowWidth: window.visualViewport.width
    }
  },
  methods: {
    nextClick() {
      this.currentIndex !== this.classes.length - 1 ? this.currentIndex += 1 : '';
    },
    prevClick() {
      this.currentIndex !== 0 ? this.currentIndex -= 1 : '';
    }
  },
  computed: {
    currentClass() {
      return this.classes[this.currentIndex];
    },
    disabledPrev() {
      return this.currentIndex === 0;
    },
    disabledNext() {
      return this.currentIndex === this.classes.length - 1;
    }
  }
};

Vue.createApp(AppClasses).mount('#app-classes');
