/*global define*/

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
