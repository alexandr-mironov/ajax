var ajax=function(obj){
	if(obj.url==void 0){
		console.err('Error: url not defined!');
		throw DOMException('Error: url not defined!');
	}
	self=this;
	self._url=obj.url;
	self._method=(obj.method!=void 0 && (obj.method instanceof String))?obj.method.toUpperCase():'GET';
	self._xhr=new XMLHttpRequest();
	self._data=(obj.data!=void 0  && data instanceof FormData)?obj.data:new FormData();
	self._header=(obj.headers instanceof Object && Object.keys(obj.headers).length>0)?obj.headers:{};
	self._beforeSend=(obj.beforeSend)?obj.beforeSend:null;
	self._onError=(obj.beforeSend)?obj.beforeSend:null;
	self._onSuccess=(obj.success)?obj.success:null;
	console.log([this]);
	if(self._method=='POST'){
		if(Object.keys(obj.data).length>0 && obj.data instanceof Object && !(obj.data instanceof FormData)){
			//for(let [name,value] of data){
			//	f.append(name,value);
			//}
			//use this for IE 11- or something
			for(var i in obj.data){
				if(obj.data[i]!=null){
					self._data.append(i,obj.data[i]);
				}
			}
		}
	}else if(self._method=='GET'){
		if(Object.keys(this._data).length>0){
			url="";
			for(let [name,value] of self._data){
				url+=name+"="+value+"&";
			}
			url=url.slice(0,-1);
			self._url+=((url.length>0)?((self._url.indexOf("?")>-1)?"?":"&")+url:'');
		}
	}
	self._xhr.open(self._method,self._url);
	if(Object.keys(self._header).length>0){
		for(let [name,value] of self._header){
			self._xhr.setRequestHeader(name,value);
		}
	}
	self._xhr.onreadystatechange=function(){
		if(self._xhr.readyState!=4){
			return;
		}
		if(self._xhr.readyState==4){
			if(self._xhr.status==200){
				if(self._onSuccess!=null){
					return self._onSuccess(self._xhr.responseText);
				}
			}else{
				if(self._onError!=null){
					return self._onError();
				}
			}
		}
	};
	if(self._beforeSend!=null){
		self._beforeSend();
	}
	self._xhr.send(self._data);
};
ajax({url:'https://amironov.city-travel.ru/api/message/get'});