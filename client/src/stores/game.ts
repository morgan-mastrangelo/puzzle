import type { GameHistory } from "@/utils/types";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore('game', () => {
  const options = ref({
    difficulty: "easy",
    size: 4,
    disabled: true,
    totalTime: 300,
    setted: false
  });

  function reportHistory(data: GameHistory) {
    return axios.post('http://127.0.0.1:8000/api/history/', data)
      .then(({data}) => data)
      .catch(({response:{data}}) => data)
  }

  return { options, reportHistory }
})