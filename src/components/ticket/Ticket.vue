<template>
  <li class="ticket">
    <div class="ticket__number number">
      <span class="number__value">#{{ticket.ticketNumber}}</span>
    </div>
    <div class="ticket__user user">
      <img :src="srcImage" alt="user avatar" class="user__avatar">
      <span class="user__name">{{ticket.user.name}}</span>
    </div>
    <div class="ticket__description description">
      <p class="description__type type">Тип обращение: <span class="type__choise">{{ticket.subject}}</span></p>
      <div class="description__text">{{ticket.bodySubject}}</div>
    </div>
    <div class="ticket__state state">
      <span :class="['state__status', stateColor]">{{stateStatus}}</span>
      <span class="state__priority">{{statePriority}}</span>
    </div>
    <span class="ticket__date">{{ (new Date()).toLocaleString([], {day:'2-digit', month:'2-digit', year:'2-digit', hour: '2-digit', minute:'2-digit'})}}</span>
  </li>
</template>

<script src="./Ticket.js" />
<style src="./Ticket.scss" lang="scss" scoped/>

