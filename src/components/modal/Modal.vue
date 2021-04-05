<template>
  <div>
    <button class="form__btn" @click="openForm">Добавить</button>
    <div class="modal" v-if="formOpen === true" >
      <form class="modal__wrapper form" method="post" action="" autocomplete="off">
        <h2 class="form__error" v-if="errorMsg"> {{errorMsg}}</h2>
        <fieldset class="form__container">
          <h1 class="form__title">Новый тикет</h1>
          <div class="form__path name">
            <label for="name" class="name__text form__label">Имя:</label>
            <input type="text" id="name" class="name__input form__entry-field" name="name" v-model="user.name" required>
          </div>
          <div class="form__path email">
            <label for="email" class="email__text form__label">Email:</label>
            <input type="email" id="email" class="email__input form__entry-field" name="email" v-model="user.email" required>
          </div>
          <div class="form__path message">
            <label for="message" class="message__text form__label">Сообщение:</label>
            <textarea  id="message" class="message__input form__entry-field" name="message" v-model="bodySubject" required/>
          </div>
          <div class="form__path type">
            <label for="type" class="type__title form__label">Тип обращения:</label>
            <select id="type" size="1" name="type" class="type__select form__entry-field" v-model="subject">
              <option value="Жалоба на пользователя" selected>Жалоба на пользователя</option>
              <option value="Жалоба на приложение">Жалоба на приложение</option>
              <option value="Жалоба на сайт">Жалоба на сайт</option>
              <option value="Оплата">Оплата</option>
              <option value="Функционал">Функционал</option>
              <option value="Авторизация">Авторизация</option>
              <option value="Модерация">Модерация</option>
              <option value="Другое">Другое</option>
            </select>
          </div>
          <div class="form__path priority">
            <label for="priority" class="priority__title form__label">Приоритет:</label>
            <select id="priority" size="1" name="priority" class="priority__select form__entry-field" v-model="priority">
              <option value="0" selected>Низкий</option>
              <option value="1">Средний</option>
              <option value="2">Высокий</option>
              <option value="3">Критический</option>
            </select>
          </div>
          <div class="form__path status">
            <label for="status" class="status__title form__label">Статус:</label>
            <select id="status" size="1" name="status" class="status__select form__entry-field" v-model="status">
              <option value="0" selected>Новый</option>
              <option value="1">В обработке</option>
              <option value="2">Отложено</option>
              <option value="3">Закрыто</option>
            </select>
          </div>
          <div class="form__control">
            <button class="form__btn form__btn-add" @click="onSubmit">Создать</button>
            <button class="form__btn form__btn-close" @click="closeForm">Отмена</button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script src="./Modal.js"/>
<style src="./Modal.scss" lang="scss" scoped/>

