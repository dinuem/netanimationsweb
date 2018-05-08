<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/tcp/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/tcp/main', array('block' => 'scriptAnimation'));

