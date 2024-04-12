import { createAPI } from "../../helpers/createApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

const contactsKeys = {
  contacts: ["contacts"],
};

const contactsApi = createAPI("/contacts");

export const useGetUsers = () => {
  return useQuery({
    queryKey: contactsKeys.contacts,
    queryFn: async () => {
      const response = await contactsApi.get("/");
      return response.data.responseObject as Contact[];
    },
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (contact: Contact) => contactsApi.post("/", contact),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsKeys.contacts });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedUser: Contact) => contactsApi.put(`/${updatedUser.id}`, updatedUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsKeys.contacts });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => contactsApi.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: contactsKeys.contacts });
    },
  });
};
