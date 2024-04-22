/**
 * Connect as a public user
 */

import { io } from 'socket.io-client';

// URL to your Strapi instance
const SERVER_URL = 'http://154.53.59.178:30002';

// API Token from Settings -> Global Settings -> API Tokens in the dashboard
const ACCESS_TOKEN = '4b488384c7bd5d1a30ff2d0190bb639e31a042f2dbcbeb330879e179c1b627b473045f52edcb242cc512842457c8205396a8e892cf65659b6d5ace7066b73b5cf2237a0c59961dc0b1f379c359441086e2f7c7a1f15359625deae7902e24b4fcf7bab46d30c9017f21b7526e52d2cef366298e11688caf176e5868edaf1260b9';

// Connect the socket with authentication
const socket = io(SERVER_URL)

// Wait until socket connects before adding event listeners
socket.on('connect', () => {
    console.log('Socket connected successfully.');

    // Listen for blog-related events
    socket.on('Reactions:create', (data) => {
        console.log('Blog created!');
        console.log(data);
    });

    socket.on('Reactions:update', (data) => {
        console.log('Blog updated!');
        console.log(data);
    });

    socket.on('Reactions:delete', (data) => {
        console.log('Blog deleted!');
        console.log(data);
    });
});
