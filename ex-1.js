class EmailNotification {
  constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
}

class SMSNotification {
  constructor(notificationId, createdTime, content, phoneNumber) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.phoneNumber = phoneNumber;
  }

  send() {
    console.log(`Notification has been sent to ${this.phoneNumber}`);
  }
}

const obj1 = new EmailNotification(
  "huieraghvuijav",
  Date.now(),
  "sent bro",
  "mmm@gmail.com"
);

const obj2 = new SMSNotification(
  "uhrui8482173jke1",
  Date.now(),
  "Hey ha",
  "012-345-6789"
);

obj1.send();
obj2.send();
