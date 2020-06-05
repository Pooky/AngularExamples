import { UserInterface } from "./UserInterface";

export class User implements UserInterface {

    userId: number;
    title: string;
    text: string;

    constructor(userId: number, title: string, text: string) { 

        this.userId = userId;
        this.title = title;
        this.text = text;

    }
}