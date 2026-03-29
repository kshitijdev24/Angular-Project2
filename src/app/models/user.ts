export class User {
    // private userName: string;
    // private password: string;
    // private role: string;

    constructor(private userName: string, private password: string, private role: string) { }

    public getUserName(): string{
        return this.userName;
    }
    public setUserName(userName: string):void{
        this.userName = userName;
    }
    public getPassword(): string{
        return this.password;
    }
    public setPassword(password: string):void {
        this.password = password;
    }
    public getRole(): string{
        return this.role;
    }
    public setRole(role: string):void {
        this.role = role;
    }

}
