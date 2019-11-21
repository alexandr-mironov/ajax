var ajax=function(url,method,data,callback){
	var xhr = new XMLHttpRequest(),
		f=(data instanceof FormData)?data:new FormData(),
		data=data || [],
		method=method.toUpperCase() ||'GET',
		url=url||'';

	if(method=='POST'){
		if(Object.keys(data).length>0 && data instanceof Object && !(data instanceof FormData)){
			//for(let [name,value] of data){
			//	f.append(name,value);
			//}
			//use this for IE 11- or something
			for(var i in data){
				if(data[i]!=null){
					f.append(i,data[i]);
				}
			}
		}
	}else if(method=='GET'){
		url+="?";
		for(let [name,value] of data){
			url+=name+"="+value+"&";
		}
	}

	xhr.open(method,url);
	xhr.setRequestHeader('Accept','application/json');
	xhr.onreadystatechange=function(){
		if(xhr.readyState != 4){
			return;
		}
		if(xhr.readyState==4){
			if(xhr.status==200){
				if(callback!=null){
					if(typeof callback === 'function'){
						return callback(xhr.responseText);
					}else{
						if(window[callback]!=void 0){
							callback = window[callback];
							return callback(xhr.responseText);
						}
					}
				}
			}
		}
	};
	xhr.send(f);
};