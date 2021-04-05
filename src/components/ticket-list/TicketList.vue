<template>
    <ul class="ticket-list">
      <Ticket v-for="(ticket, index) in tickets" :key="index"
          :index="index"
          :ticket="ticket"
      />
    </ul>
</template>

<script src="./TicketList.js"/>
<style src="./TicketList.scss" lang="scss" scoped/>
