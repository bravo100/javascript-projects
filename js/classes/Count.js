export default class Count {
	constructor() {
		if (Count.inst instanceof Count) return Count.inst;
		this.count = 1;
		Count.inst = this;
	}
	getCount() {
		return parseInt(this.count);
	}
	setCount(count = 1) {
		this.count += count;
		return this;
	}
}
