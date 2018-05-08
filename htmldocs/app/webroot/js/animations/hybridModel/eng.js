var msg = {
		msg1: 'The set of protocols of the network architecture can be seen as a <b>layer model</b>. Each layer is responsible for a task group, providing a set of <b>well defined services</b> to the upper layer protocol.',
		msg2: 'Highest layers are logically closer to the user and deal with <b>less abstract data</b>, trusting in lower layers protocols for tasks of lowest abstract level.',
		msg3: 'The <b>ISO/OSI model</b> is based in 7 layers: <b>Physical, Data Link, Network, Transport, Session, Presentation and Application</b>. The <b>initial model of TCP/IP</b> is based on 4 layers: <b>Network, Internet, Transport and Application</b>. After that was developed a <b>Hybrid model</b> composed by 5 layers: <b>Physical, Data link, Network, Transport and Application</b>.',
    msg4: 'This model reduces the excess of ISO/OSI model and improves TCP/IP model.',
		msg5: 'We will use an example to demonstrate the hybrid model working and the responsabilities of each layer. <b>Ex:</b> Client sends a message to the destination server.',
		msg6: '<b>Application Layer:</b><br> -Provides the interface between the user processes and the network. <br><br><b>Main protocols:</b> <br>- HTTP <br>- SMTP <br>- FTP <br>- POP 3 <br>- SSH <br>- DNS <br>-DHCP',
		msg7: '<b>Transport Layer:</b> <br>- Divides data in segments; <br>- Ensures the correct transmission of data. <br><br><b>Main protocols:</b> <br>- TCP <br>- UDP',
		msg8: '<b>Network Layer:</b><br>- Divides segments in packets or datagrams; <br>- Establishes, keeps and finishes logical conections; <br>- Responsible for logical address translation or names in physical address (routing).<br><br><b>Main protocols:</b><br>- IP <br>- ARP',
		msg9: 'Data Link Layer:<br>- Divides packes in frames; <br>- Controls the access to medium; <br>- Manages the transmission, detecting and correcting erros at physical layer.<br><br><b>Main protocols:</b><br>- Ethernet',
		msg10: '<b>Physical Layer:</b><br>- Resposible for transmission of bits from a point to another; <br>- Describes procedures, mechanic characteristics, electric and functional.',
		msg11: 'After the encapsulation process made by layers be finished, the <b>physical layer</b> will finally transport the message by the network.<br><br>The physical layer does not know who is the final receiver of the message, thus, it wil transport to the next machine found.',
		msg12: 'The <b>physical layer</b> of the router forwards the received message of the source client to data link layer..',
		msg13: '<b>Data link layer</b> will analyze the frame to verify if it is intact or if it was damaged along the way.',
		msg14: 'If the frame is damaged and is not possible to fix it, the layer will request its <b>relay</b>.<br>Otherwise, the link information will be removed and the frame sent to <b>network layer</b>.',
		msg15: 'The <b>network layer</b> will analyze the <b>destination IP address</b> contained in the packet to determine if it belongs to the layer.<br>If it does not belong, the layer will trace the route that the packet will follows and will return to data link layer.',
		msg16: '<b>Data link layer</b> will put again in the packet the informations that will be used later to evaluate if it is intact or no and the layer will send it to the <b>physical layer</b>.',
		msg17: 'The <b>physical layer</b> will send a message to the <b>physical layer of next machine</b> until find the correct destination.',
		msg18: 'The previous process will be repeated until the message reaches the <b>physical layer</b> of the destination server.',
		msg19: 'When the packet reaches the <b>destination server</b>, it will travel for each layer in the opposite direction.<br>Each layer will <b>an encapsulation layer</b> and read informations attached to the source client.',
		msg20: 'When the packet reaches the <b>physical layer</b> of destination server, it is forwarded to the <b>data link layer</b>.',
		msg21: 'The <b>data link layer</b> will analyze the frame to verify if it is intact or if it was damaged along the way.',
		msg22: 'If the frame is damaged and is not possible to fix it, the layer will request its <b>relay</b>.<br>Otherwise, the link information will be removed and the frame sent to <b>network layer</b>.',
		msg23: 'The <b>network layer</b> will analyze the <b>destination IP address</b>. If it belongs to the layer, the network informations are removed and the segment is sent to <b>tranport layer</b>.',
		msg24: 'The <b>Tranport layer</b> receives the segment and sends to <b>application layer</b>.',
		msg25: 'The <b>Application layer</b> receives the message sent by source client and forwards it to the program which requested.'
};


var audiosExtra = {
	a1: ""
};

var audios = new Array ("");
