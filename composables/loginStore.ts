import { defineStore } from "pinia";
import { ToastContent } from "vue-toastification/dist/types/types";
import { IexistingUser } from "~~/types";
import useToast from "./useToast";
export const useLoginStore = defineStore("login-store", {
  state: () => ({
    users: [] as IexistingUser[],
  }),
  actions: {
    //create a new book
    async create(user: IexistingUser) {
      await $fetch("/api/login/create", {
        method: "POST",
        body: user,
      })
        //err.data.message
        .catch((err: { data: { message: ToastContent } }) => {
          useToast().error(err.data.message);
        })
        .then(async (res: { message: any }) => {
          let successMsg = "logged in successfully";
          let msg = await res.message;
          if (msg == successMsg)
            return useToast().success("logged in successfully");
          useToast().error(msg);
        });
    },
    //update a book
  },
});
