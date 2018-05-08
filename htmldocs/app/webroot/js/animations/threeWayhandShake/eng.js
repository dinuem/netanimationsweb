var msg = {
		msg1: 'The <b>Three-way Handshake</b> is a process of agreement between two parts which desire to establish a communication. This process consists of three steps.',
		msg2: '1. The client sends a segment (request) to the destination.',
		msg3: 'Source Port: TCP 1026',
		msg4: 'Destination Port: TCP 524',
		msg6: 'Window Size: WIN = 8192 bytes',
		msg5: 'Sequence Number: SEQ = 0',
		msg7: 'Flag SYN: <br/>SYN = 1',
		msg8:	'The <b>SYN</b> flag has the value <b>1</b> and the <b>ACK</b> flag the value <b>0</b>.',
		msg9: '2. The server answers with a segment containing the <b>SYN = 1 and ACK = 1 flags</b>.',
		msg10: 'Source Port: TCP 524',
		msg11: 'Destination Port: TCP 1026',
		msg12: 'Window Size: WIN = 32768 bytes',
		msg13: 'Now the <b>ACK</b> flag has the value <b>1</b>',
		msg14: 'This answer means that the connection was accepted, established and the previous segment was recognized.',
		msg15: '3. The client answers with a segment.',
		msg16: 'Sequence Number: SEQ = 1',
		msg17: 'Window Size: WIN = 8760 bytes',
		msg18: 'The <b>ACK<b> flag value is <b>1</b>.',
		msg19: 'After those three steps, the <b>Three-way Handshake</b> is complete and the two parts can exchange data.',

};


var audiosExtra = {
	a1: "",
	a2: "",
	a3: ""
};

var audios = new Array ("");
