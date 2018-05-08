<h6><?=__('youAreIn')?> <?=$this->Html->link(__('animations'), array('controller'=>'pages', 'action'=>'index')); ?> > <?=__('sitemap')?>
  <div class="pull-right">
    <?=$this->Html->link(__('sitemap'), array('controller'=>'app', 'action'=>'sitemap')); ?>
  </div>
</h6>
<hr/>
<h1 role="heading" aria-level="1"><?=__('sitemap')?></h1>
<br/>
<p><?=$this->Html->link(__('animations'), array('controller'=>'pages', 'action'=>'index')); ?></p>
<p class="map">| <?=$this->Html->link(__('animationDNSTitle'), array('controller'=>'pages', 'action'=>'dns'));?></p>
<p class="map">| <?=$this->Html->link(__('animationSubnetsTitle'), array('controller'=>'pages', 'action'=>'subnets'));?></p>
<p class="map">| <?=$this->Html->link(__('animationHierarchicalRoutingTitle'), array('controller'=>'pages', 'action'=>'hierarchicalRouting'));?></p>
<p class="map">| <?=$this->Html->link(__('animationHybridModelTitle'), array('controller'=>'pages', 'action'=>'hybridModel'));?></p>
<p class="map">| <?=$this->Html->link(__('animationThreeWayHandshakeTittle'), array('controller'=>'pages', 'action'=>'threewayHandshake'));?></p>
<p class="map">| <?=$this->Html->link(__('animationAlohaTitle'), array('controller'=>'pages', 'action'=>'aloha'));?></p>
<p class="map">| <?=$this->Html->link(__('animationEthernetTitle'), array('controller'=>'pages', 'action'=>'ethernet'));?></p>
<p class="map">| <?=$this->Html->link(__('animationSequenceNumberTitle'), array('controller'=>'pages', 'action'=>'tcp'));?></p>
<p><?=$this->Html->link(__('about'), array('controller'=>'app', 'action'=>'about')); ?></p>
<p><?=$this->Html->link(__('contact'), array('controller'=>'app', 'action'=>'contact')); ?></p>
<p><?=$this->Html->link(__('app'), array('controller'=>'app', 'action'=>'app')); ?></p>
<p><?=$this->Html->link(__('help'), array('controller'=>'app', 'action'=>'help')); ?></p>
