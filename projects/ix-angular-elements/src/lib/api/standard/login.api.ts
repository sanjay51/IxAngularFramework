import { Utils } from '../../utils';
import { PostAPI } from '../post-api';
import { Resource } from '../resource';

export class LoginAPI extends PostAPI {
    public static API_NAME: string = "login";

    email: string;
    password: string;

    constructor(email: string, password: string) {
        super();
        this.email = email;
        this.password = password;
    }

    getBody() {
        return {
            "email": this.email,
            "password": this.password
        }
    }    
    
    validate() {
        Utils.assertNotEmpty(this.email, "email");
        Utils.assertNotEmpty(this.password, "password");
    }
    
    getResource(): Resource {
        return new Resource("sessions");
    }
}