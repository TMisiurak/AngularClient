import { Position } from './position';
import { Gender } from './gender';

export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    genderId: number;
    positionId: number;
    createdAt: Date;
    position: Position;
    gender: Gender;

    constructor() {
        this.position = new Position();
        this.gender = new Gender();
    }
}
