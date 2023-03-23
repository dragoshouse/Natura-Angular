<template>
  <div class="services-card">
    <div class="services-card-container">
      <svg viewBox="0 0 1024 1024" class="services-card-icon">
        <path
          d="M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"
        ></path>
      </svg>
    </div>
    <span class="services-card-text">{{ text }}</span>
    <span class="services-card-text1">{{ text1 }}</span>
    <span class="services-card-text2">{{ text2 }}</span>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard',
  props: {
    text: {
      type: String,
      default: 'Productos para la salud',
    },
    text1: {
      type: String,
      default: 'Productos 100% naturales que ayudan a mejorar tu salud.',
    },
    text2: {
      type: String,
      default: 'Learn more',
    },
  },
}
</script>

<style scoped>
.services-card-container {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: var(--dl-radius-radius-radius4);
  margin-bottom: var(--dl-space-space-twounits);
  justify-content: center;
  background-color: #f1f2ea;
}
.services-card-icon {
  fill: #3dccc7;
  width: 24px;
  height: 24px;
}
.services-card-text {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-halfunit);
}
.services-card-text1 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.services-card-text2 {
  cursor: pointer;
  text-decoration: underline;
}
</style>
