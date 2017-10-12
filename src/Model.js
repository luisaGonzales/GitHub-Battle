import React from 'react';

class Model {
	constructor () {
        this.notify = null;
        this.funciona = "sip";  
	}

	subscribe (render) {
		this.notify = render;
	}

	
}

export default Model;