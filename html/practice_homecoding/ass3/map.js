
function MyMap(){
	map={};
	m_size=0;
}
MyMap.prototype.put = function(key,value){
	map[key]=value;
	m_size++;
}
MyMap.prototype.remove = function(key){
	if(map[key]){
		delete map[key];
		m_size--;
	}
}
MyMap.prototype.get = function(key){
	return map[key];
}
MyMap.prototype.size = function(){
	return m_size;
}
MyMap.prototype.clear = function(){
	delete map;
	m_size = 0;
}

