import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const apiKey = process.env.MAPS_API;

export const apiUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey;
