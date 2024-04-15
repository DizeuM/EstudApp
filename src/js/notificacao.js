function requestPermission() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }
  
  Notification.requestPermission();
}

function nonPersistentNotification() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }
  
  try {
    var notification = new Notification("Aprensentação de UX - Hoje às 09:40 na sala 404");
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}