export class UserPost {
    _id: string;
    name: string;
    email: string;
    age: number;
    website: string;
    post: string;

    constructor(name:string, age:number,email:string, website: string, post:string){
        this.name = name;
        this.email = email;
        this.age = age;
        this.website = website;
        this.post = post;
    }
}
