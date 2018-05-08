<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/ethernet/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/ethernet/main', array('block' => 'scriptAnimation'));

