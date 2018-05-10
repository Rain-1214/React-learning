import { ClassNum } from './class';


export class Grade {

    constructor(
        public classes: ClassNum[],
        public id?: number,
        public grade?: number,
        public gradeName?: string,
    ) {}

}
