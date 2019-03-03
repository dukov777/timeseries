
export class Student {
    full_name: string;
    constructor(public name:string) {
        this.full_name = name;
    }

    getName() : string {
        return this.full_name;
    }
}
