var msg = {
		sub1 : "Here we have a network connected to the Internet. The IP network is a <b>Class B address</b>. This means that 2 bytes identify the host and 2 bytes the network.",
		sub2 : "As two bytes are used to identify hosts, this means that there may be a total of <b>65536 addresses</b> for a given Class B network.",
		sub3 : "A subnet mask is used to <b>determine which bits are used for the network and which are used for the hosts</b>, the 16 bits on the left are the default mask for Class B addresses.",
		sub4 : "To efficiently use the addressing space, we need to <b>divide the network into logical subnets</b>.",
		sub5 : "Here we create two subnets <b>extending the subnet mask</b> in 1 bit. Now the part of the network consists of 16 bits, the part of the subnet consists of 1 bit and the part of the hosts 15 bits. Each subnet is connected to a switch.",
		sub6 : "With <b>one extra bit</b> for the network part, which can assume 1 or 0, we can create two logical networks.",
		sub7 : "In the future, these subnets can be broken down into more subnets in a similar way. We will now examine how the hosts and routers send packets on the subnets.",
		sub8 : "When a host sends a packet, it performs a <b> logical AND operation (E) </b> with the destination IP subnet mask to determine the network number.",
		sub9 : "Here, the destination IP is <b>162.103.136.103</b>. Performing the logical AND of the destination IP address with the subnet mask, we get the network number 162.103.128.0, so the packet can be sent directly to the receiver since it is on the same subnet.",
		sub10 : "Now <b>162.103.126.103</b> will try to send a packet to <b>162.103.1.102</b>, a host that is on a <b>DIFFERENT subnet </b>.",
		sub11 : "Performing the logical AND of the destination IP, 162.103.1.102, with the subnet mask we got a different network number, then the packet is <b>sent to the router</b>.",
		sub12 : "The router has a forwarding table that contains a subnet mask and a network address for each network. It performs logical AND with each destination IP with each subnet mask until to find the appropriate network address.",
		sub13 : "And then the router sends the packet to its final destination in the subnet.",

		html1: "<div id='network'><p>NETWORK</p><h2>162.103.</h2><h4>10100010.01100111.</h4></div><div id='host'><p>HOST</p><h2>X.X</h2><h4>????????.????????</h4></div>",
		html2: "<p><b>Default Mask: 255.255.0.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>These bits are for:</p> <p>NETWORK</p></div><div id='host'><h3>00000000.00000000</h3><p>These bits are for:</p><p>HOST</p></div><p class='txt-small'>The 1 in the subnet mask means that this bit is part of the network, a 0 means that this bit is the host portion. As mentioned earlier, there are two bytes for the host and two bytes for the network addresses in the Class B</p>",
		html3: "<p><b>New Default Mask: 255.255.128.0</b></p><div id='network'><h3>11111111.11111111.</h3><p>There is now an additional bit for the network</p> </div><div id='host'><h3><span class='bit-pink'>1</span>000000.00000000</h3><p>There are now 15 bits for hosts</p></div>",

		html4: "<h4>New subnet mask: 255.255.128.0</h4><p>11111111.11111111.<span class='bit-pink'>1</span>0000000.00000000</p>",
		html5: "<h4>10100010.01100111.<span class='bit-pink'>1</span>???????.????????</h4><p class='small-text'>A logical network has a 1 in that position, resulting in the number of subnet:</p><h3>162.103.128.0</h3>",
		html6: "<h4>10100010.01100111.<span class='bit-pink'>0</span>???????.????????</h4><p class='small-text'>A logical network has a 0 in that position, resulting in the number of subnet:</p><h3>162.103.0.0</h3>",

	html7: "<p>The destination <b> IS </b> in the same subnet</p>",
	html8: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Subnet Mask</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>10100010.01100111.10001000.01100111</td>" +
		"<td>162.103.136.103</td>" +
		"<td>Destination IP</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>10100010.01100111.10000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.128.0</span></td>" +
		"<td>Subnet number</td>" +
	"</tr>" +
	"</table>",

	html9: "<p>The destination <b> IS NOT </b> in the same subnet</p>",
	html10: "<table class='table table-condensed'>" +
	"<tr>"+
		"<td></td>" +
		"<td>11111111.11111111.10000000.00000000</td>" +
		"<td>255.255.128.0</td>" +
		"<td>Subnet mask</td>" +
	"</tr>" +
	"<tr>" +
		"<td>&</td>" +
		"<td>10100010.01100111.00000001.01100110</td>" +
		"<td>162.103.1.102</td>" +
		"<td>Destination IP</td>" +
	"</tr>" +
	"<tr>" +
		"<td></td>" +
		"<td>10100010.01100111.00000000.00000000</td>" +
		"<td><span class='bit-pink'>162.103.0.0</span></td>" +
		"<td>Subnet number</td>" +
	"</tr>" +
	"</table>",


	html11: "<table class='table table-condensed'>" +
			"<tr>"+
				"<td></td>" +
				"<td>11111111.11111111.10000000.00000000</td>" +
				"<td>255.255.128.0</td>" +
				"<td>Subnet mask</td>" +
			"</tr>" +
			"<tr>" +
				"<td>&</td>" +
				"<td>10100010.01100111.00000001.01100100</td>" +
				"<td>162.103.1.102</td>" +
				"<td>Destination IP</td>" +
			"</tr>" +
			"<tr>" +
				"<td></td>" +
				"<td>10100010.01100111.00000000.00000000</td>" +
				"<td><span class='bit-pink'>162.103.0.0</span></td>" +
				"<td>Subnet number</td>" +
			"</tr>" +
			"</table>",


	html12: "<h3>Tabela de Repasse</h3>"+
			"<table class='table table-condensed'>" +
			"<thead>"+
			"<tr>"+
				"<td>Network number</td>" +
				"<td>Subnet mask</td>" +
				"<td>Next Hop</td>" +
			"</tr>" +
			"</thead>" +
			"<tr>" +
				"<td>162.103.128.0</td>" +
				"<td>255.255.128.0</td>" +
				"<td>1</td>" +
			"</tr>" +
			"<tr>" +
				"<td><span class='bit-pink'>162.103.0.0</span></td>" +
				"<td>255.255.128.0</td>" +
				"<td>2</td>" +
			"</tr>" +
			"</table>"

};

var audiosExtra = {
	a1: "",
	a2: ""
};

var audios = new Array ("");
