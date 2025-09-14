//your JS code here. If required.
const codeContainer = document.querySelector(".code-container");
const nums = Array.from({length:10}, (_,i) => i)
document.addEventListener("DOMContentLoaded", ()=> {
	codeContainer.children[0].focus()
})

document.addEventListener("keydown", (e)=>{
	const key = e.key;
	const inputs = Array.from(codeContainer.children)
    const activeIndex = inputs.findIndex(input => input === document.activeElement);
	// if(!isNaN(key) && nums.includes(parseInt(key))){
	// 	for(let input of inputs){
	// 		if(!input.value){
	// 			input.focus()
	// 			break;
	// 		}
	// 	}
	// }

	if (!isNaN(key) && nums.includes(parseInt(key))) {
	    if (activeIndex >= 0 && activeIndex < inputs.length - 1) {
	      setTimeout(() => {
	        inputs[activeIndex + 1].focus();
	      }, 0); // Let the current input receive the key first
	    }
	  }
	
	if(key === "Backspace"){
		const activeElement = document.activeElement
		for(let i=0; i<inputs.length; i++){
			const input = inputs[i];
			if(activeElement === input){
				if(i>0 && input.value){
					input.value = "";
				} else if (i > 0) {
					input.select()
					inputs[i-1].focus()
				}
			}
		}
	}
})