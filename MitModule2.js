//required
Module.register("mitModule2", {
	getDom: function() {
		//const middleCenter = document.querySelector('top center')
		const wrapper = document.createElement('div')
		const header = document.createElement('h3')
		header.innerHTML= "header"
		wrapper.innerHTML = "Test"
		wrapper.appendChild(header)
		return wrapper
	}
})
