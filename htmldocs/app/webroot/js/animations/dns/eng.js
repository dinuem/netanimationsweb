var msg = {
	requestHost : 'Host Source ',
	requestHostURL: ' uem.br ',
	sourceHost: 'Host Destination ',
	sourceHostURL: ' utfpr.br ',
	localServer : 'Local Name Server ',
	localServerURL: ' dns.uem.br ',
	rootServer: 'Root Name Server' ,
	tldServer: 'Server TLD ',
	authorityServer: 'Server with Authority ' ,
	authorityServerURL: ' dns.utfpr.br ',
	dns : {
		intro1 : "There are two different ways of identifying the Internet hosts: by a <b>host name</b> (hostname ), for example, <i> uem.br </i> , and an <b>IP address</b> such as <i>128.232.283.1</i>. ",
		intro2 : "People often choose to use host names because they are easier to remember, since the <b>routers prefer IP address</b>, which has a fixed length and it is hierarchically structured.",
		intro3 : "Thus we have a problem: we need a service that performs the <b>translation of a hostname to its IP address</b>. Offering this service is one of the main function of <b>DNS (Domain Name System)</b>. ",
		intro4 : "The DNS is a distributed database implemented as hierarchy of name servers and an application layer protocol that allows hosts to query the distributed database.",
		intro5 : "We will see now an example of how the translation is done by DNS.",
		dns1 : "1 - <b>The requester sends a DNS query</b> to its local nameserver <i>uem.br</i>. This message contains the hostname to be translated, <i>utfpr.edu.br</i>.",
		dnsMessage: "There are two types of DNS messages, <b>query</b> and <b>response</b>. Both have the same format as shown in the illustration below.",
		dns2 : "2 - The local name server sends a query message <b> to a root name server </b>.",
		dns3 : "3 - The root server realizes the suffix <i>BR</i> and <b>returns to the local name server a list of IP addresses</b> containing the servers Top Level Domain (TLD) responsible by <i>BR</i>.",
		dns4 : "4 - The local name server <b>resends the query message </b> to one of the TLD servers on list.",
		dns5 : "5 - The TLD server realizes the suffix <i>utfpr.br</i> and <b>responds with the IP address of the authoritative name server</b> of the UTFPR",
		dns6 : "6 - The local name server then <b>resends the query message</b> directly to <i>dns.utfpr.br</i>.",
		dns7 : "7 - Finally the authoritative name server <b>responds with the IP address</b> that meets <i>utfpr.br</i>.",
		dns8 : "8 - The local name server now responds to the requestor with the IP address of the requested host, <i>utfpr.br</i>.",
		"In the example were <b>sent 8 DNS messages</b>, 4 queries and 4 responses, to perform the translation. This number of messages represents a response time to the client. To reduce this time, there is the <b>DNS cache</b>.",
		rootserver : "There are on the internet <b>13 root name servers</b> (nominated from A to M) located mostly in North America. Each of them is actually a conglomeration of replicated servers, for security purposes",
		tldServer : "The <b> servers TLD ( Top - level Domain ) </b> are responsible for top-level domains such as <b> . with . org , . net . edu . gov </b> and countries like <b> . uk , . fr , . br </b>, etc.",
		authorityServer : "Every organization that has hosts that can be publicly accessed on the Internet should also provide <b>DNS records</b> <b>for mapping the names of these hosts to IP addresses</b>. These records are stored by servers with the organization\'s authority.",
	}
};

var colors = {
	'blue': '#01b0ec',
	'orange': "#ef7901",
	'purple': ' #b147a3',
	'blank': '#fff '
} ;

var audiosExtra = {
	a1: "",
	a2: "",
	a3: "",
	a4: ""
};

var audios = new Array ("");
