<template>
      <transition name="bounce">
        <div v-show="alertShow" class="confirm_wrap">
            <p class="message">{{confirmMessage}}</p>
            <p @click="certen">确定</p>
        </div>
    </transition>
</template>
