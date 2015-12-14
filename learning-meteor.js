Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: () => {
      return Resolutions.find();
    }
  });

  Template.body.events({
    'submit .new-resolution': (event) => {
      event.preventDefault();
      let title = event.target.title.value;
      Resolutions.insert({
        title: title,
        createdAt: new Date()
      });

      event.target.title.value = '';
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
