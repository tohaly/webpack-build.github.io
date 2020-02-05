export default class DateCounter {
  constructor() {
    this.startDate = '04/18/2020';
    this.counter = this.counter.bind(this);
    this.daysLeftElem = document.querySelector('.lead__days-left');
    this.textAboveDate = document.querySelector('.lead__start');
    this.days = ['день', 'дня', 'дней'];
  }

  counter() {
    return -Math.floor((new Date() - new Date(this.startDate)) / (24 * 60 * 60 * 1000));
  }

  declension(nums) {
    const newNums = nums % 10;

    if (newNums > 10 && newNums < 20) {
      return this.days[2];
    }

    if (newNums > 1 && newNums < 5) {
      return this.days[1];
    }

    if (newNums === 1) {
      return this.days[0];
    }

    return this.days[2];
  }

  render() {
    if (this.counter() <= 0) {
      this.daysLeftElem.textContent = 'Акция стартовала!';
      this.textAboveDate.textContent = '';
      return;
    }
    this.daysLeftElem.textContent = `${this.counter()} ${this.declension(this.counter())}`;
  }
}
