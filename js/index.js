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
    initialize: function() {
        this.bindEvents();
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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		cargarMapa();
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:none;');
		
        console.log('Received Event: ' + id);
    }
};

var map;
        var marker;
		var imageBounds1;
var imageBounds2;
var imageBounds3;
var imageBounds4;
var rectangulo = new google.maps.Rectangle();
var oldmap1;
var oldmap2;
var oldmap3;
var oldmap4;
function cargarMapa() {
alert("hello");
					var mapOptions = {
						zoom: 17
					};
					map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			  
					marker = new google.maps.Marker({
					});
					var imageBounds = new google.maps.LatLngBounds(
						new google.maps.LatLng(18.860879329595857, -99.34311836957932), 
						new google.maps.LatLng(19.028447938103028, -99.18035387992859)
					);

					var oldmap = new google.maps.GroundOverlay("http://etpsoluciones.com/sistemas/distritos/images/mapa.png", imageBounds);
					//oldmap.setMap(map);
					
					var imageBounds1 = new google.maps.LatLngBounds(
                                                            new google.maps.LatLng(18.94471003021517, -99.34311836957932),
                                                            new google.maps.LatLng(19.02845554503654, -99.26152221858501));
                                                     
                                                     oldmap1 = new google.maps.GroundOverlay(
                                                            "images/1.png",
                                                            imageBounds1);
															
															var imageBounds2 = new google.maps.LatLngBounds(
                                                            new google.maps.LatLng(18.94471003021517, -99.26152221858501),
                                                            new google.maps.LatLng(19.02845554503654, -99.18035387992859));
                                                     
                                                     oldmap2 = new google.maps.GroundOverlay(
                                                            "images/2.png",
                                                            imageBounds2);
															
															var imageBounds3 = new google.maps.LatLngBounds(
                                                            new google.maps.LatLng(18.860879329595857, -99.26152221858501),
                                                            new google.maps.LatLng(18.94471003021517, -99.18035387992859));
                                                     
                                                     oldmap3 = new google.maps.GroundOverlay(
                                                            "images/3.png",
                                                            imageBounds3);
															
															var imageBounds4 = new google.maps.LatLngBounds(
                                                            new google.maps.LatLng(18.860879329595857, -99.34311836957932),
                                                            new google.maps.LatLng(18.94471003021517, -99.26152221858501));
                                                     
                                                     oldmap4 = new google.maps.GroundOverlay(
                                                            "images/4.png",
                                                            imageBounds4);
															
					
					
					
					
					

		  // Try HTML5 geolocation
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					marker.setPosition(pos);
					marker.setMap(map);
					
			/*	rectangulo.setBounds(imageBounds1);
					var limites = rectangulo.getBounds().contains(pos);
						if(limites)
						oldmap1.setMap(map);
						else{
						rectangulo.setBounds(imageBounds2);
					
						limites = rectangulo.getBounds().contains(pos);;
							if(limites)
								oldmap2.setMap(map);
							else{
								rectangulo.setBounds(imageBounds3);
								limites = rectangulo.getBounds().contains(pos);;
									if(limites)
										oldmap3.setMap(map);
									else{
											rectangulo.setBounds(imageBounds4);
											limites = rectangulo.getBounds().contains(pos);;
												if(limites)
													oldmap4.setMap(map);
												else{
													alert("su pisición no se encuentra en una sección identificada");
												}
									}
							}
						}		*/									
													oldmap1.setMap(map)
													oldmap2.setMap(map);
													oldmap3.setMap(map);
													oldmap4.setMap(map);
					
					
					map.setCenter(pos);
				}, function() {
				  handleNoGeolocation(true);
				});
			 } else {
				// Browser doesn't support Geolocation
				handleNoGeolocation(false);
			 }
		}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(18.93080713014078, -99.22439575195312),
    content: content
  };

  map.setCenter(options.position);
}

