/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {


    // Application Constructor
    initialize: function(stor) {
        this.bindEvents();
        this.storage = stor;//window.localStorage'';
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('Device ready');
        app.receivedEvent('deviceready');
        /*$(document).on('load', function(){
          $("#homelocation").countrySelect({
            defaultCountry: 'nz'

          });
        });*/

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    login: function(){
        if(!this.storage.getItem('runbefore')){
          $.mobile.changePage('#profile');
          this.storage.setItem('runbefore',true);
        }else{
          $.mobile.changePage('#fixes');
        }
        /*return false;*/
    },
    setLoggedInUsername: function(username){
      this.storage.setItem('username',username);
    },
    getLoggedInUsername: function(){
      return this.storage.getItem('username');
    },
    saveUserProfile: function(uname,homelocation,dob){
      //var username = this.getLoggedInUsername();
      //var userObj = {'name': name,'homelocation':homelocation,'dob':dob};
      //this.storage.setItem()
      this.storage.setItem('uname',uname);
      this.storage.setItem('homelocation',homelocation);
      this.storage.setItem('dob',dob);
      return true;
    },
    getUserProfileData: function(){
      var ret = {};
      ret.uname = this.storage.getItem('uname');
      ret.homelocation = this.storage.getItem('homelocation');
      ret.dob = this.storage.getItem('dob');
      return ret;
    }/*,
    "fomos": {
          "0": {
              "fomoname": "Fomo 1",
              "description": "",
              "points": 20
          },
          "1": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "2": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "3": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "4": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "5": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "6": {
              "fomoname": "",
              "description": "",
              "points": 20

          },
          "7": {
              "fomoname": "",
              "description": "",
              "points": 20

          }
      },
      "fixes": {
          "0": {
              "packname": "Pack 1",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus mauris et leo tincidunt finibus. Nam ac lacinia turpis. Integer rutrum nibh non sapien interdum varius. Fusce consectetur dolor eu tincidunt consequat. ",
              "fomos": [0, 1, 2]
          },
          "1": {
              "packname": "Pack 2",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus mauris et leo tincidunt finibus. Nam ac lacinia turpis. Integer rutrum nibh non sapien interdum varius. Fusce consectetur dolor eu tincidunt consequat. ",
              "fomos": [3, 4, 5]
          },
          "2": {
              "id": 2,
              "packname": "Pack 3",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus mauris et leo tincidunt finibus. Nam ac lacinia turpis. Integer rutrum nibh non sapien interdum varius. Fusce consectetur dolor eu tincidunt consequat. ",
              "fomos": [1, 3, 4, 2]
          }

      },
      fixlisthtml: function(fix_id) {
          var fixcontainer = '<div data-role="collapsible"></div>';
      }*/

};
console.log('initialising app');
app.initialize(window.localStorage);
