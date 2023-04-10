var xhr = new XMLHttpRequest();
xhr.onload = function() {
5
};


if (xhr.status === 200) {
};
document.getElementById('content').innerHTML = xhr.responseText; // Update
2 xhr.open('GET', 'data/data.html', true); 3 xhr.send(null);