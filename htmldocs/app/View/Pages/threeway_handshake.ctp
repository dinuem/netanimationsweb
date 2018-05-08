<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/threeWayhandShake/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/threeWayhandShake/main', array('block' => 'scriptAnimation'));

