# ajax
very very light weight ajax on plain js

How to use:
```
ajax({
    url: 'https://someUrl.toSomeDomain', //required, string, just url you want to send request
    method: 'GET' or 'POST', //not required, string, in this moment only GET or POST are acceptable
    data: {}, //not required, object or FormData object, you can eazily put here some form, for ex.: document.querySelector('form[name="someName"]') and it will work
    header: {}, //not required, object 
    beforeSend: function(){}, //not require, function or callback
    onError: function(){}, //not require, function or callback
    success: function(){}, //not require, function or callback
});
```
