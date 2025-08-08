export default class UserInfo {
  constructor({ name, job, avatar }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
      avatar: this._avatar.src,
    };
  }

  setUserInfo({ name, job, avatar }) {
    this._name.textContent = name;
    this._job.textContent = job;
    this._avatar.src = avatar;
  }

  setUserAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}
