<template>
  <div id="app">
    <Modal :tickets="allTickets"/>
    <TicketList :tickets="allTickets"/>
  </div>
</template>

<script src="./App.js" />
<style src="./App.scss" lang="scss" />
