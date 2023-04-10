var xhr = new XMLHttpRequest();

xhr.onload = function() {

if (xhr.status === 200) {

var response = xhr.responseXML;

var events = response.getElementsByTagName('event');

for (var i = 0; i < events.length; i++) {

var container, image, location, city, newline;

container = document.createElement('div');

container.className = 'event';

image = document.createElement('img');

location.appendChild(newline);

location.insertBefore(city, newline);

image.setAttribute('src', getNodeValue (events[i], 'map'));

(getNodeValue (events[i], 'map')));

image.appendChild(document.createTextNode

container.appendChild (image);

3 location = document.createElement('p');

city = document.createElement('b');

newline document.createElement('br');

city.appendChild(document.createTextNode (getNodeValue (events[i], 'location')));

container.appendChild(location);

location.appendChild(document.createTextNode (getNodeValue (events[i], 'date')));

xhr.open('GET', 'data/data.xml', true);

xhr.send(null);


document.getElementById('content').appendChild(container);

[function getNodeValue(obj, tag) {

4 return obj.getElementsByTagName(tag) [0].firstChild.nodeValue;

}
};