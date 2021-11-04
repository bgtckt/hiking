const AppResources = {
  data() {
    return {
      title: 'Hiking resources for your next hike',
      resources: [
        {
          caption: 'Before you go',
          text: 'Start by making sure you’re carrying the Ten Essentials. This is a collection of gear and clothing that all hikers should carry whenever they step onto the trail.',
          date: '15.10.21',
          rating: 5
        },
        {
          caption: 'What to wear',
          text: 'Choose clothing made of quick-drying, moisture-wicking fabrics, such as wool or polyester. Avoid cotton, which takes a long time to dry when wet.',
          date: '19.10.21',
          rating: 4
        }
      ]
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
      warning: 'COVID-19 update: We are offering some of our top classes and day trips with extra precautions. Text us: hikinglife@yahoo.com.'
    }
  },
  methods: {
    showWarning(idx) {
      this.places[idx].text = this.warning;
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
          text: 'Our instructors explain how to choose and use equipment to maximize your comfort and fun. You will also learn about campsite selection, camp cooking, water treatment and Leave No Trace etiquette.',
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
      warning: 'Unfortunately there are no available classes for today. Please wait weekly information update.'
    }
  }
};

Vue.createApp(AppClasses).mount('#app-classes');
