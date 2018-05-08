<?php
$this->extend('/Pages/animation');

$this->Html->script('animations/aloha/' . $lang, array('block' => 'scriptMessage'));
$this->Html->script('animations/aloha/main', array('block' => 'scriptAnimation'));
