# ajax
very very light weight ajax on plain js

## Quick start
How to get:

Just add this in your source code 

//TODO: add version independed link

`<script src="https://github.com/alexandr-mironov/ajax/releases/download/v0.1/ajax.min.js"></script>`

How to use:

```
ajax({
    url: 'https://someUrl.atSomeDomain', //required, string, just url you want to send request
    method: 'GET' or 'POST', //not required, string, in this moment only GET or POST are acceptable
    data: {}, //not required, object or FormData object, you can eazily put here some form, for ex.: document.querySelector('form[name="someName"]') and it will work
    header: {}, //not required, object 
    beforeSend: function(){}, //not require, function or callback
    onError: function(){}, //not require, function or callback
    success: function(){}, //not require, function or callback
});
```
**url**: required, string, just url you want to send request

**method**: not required, string, in this moment only GET or POST are acceptable

**data**: not required, object or FormData object, you can eazily put here some form, for ex.: `new FormData(document.querySelector('form[name="someName"]'))` and it will work

**header**: not required, object 

**beforeSend**: not require, function or callback, function be executed before request been sended

**onError**: not require, function or callback, function be executed if request has no 200 answer

**success**: not require, function or callback, function be executed if request has 200 answer

## Browsers compatible

This will work with all new versions of browsers, it may be work on IE 11 (but i don't sure, cause can't install it on my Mac, only one thing may not work in IE - `let [name,value] of self._data` it eazy to replace with compatible code)

## Example

`ajax({url:'https://yandex.ru'});` //Send GET request to yandex.ru
