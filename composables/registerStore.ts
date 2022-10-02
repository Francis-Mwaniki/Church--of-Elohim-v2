import { defineStore } from "pinia";
import { ToastContent } from "vue-toastification/dist/types/types";
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
        .catch((err: { data: { message: ToastContent } }) => {
          useToast().error(err.data.message);
        })
        .then(async (res: { message: any }) => {
          let successMsg = "signed in successfully";
          let msg = await res.message;
          if (msg == successMsg) return useToast().success(msg);
          useToast().error(msg);
        });
    },
    //update a book
  },
});
