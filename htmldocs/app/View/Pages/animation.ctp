<?php echo $this->fetch('content'); ?>
<h6><?=__('youAreIn')?> <?=$this->Html->link(__('animations'), array('controller'=>'pages', 'action'=>'index')); ?> > <?=$title_for_layout?>
	<div class="pull-right">
		<?=$this->Html->link(__('sitemap'), array('controller'=>'app', 'action'=>'sitemap')); ?>
	</div>
</h6>
<hr/>
<div id="buttons">
	<button id="menu" aria-label="Voltar ao Menu" class="buttonMenu" accesskey='1' onclick="goHome()" ></button>
  <button id="reset" aria-label="Reiniciar Animação" class="buttonReset" accesskey='5' onclick='restart()' ></button>
	<button id="voltar" aria-label="Voltar Animação" accesskey="4" onclick="animator.backStep();" class="buttonBack"></button>
	<button id="continuar" aria-label="Avançar Animação" accesskey="3" onclick="animator.nextStep();" class="buttonNext"></button>
	<button id="aud" aria-label="Ativar/Desativar Áudio" accesskey="2" onclick="animator.speak();" class="buttonSom"></button>
</div>
<div id="wrapper">
	<div id="wrapperMsg">
		<p id="msg"><?=__('clickToStart')?></p>
	</div>
	<div id="htmlContent"></div>
	<canvas id="myCanvas" width="1152" height="768">
			<!-- Seu suporte para canvas não está funcionando corretamente -->
		</canvas>
	<canvas id="myCanvas2" width="1152" height="768">
			<!-- Seu suporte para canvas não está funcionando corretamente -->
	</canvas>
</div>

