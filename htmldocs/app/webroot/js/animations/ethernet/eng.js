var msg = {
		msg1: 'The <b>Ethernet<b> protocol allows the access to a broadcast channel using as multiple access protocol the <b>CSMA/CD (Carrier Sense Multiple Access with Collision Detection)</b>.',
		msg2: 'Each adapter runs the <b>CSMA/CD</b> protocol without explicit coordination with other <b>Ethernet</b> adapters.',
		msg3: 'Let us illustrate the operation of the protocol by the following example: Consider that the <b>host A</b> wants to send a frame to the <b>host C</b> through the broadcast channel.',
		msg4: 'The adapter receives the datagram from network layer, prepares an <b>Ethernet</b> frame and inserts it into the output buffer of the adapter.',
		msg5: 'As the <b>CSMA/CD</b> protocol does not use <b>"slots"</b>, an adapter can start transmitting at any time.',
		msg6: 'Each <b>Ethernet</b> adapter is able to realize if other adapters are transmitting and detect collisions, measuring voltage levels before and during transmission.',
		msg7: 'Before start transmission, the host A identifies that the host B is sending a frame. Thus, the host A aborts its transmission.',
		msg8: 'This process of <b>"listening"</b> before sending is called <b>carrier detect</b>.',
		msg9: 'When the <b>host A</b> identifies that the channel is free, it forwards the frame to the broadcast channel.',
		msg10: 'During the transmission, the adapter monitors the presence of energy from other adapters. This process of <b>"listening"</b> while <b>"speaks"</b> is called <b>collision detect</b>.',
		msg11: 'If no energy from other adapters is detected, the <b>host A</b> considers the frame was delivered.',
		msg12: 'Consider now that the <b>host A</b> is sending a frame to the <b>host C</b>',
		msg13: 'Suppose that before the frame sent by <b>host A</b> passes by <b>host B</b>, the <b>host B</b> wants to start a transmission.',
		msg14: 'By detecting the presence of energy coming from another host, the host B aborts its transmission.',
		msg15: 'To ensure that all hosts, including the <b>host A</b>, are aware of the collision, the <b>host B</b> sends a 48 bits collision signal boost.',
		msg16: 'After aborting the transmission, the hosts go into <b>exponencial backoff</b> phase.',
		msg17: 'At this phase, the hosts wait during a random time before attempting a retransmission.',
		msg18: 'After waiting a random time, the <b>host A</b> starts a retransmission.',
		msg19: 'Also after waiting a random time, the <b>host B</b> starts a retransmission.',
		msg20: 'If the frame is not sent at most <b>sixteen attempts</b>, it is discarded.'
};

var audiosExtra = {
	a1: "",
	a2: "",
	a3: "",
	a4: "",
	a5: "",
	a6: "",
	a7: ""
};

var audios = new Array ("");
