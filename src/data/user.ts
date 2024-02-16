import axios, { AxiosInstance } from "axios";

export type UserType = {
    _id: string;
    name: string;
}

const INITIAL_USER: UserType[] = [
    {
        _id: '1',
        name: 'Testing'
    }
];

class UserApi {
    private users: UserType[] = INITIAL_USER;
    private connection: boolean = false;
    private server: AxiosInstance = axios.create({
        baseURL: 'http:localhost:5000/api',
        headers: {
            'Content_Type': 'application/json'
        }
    });
    
    constructor() {
        this.server.get('/').then(() => this.connection = true).catch(() => this.connection = false);
    }

    async getUsers(): Promise<UserType[]> {
        if (this.connection) {
            const response = await this.server.get('/users');
            this.users = response.data;
        }
        return this.users;
    }
}

const User = new UserApi();

export default User;