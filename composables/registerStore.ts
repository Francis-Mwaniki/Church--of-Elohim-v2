import { defineStore } from "pinia";
import { Iuser } from "~~/types";
import useToast from "./useToast";
export const useRegisterStore = defineStore("register-store", {
  state: () => ({
    users: [] as Iuser[],
  }),
  actions: {
    //create a new book
    async create(user: Iuser) {
      await $fetch("/api/register/create", {
        method: "POST",
        body: user,
      })
        .catch((err) => {
          useToast().error(err.data.message);
        })
        .then(async (res) => {
          let successMsg = "signed in successfully";
          let msg = await res.message;
          if (msg == successMsg) return useToast().success(successMsg);
          useToast().error(msg);
        });
    },
    //update a book
  },
});
