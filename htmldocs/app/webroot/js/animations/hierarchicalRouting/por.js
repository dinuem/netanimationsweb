var msg = {
	intro: {
		msg1: 'Resolvemos os problemas de escala e autonomia administrativa do roteamento na internet por meio do agrupamento de roteadores em <b>sistemas autônomos</b> (<i>autonomous systems</i> - AS).',
		msg2: 'Cada AS é composto de um grupo de roteadores sob o <b>mesmo controle administrativo</b>, que rodam o <b>mesmo protocolo de roteamento</b> e dispõem de informações sobre cada um dos outros.',
		msg3: 'Os protocolos que rodam dentro do AS são denominados <b>protocolos intra-AS</b>. Dois protocolos utilizados são o <b>RIP</b> (Routing Information Protocol) e o <b>OSPF</b> (Open Shortest Path First).'

	},
	intraAS:{
		msg1: 'O RIP é um protocolo de vetor de distâncias  que usa <b>contagem de saltos como métrica de custo</b>, assim, cada enlace tem um custo 1. O custo máximo de um caminho é limitado a 15.',
		msg2: 'Tabelas de roteamento são trocadas entre vizinhos a cada 30 segundos aproximadamente, <b>usando mensagem de resposta RIP</b>. ',
		msg3: 'Essas mensagens são conhecidas como <b>anúncios RIP</b> e contêm uma lista de até 25 sub-redes de destino dentro do AS, bem como as distâncias entre o remetente e cada uma dessas sub-redes.',
		msg4: 'Cada roteador mantém uma tabela RIP denominada <b>tabela de roteamento</b>, que contém o vetor de distâncias.'
	},
	tabelaRoteamento: {
		msg1: 'Suponha que o roteador 1b deseja alcançar a sub-rede x. Como podemos observar ele pode chegar nela por meio de 1a ou 1c, mas pra isso 1b precisa saber dessa informação.',
		msg2: 'Temos aqui a tabela de roteamento do roteador 1b, que a princípio não possui informações referentes ao roteador 1c. Nela encontramos três colunas: <b>a sub-rede de destino, a identidade do roteador seguinte</b> ao longo do caminho de menor custo até a sub-rede de destino e o <b>número de saltos</b>.',
		msg3: '',
		msg4: 'Agora suponha que 30 segundos mais tarde, 1b recebe do roteador 1c o anúncio mostrado abaixo que contém <b>informações da tabela de roteamento</b> de 1c, indicando que a sub-rede x está apenas 2 saltos do roteador 1c.',
		msg5: 'O roteador 1b fica sabendo que há um novo caminho por meio do roteador 1c até a sub-rede x com <b>menor custo</b> do que o caminho pelo roteador 1a e então <b>atualiza sua tabela de roteamento</b>, conforme ilustrado abaixo.',
		msg6: 'Com essas informações, o roteador 1b sabe como alcançar a sub-rede <b>x</b> pelo caminho com menor número de saltos. Assim, entendemos como é feita a comunicação <b>entre roteadores no mesmo AS</b> por meio do protocolo de roteamento intra-AS.'
	},
	interAS: {
		msg1: 'Precisamos agora entender como é feita a comunicação <b>entre ASs</b>. O responsável por essa função é o protocolo de comunicação <b>inter-AS</b>.',
		msg2: 'A versão 4 do <b>Protocolo de Roteador de Borda</b> (Border Gateway Protocol - BGP) é o padrão para roteamento entre sistemas autônomos na Internet.',
		msg5: 'No exemplo a seguir, temos <b>quatro ASs</b> (AS1, AS2, AS3 e AS4). Cada qual com seu próprio protocolo de roteamento interno, podendo ser diferente em cada AS.',
		msg11:'Os roteadores que fazem as ligações entre os AS que são 1a, 2a, 3c, 4a e 4c são chamados de <b>roteadores de borda</b>.',
		msg6: 'Suponhamos que o roteador 2b precisa <b>transmitir um pacote</b> cujo destino está <b>fora de seu AS</b>.  Para isso, o roteador 2b transmite o pacote como especificado pela tabela de repasse, que foi configurada pelo próprio protocolo de roteamento <b>intra-AS de AS2</b>.',
		msg12: 'Note que quando existe <b>apenas um enlace</b> para fora do AS o problema de saber para quem transmitir se torna trivial.', //TODO arrumar essa ordem
		msg7: 'O pacote chegará ao roteador de borda 1a, seja direto por 2a ou por 2c que o <b>retransmitirá ao roteador 1a</b> e assim termina o trabalho de AS2. Note que quando existe <b>apenas um enlace</b> para fora do AS o problema de saber para quem transmitir se torna trivial.',
		msg8: 'Agora o roteador 1d precisa transmitir um pacote para fora do AS. Sabemos que o roteador deve passar o pacote para um de seus roteadores de borda (1a ou 1c), mas <b>para qual deles</b>?',
		msg9: 'Para saber para quem transmitir, AS1 precisa saber <b>quais destinos podem ser alcançados via AS2 e via AS3</b>, e precisa propagar essa informação para todos os roteadores dentro de AS1. Tarefas essas que são gerenciadas pelo protocolo <b>inter-AS BGP</b>.',
		msg10: 'Para realizar essas tarefas, o protocolo BGP precisa que os roteadores <b>troquem informações entre si</b> e para isso utiliza <b>conexões TCP semipermanentes</b> normalmente para cada par de enlace que conecta diretamente dois roteadores em dois ASs diferentes. (Mas existem também conexões TCP entre os roteadores dentro de um AS).'
	},
	sessaoBGP: {
		msg1: 'A conexão TCP, juntamente com todas as mensagens BGP enviadas pela conexão, é denominada uma <b>sessão BGP</b>.',
//		msg2: 'Uma sessão BGP que abranja dois ASs é denominada uma <b>sessão BGP externa (eBGP)</b> e uma sessão BGP entre dois roteadores no mesmo AS é denominada uma <b>sessão BGP interna (iBGP)</b>',
		msg3: 'A seguir são mostradas as sessões <b>eBGP</b> com linhas de cor verde e sessões <b>iBGP</b> com linhas de cor azul',
		msg4: 'O BGP permite que cada AS conheça <b>quais destinos podem ser alcançados</b> via seus ASs vizinhos.',
		msg5: 'Usando então sessões eBGP entre os roteadores de borda 3c e 1a, AS3 envia <b>informações de alcance</b> de prefixos para AS1, e AS1 envia a AS3 a lista de prefixos que podem ser alcançados de AS1. De modo semelhante, AS1->AS2, AS2->AS4, AS3->AS4 trocam informações.',
		msg6: 'Quando um roteador de borda (em qualquer AS) recebe prefixos conhecidos pelo BGP, ele usa <b>sessões iBGP</b> para distribuir os prefixos aos outros roteadores no AS.'
	},
	atributosBGP: {
		msg1: 'Quando um roteador anuncia um prefixo para uma sessão BGP, inclui vários atributos BGP juntamente com o prefixo. Os atributos mais o prefixo são denominados de <b>rota</b> na terminologia do BGP.',
		msg2: 'Dois dos atributos do BGP importantes são <b>AS-PATH</b> e <b>NEXT-HOP</b>.',
		msg3: 'o <b>ASPATH</b> contém a informação dos ASs pelos quais passou o anúncio para o prefixo. Como exemplo, suponha que o AS2 anuncia um prefixo x para AS1. Logo em seguida AS1 anuncia x para AS3, então seu ASPATH seria AS2 AS1.',
		msg4: 'Esse atributo é utilizado para detectar e evitar <b>looping de anúncios</b> e também ao <b>escolher entre vários caminhos</b> para o mesmo prefixo.',
		msg5: 'Já o <b>NEXT-HOP</b> é utilizado para o roteador poder <b>configurar sua tabela de repasse</b> adequadamente',
		msg6: 'Suponha que 1d queira alcançar a <b>sub-rede X</b>, e saiba que pode alcançá-la por meio de AS3 e AS2. Nesse cenário o <b>ASPATH é o equivalente para os dois caminhos</b>, então como decidir para qual ir?',
		msg7: 'Utilizando os valores de ASPATH e o algoritmo intra-AS, o roteador pode determinar o custo do caminho para cada enlace interconectado, e então, aplicar o roteamento <i>batata-quente</i>, com base no atributo <b>NEXT-HOP</b>, para determinar a interface apropriada.'
	},

	htmlTable: {
		table1: "<h3>Tabela de Roteamento de 1B</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Sub-Rede Destino</th><th>Roteador Seguinte</th><th>Saltos até o Destino</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1a</td><td>6</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
		table2: "<h3>Tabela de Roteamento de 1C</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Sub-Rede Destino</th><th>Roteador Seguinte</th><th>Saltos até o Destino</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>3c</td><td>2</td></tr>" +
				"<tr><td>y</td><td>1b</td><td>2</td></tr>" +
				"<tr><td>z</td><td>1b</td><td>3</td></tr>" +
				"</tbody></table>",
		table3: "<h3>Tabela de Roteamento de 1B após anúncio de 1C</h3>" +
				"<table class='table table-condensed'><thead><tr><th>Sub-Rede Destino</th><th>Roteador Seguinte</th><th>Saltos até o Destino</th></tr></thead>" +
				"<tbody>" +
				"<tr><td>x</td><td>1c</td><td>3</td></tr>" +
				"<tr><td>y</td><td>-</td><td>1</td></tr>" +
				"<tr><td>z</td><td>1a</td><td>2</td></tr>" +
				"</tbody></table>",
	},

	htmlContent: {
		html1: '<h3>O BGP provê a cada AS meios de:</h3>' +
				'<ol>'+
					'<li>Obter de ASs vizinhos informações de atingibilidade de sub-redes.</li>' +
					'<li>Propagar a informação de atingibilidade a todos os roteadores internos ao AS.</li>' +
					'<li>Determinar rotas "boas" para sub-redes com base na informação de atingibilidade e na política do AS.</li>' +
				'</ol>',
		html2: '<div id="ebgp"><h2>Sessão BGP EXTERNA (eBGP)</h3><p>Uma sessão BGP que abranja dois ASs diferentes</p></div><div id="ibgp"><h2>Sessão BGP INTERNA (iBGP)</h2><p>uma sessão BGP entre dois roteadores no mesmo AS</p></div>',
//		html2: '<h3>Uma sessão BGP que abranja dois ASs é denominada uma <span class="green">sessão BGP externa (eBGP)</span> e uma sessão BGP entre dois roteadores no mesmo AS é denominada uma <span class="blue">sessão BGP interna (iBGP)</span>'
	}
};

