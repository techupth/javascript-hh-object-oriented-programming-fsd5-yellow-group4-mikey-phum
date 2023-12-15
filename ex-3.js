//  Start coding here
import { create } from "domain";
import { nanoid } from "nanoid";

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(posts) {
    this.posts.push(posts);
  }

  sharePost() {
    console.log(`You've shared post ${this.posts} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }

  addPost(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }

  addLike() {
    this.like++;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(createdBy, postTitle) {
    console.log(
      `Notification: ${createdBy} has just commented on this post—"${postTitle}”`
    );
  }
}
