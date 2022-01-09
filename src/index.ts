import { User } from './classes/User';
import { Company } from './classes/Company';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

console.log('Hello world!');
const user = new User();
const company = new Company();

console.log(user);
console.log(company);
