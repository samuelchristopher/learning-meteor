if (Meteor.isClient) {
  Template.body.helpers({
    todos: [
      {
        title: 'Todo #1'
      },
      {
        title: 'Todo #2'
      },
      {
        title: 'Todo #3'
      },
    ]
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
