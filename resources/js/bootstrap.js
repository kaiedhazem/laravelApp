window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
     require('admin-lte');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
 
 import Echo from 'laravel-echo';

 window.Pusher = require('pusher-js');

if(JSON.parse(localStorage.getItem('user')) !==null){
 window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a551442057fe12ed4cce',
    cluster: 'mt1',
    encrypted : true,
    //authEndpoint: 'http://localhost/broadcasting/auth',
   
     auth:{

     headers: {
        Authorization: 'Bearer ' +  JSON.parse(localStorage.getItem('user'))['token'] ,
        Accept: 'application/json'
      }
    },
    
    
    
   
 });
}
else {
 window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'a551442057fe12ed4cce',
 
    cluster: 'mt1',
    encrypted : true,
    
   
 });
}
