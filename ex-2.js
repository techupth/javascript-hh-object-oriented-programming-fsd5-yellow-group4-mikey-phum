class Notification {
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

class EmailNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

const email = new EmailNotification(
  "12ju29sdjk23m",
  Date.now(),
  "Sented",
  "receiver@wow.com"
);

console.log(email);
email.send();

class SMSNotification extends Notification {
  constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
}

const SMS = new SMSNotification("bhdvuif", Date.now(), "OTP", "012-345-678");

SMS.send();
