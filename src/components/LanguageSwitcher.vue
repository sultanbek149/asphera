<template>
    <select v-model="locale">
        <option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale">
            {{ sLocale }}
        </option>
    </select>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Tr from "../i18n/translation"

const { t, locale } = useI18n()

const supportedLocales = Tr.supportedLocales


</script>