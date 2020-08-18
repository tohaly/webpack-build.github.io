export default class DateCounter {
  constructor() {
    this.START_ACTION = 'Акция стартовала!';
    this.START_DATE = '09/18/2020';
    this.counter = this.counter.bind(this);
    this.daysLeftElem = document.querySelector('.lead__days-left');
    this.textAboveDate = document.querySelector('.lead__start');
    this.DAYS = ['день', 'дня', 'дней'];
  }

  counter() {
    return -Math.floor((new Date() - new Date(this.START_DATE)) / (24 * 60 * 60 * 1000));
  }

  declension(nums) {
    const newNums = nums % 10;

    if (newNums > 10 && newNums < 20) {
      return this.DAYS[2];
    }

    if (newNums > 1 && newNums < 5) {
      return this.DAYS[1];
    }

    if (newNums === 1) {
      return this.DAYS[0];
    }

    return this.DAYS[2];
  }

  render() {
    if (this.counter() <= 0) {
      this.daysLeftElem.textContent = this.START_ACTION;
      this.textAboveDate.textContent = '';
      return;
    }
    this.daysLeftElem.textContent = `${this.counter()} ${this.declension(this.counter())}`;
  }
}
