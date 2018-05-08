var msg = {
	intro: {
		msg1: 'We solve the problems of scale and administration of the Internet routing by grouping routers in <b>autonomous systems </b> (AS).',
		msg2: 'Each AS is composed of a group of routers under the <b> same administrative control </b> running the <b> same routing protocol </b> and having information about each other.',
		msg3: 'The protocols that run inside an AS are denominated <b> intra AS protocols </b>. The known protocols are <b> RIP </b> (Routing Information Protocol) and <b> OSPF </b> (Open Shortest Path First)',

	},
	intraAS:{
		msg1: 'The RIP protocol is a distance vector that uses <b> hop count as metric </b>, thus, each link has as cost 1. And the maximum cost of a path is limited to 15.',
		msg2: 'Routing tables are exchanged among neighbors every 30 seconds approximately <b> using RIP response message </b>.',
		msg3: 'These messages are known as <b> RIP advertisements </b> and contains a list of up to 25 destination subnets within the AS and the distance between the sender and each of these subnetworks.',
		msg4: 'Each router maintains a RIP table called <b> routing table </b> which contains the distance vector.'
	},
	tabelaRoteamento: {
		msg1: 'Suppose the router 1b wants to router packets to the network X. As we can see, it can get it through 1a or 1c, but, before deciding, 1b needs to know about that.',
		msg2: "Here we have the router's routing table 1b, that has no information regarding the router 1c. In the table, there are three columns: <b> the destination subnet, the identity of the next router </b> along the shortest path to the destination subnet and <b> the number of hops </b> (the number of subnets).",
		msg3: '',
		msg4: 'Now suppose that 30 seconds later, 1b receives from 1c <b> routing information </b>, as can be seen below, indicating that the subnet x is just two router hops from 1c router.',
		msg5: 'The router 1b learns that there is now a new path through the router 1c to the subnet x that is <b> shorter </b> than the path through the router 1a and then <b> updates its routing table </b>, as illustrated below.',
		msg6: 'With those information, the router 1b knows the shortest path to the destination network X. Now, we understand how the communication <b> amongst routers within the same AS </b> through the intra-AS routing protocol is done.'
	},
	interAS: {
		msg1: 'We now need to understand how the communication <b> amongst different ASs is done</b>. The responsible for this function is the communication protocol <b> inter-AS </b>.',
		msg2: 'The version 4 of the <b> Border Gateway Protocol</b> (BGP) is the standard for routing amongst autonomous systems on the Internet.',
		msg5: 'In the following example, we have <b> four ASs </b> (AS1, AS2, AS3 and AS4). Each one with its own routing protocol.',
        msg11: 'We also have 1a, 2a, 3c, 4a and 4c as <b> border routers </b>.',
		msg6: 'Suppose that the router 2b needs to <b> transmit a packet </b> out of its <b> AS </b>. For this, the router 2b transmits the packet as specified by the forwarding table, which was set by the <b> intra-AS </b> routing protocol used for <b> AS2 </b>.',
		msg12: 'Note that when there is <b> only one link </b> out of the AS, the problem becomes trivial.', //TODO arrumar essa ordem
		msg8: 'Now the router 1d needs to transmit a packet out of the AS. We know that the router must pass the packet to one of its border routers (1a or 1c), but <b> to which one</b>?',
		msg9: 'To know whom to transmit, AS1 needs to know <b> which destinations can be reached via AS2 and AS3 </b>, and must propagate this information to all routers in AS1. Those tasks are managed by the protocol <b> inter-AS BGP</b>.',
		msg10: 'To accomplish these tasks, the BGP needs that the routers <b> exchange information amongst themselves </b> using <b> semipermanent TCP connections </b>, normally for each pair of link which connects directly two routers in two different ASs. (But there are also TCP connections among routers within an AS).'
	},
	sessaoBGP: {
		msg1: 'The TCP connection are called <b> BGP sessions</b>.',
		msg3: 'The <b> eBGP </b> sessions are the ones identified with the green lines and the <b> iBGP </b> sessions with blue lines',
		msg4: 'The BGP allows that each AS knows <b> which destinations can be reached </b> via its ASs neighbors.',
		msg5: 'Then using eBGP sessions between border routers 3c and 1a, AS3 sends <b> reachability information </b> to AS1, and AS1 sends to AS3 a list of prefixes that can be reached via AS1. Similarly, AS1-> AS2, AS2-> AS4, AS3-> AS4 exchange information.',
		msg6: 'When a border router (in any AS) receives prefixes known by BGP, it uses its <b> iBGP sessions </b> to distribute the prefixes to other routers in the AS.'
	},
	atributosBGP: {
		msg1: 'When a router announces a prefix, it includes several BGP attributes with the prefix. The attributes along with the prefix are called <b> route </b> in BGP terminology.',
		msg2: 'Two of the most important BGP attributes are <b> AS-PATH </b> and <b> NEXT-HOP</b>.',
		msg3: 'The <b> AS-PATH </b> contains the information of which ASs the announcement for the prefix has passed. As an example, suppose that the AS2 announces a x prefix to AS1. Next, AS1 announces x to AS3, then AS3 AS-PATH would be AS2 AS1.',
		msg4: 'This attribute is used to detect and avoid <b> looping </b> and also <b> to choose amongst several paths </b> to the same prefix.',
		msg5: 'The <b> NEXT-HOP </b> is used to configure <b> the router forwarding table </b>.',
		msg6: 'Suppose that 1d wants to reach the <b> subnet x </b>, and knows it can reach it through AS3 and AS1. In this scenario, the <b> AS-PATH is equivalent </b>, so where to go?',
		msg7: 'Using the <b> ASPATH and the intra-AS algorithm</b>, the router can determine the path cost for each interconnected link, and then apply the hot potato routing based on the attribute <b> NEXT-HOP </b> to determine the appropriate interface.'
	},

	htmlTable: {
		table1: "<h3>Routing Table 1B</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Hops to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1a</td><td>6</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
		table2: "<h3>Routing Table 1C</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Hops to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>3c</td><td>2</td></tr>" +
				"<tr><td>y</td><td>1b</td><td>2</td></tr>" +
				"<tr><td>z</td><td>1b</td><td>3</td></tr>" +
				"</tbody></table>",
		table3: "<h3>Routing Table 1b after announcement of 1c</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Subnet Destination</th><th>Next router</th><th>Hops to the Destination</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1c</td><td>3</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
	},

	htmlContent: {
		html1: '<h3>BGP provides:</h3>' +
				'<ol>'+
					'<li>Information from neighboring ASs reachability of subnets.</li>' +
					'<li>Reachability information to all routers in the AS.</li>' +
					'<li>Routes to subnets based on reachability information and policies.</li>' +
				'</ol>',
				html2: '<div id="ebgp"> <h2> EXTERNAL BGP session (eBGP)</h3> <p> A BGP session covering two different ASs </p> </div> <div id = "iBGP" > <h2>INTERNAL BGP session (iBGP) </h2> <p> a BGP session between two routers in the same AS </p> </div> '
	}
};

var audiosExtra = {
	a1: "",
	a2: "",
	a3: "",
	a4: "",
	a5: "",
	a6: "",
	a7: "",
	v: ""
};

var audios = new Array ();