// audios de partes dinamicas

var audiosExtra = {
	a1: "../audio/rh/a1.mp3",
	a2: "../audio/rh/a2.mp3",
	a3: "../audio/rh/a3.mp3",
	a4: "../audio/rh/a4.mp3",
	a5: "../audio/rh/a5.mp3",
	a6: "../audio/rh/a6.mp3",
	a7: "../audio/rh/a7.mp3",
	v: "../audio/rh/v.mp3"
};

var audios = new Array ("../audio/rh/rh1.mp3",
												"../audio/rh/rh2.mp3",
												"../audio/rh/rh3.mp3",
												"../audio/rh/rh4.mp3",
												"../audio/rh/rh5.mp3",
												"../audio/rh/rh6.mp3",
												"../audio/rh/rh7.mp3",
												"../audio/rh/rh8.mp3",
												"../audio/rh/rh9.mp3",
												"../audio/rh/rh10.mp3",
												"../audio/rh/rh11.mp3",
												"../audio/rh/rh12.mp3",
												"../audio/rh/rh13.mp3",
												"../audio/rh/rh14.mp3",
												"../audio/rh/rh15.mp3",
												"../audio/rh/rh16.mp3",
												"../audio/rh/rh17.mp3",
												"../audio/rh/rh18.mp3",
												"../audio/rh/rh19.mp3",
												"../audio/rh/rh20.mp3",
												"../audio/rh/rh21.mp3",
												"../audio/rh/rh22.mp3",
												"../audio/rh/rh23.mp3",
												"../audio/rh/rh24.mp3",
												"../audio/rh/rh25.mp3",
												"../audio/rh/rh26.mp3",
												"../audio/rh/rh27.mp3",
												"../audio/rh/rh28.mp3",
												"../audio/rh/rh29.mp3",
												"../audio/rh/rh30.mp3",
												"../audio/rh/rh31.mp3",
												"../audio/rh/rh32.mp3",
												"../audio/rh/rh33.mp3",
												"../audio/rh/rh34.mp3",
											  "../audio/rh/rh35.mp3");
