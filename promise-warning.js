// LICENSE : MIT
"use strict";
process.on('warning', (warning) => {
    console.log(warning);
    // UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): This was rejected
});
const p = Promise.reject('This was rejected');