class Group {
    constructor () {
        this.group = [];
    }
   
    add (item) {
        if (!this.group.includes(item)) {
            this.group.push(item);
        }
    }
    
    delete (item) {
        
        let index = this.group.indexOf(item);
        if (index >= 0) {
            this.group = [
                ...this.group.slice(0, this.group.indexOf(item)) , 
                ...this.group.slice(this.group.indexOf(item) + 1)
            ]; 
        }
    }

    has (item) {
        return this.group.includes(item);
    }

    static from (collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }

        return group;
    }

    [Symbol.iterator] () {
        return new GroupIterator(this);
    }
};

class GroupIterator {
    constructor (group) {
        this.group = group.group;
        this.position = 0;
    }

    next () {
        if (this.position >= this.group.length) {
            return {
                done: true
            };
        }

        let value = this.group[this.position];
        this.position++;
        return {
            value,
            done: false
        };
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}