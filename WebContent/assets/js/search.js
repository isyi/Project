var count = 0;
function fnAppendItem(){
	count++;
	
	var newSpan = document.createElement("span"); 
	
	newSpan.setAttribute("id","item_" + count);
	
	newSpan.innerHTML = window.event.target.value +"<input type='button' value='x' onclick='fnDeleteItem("+ count +")'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	
	var itemList = document.getElementById("itemList");
	itemList.appendChild(newSpan);			
}

function fnDeleteItem(idx){
	var item = document.getElementById("item_" + idx);
	
	if(item != null){
		item.parentNode.removeChild(item);
	}
	
}
function fnAppendItem2(){
	count++;
	
	var newSpan = document.createElement("span"); 
	
	newSpan.setAttribute("id","item_" + count);
	var choice = document.getElementById("language").value;
	
	newSpan.innerHTML = window.event.target.value +"<input type='button' value='x' onclick='fnDeleteItem("+ count +")'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
	
	var itemList = document.getElementById("itemList");
	itemList.appendChild(newSpan);			
}