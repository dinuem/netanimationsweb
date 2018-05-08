var msg = {
		msg1: 'Two of the most important TCP header fields are the <b>sequence number</b> and the <b>acknowledgement number</b>.',
		msg2: 'These numbers are applied to the stream of bytes been transmitted, and not on the number of segments.',
		msg3: 'The <b>sequence number</b> for a segment is the number of the first byte of the data stream (payload). <b>EX.:</b> Suppose a process in host A wants to send a message to the a process in host B over a TCP connection.',
		msg4: 'Consider that the data stream is a 500.000 bytes file, the MSS (maximum segment size) is 1.000 bytes and the number 0 is assigned to the first byte of the data stream.',
		msg5: 'Thus, the TCP builds 500 segments from data stream. The first segment receives the <b>sequence number</b> 0.',
		msg6: '<b>Sequence number</b> = 0',
		msg7: 'The second segment receives the <b>sequence number</b> 1000, the third 2000 and so on.',
		msg8:	'The <b>acknowledgement number</b> that a host assigns to its segment is the sequence number of the next byte that it is waiting. <b>EX.:</b> The host B is about to send the bytes numbered from 0 to 535 to the host A.',
		msg9: '<b>Acknowledgement number</b> = 1000',
		msg10: 'As it received the bytes from 0 to 999, the host B sends as <b>acknowledgement number</b> the value 1000, which is related to the next byte.',
		msg11: 'On receiving the segment with the <b>acknowledgement number</b> 1000, the host A forwards the bytes from 1000 to 1999 to the host B.',
		msg12: '<b>Acknowledgement number</b> = 536',
		msg13: '<b>Sequence number</b> = 1000',
		msg14: 'The host A also requests the next segment to the host B, informing the number 536 in the <b>acknowledgement number</b> field.',
		msg15: 'Let\'s assume that soon after the host A forwards the next segment to the host B, with sequence number 2000.',
		msg16: '<b>Sequence number</b> = 2000',
		msg17: 'As the host A have not received the segment of sequence 536, it informs again this value in the <b>acknowledgement number</b> field.',
		msg18: 'The host B sends the segment with sequence number 536 to the host A. As the host B received the segments of sequence 1000 e 2000 successively, it sends in the <b>acknowledgement field</b> the value 3000, which is the next segment to be sent by the host A.',
		msg20: '<b>Sequence number</b> = 536',
		msg21: '<b>Acknowledgement number</b> = 3000',
		msg19: 'We say that the TCP provides <b>cumulative acknowledgements</b>, since it recognizes all bytes up to the first byte that is missing in stream.',
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
