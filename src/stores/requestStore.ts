import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const setLoginInfo = defineStore('login', () => {
    const count = ref('')
    function increment() {
        localStorage.setItem('token', '')
    }

    return { count, increment }
})
