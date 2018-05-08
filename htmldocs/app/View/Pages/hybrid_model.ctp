<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/hybridModel/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/hybridModel/main', array('block' => 'scriptAnimation'));
	
