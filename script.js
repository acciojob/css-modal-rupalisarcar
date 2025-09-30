//your JS code here. If required.
const openBtn = document.getElementById('openModal');
const body = document.getElementById('mymodal');
const closeBtn = document.getElementById('close-modal');

openBtn.addEventListener('click',()=>{
	body.style.display="block"
})
closeBtn.addEventListener('click',()=>{
	body.style.display="none"
})

window.addEventListener('click',(e)=>{
	if(e.target===body){
		body.style.display="none"
	}
})