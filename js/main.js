/*global define*/

define([
        'underscore',
        'backbone'
    ], function (_, Backbone) {
        'use strict';

        var GroupModel = Backbone.Model.extend({
            url: '../../json/groups.json',

            initialize: function() {
            },

            defaults: {
                id: '',
                courseId: '',
                teacherId: '',
                studentId: '',
                name: '',
                description: ''
            },

            validate: function(attributes) {
                if ( !attributes.id ){
                    return 'Fill id!'};
                if (!attributes.courseId){
                    return 'Fill courseId!'};
                if (!(attributes.courseId%1)==0){
                    return 'Course ID must be integer!'};
                if (!_.isString('attributes.name')) {
                    return 'Name must be string!'};
            }
        })
    },

    parse: function(response, options)  {
    return response;
});

return GroupModel;
});

return GroupModel;
});

define([
    'underscore',
    'backbone',
    'models/groups'
], function (_, Backbone, GroupModel) {
    'use strict';

    var GroupsCollection = Backbone.Collection.extend({
        model: GroupsModel,
        url:'../../json/groups.json'
    });

    return GroupsCollection;
});



var columns = [{
    name: "id", // The key of the model attribute
    label: "ID", // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: Backgrid.IntegerCell.extend({
        orderSeparator: ''
    })
}, {
    name: "courseId",
    label: "Course",
    // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
    cell: "integer" // An integer cell is a number cell that displays humanized integers

}, {
    name: "teacherId",
    label: "Teacher",
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
}, {
    name: "studentId",
    label: "Group head",
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
    //"number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
}, {
    name: "name",
    label: "Name",
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
}, {
    name: "description",
    label: "Description",
    cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
}];

// Initialize a new Grid instance
var grid = new Backgrid.Grid({
    columns: columns,
    collection: GroupsCollection
});

// Render the grid and attach the root to your HTML document
$("#example-1-result").append(grid.render().el);

// Fetch some countries from the url
GroupsCollection.fetch({reset: true});


/*

 var GroupsCollection = Backbone.Collection.extend({
 model: GroupModel,
 url: "../json/groups.json",
 state: {
 pageSize: 15
 },
 mode: "client" // page entirely on the client side
 });

 var groupsCollection = new GroupsCollection();

 // Set up a grid to use the pageable collection
 var groupGrid = new Backgrid.Grid({
 columns: [{
 // enable the select-all extension
 name: "",
 cell: "select-row",
 headerCell: "select-all"
 }].concat(columns),
 collection: GroupsCollection
 });

 // Render the grid
 var $example2 = $("#example-2-result");
 $example2.append(pageableGrid.render().el)

 // Initialize the paginator
 var paginator = new Backgrid.Extension.Paginator({
 collection: GroupsCollection
 });

 // Render the paginator
 $example2.after(paginator.render().el);

 // Initialize a client-side filter to filter on the client
 // mode pageable collection's cache.
 var filter = new Backgrid.Extension.ClientSideFilter({
 collection: GroupsCollection,
 fields: ['name']
 });

 // Render the filter
 $example2.before(filter.render().el);

 // Add some space to the filter and move it to the right
 $(filter.el).css({float: "right", margin: "20px"});

 // Fetch some data
 GroupsCollection.fetch({reset: true});
*/