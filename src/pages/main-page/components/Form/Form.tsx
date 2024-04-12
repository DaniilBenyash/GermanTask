import { FC } from "react";
import styles from "./Form.module.scss";
import { Contact } from "../../api";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input, Form as FormUI } from "../../../../ui-kit";

type FormProps = {
  contact: Partial<Contact> | null;
  onAddUser: (contact: Contact) => void;
  onUpdateUser: (contact: Contact) => void;
  onDeleteUser: (id: number) => void;
};

export const Form: FC<FormProps> = ({ contact, onAddUser, onDeleteUser, onUpdateUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<Contact>({
    defaultValues: { ...contact },
  });
  const onSubmit: SubmitHandler<Contact> = (contact) => {
    if (!contact.id) {
      onAddUser(contact);
      return;
    }
    onUpdateUser(contact);
  };

  const handleDelete = () => {
    if (!contact?.id) return;
    onDeleteUser(contact.id);
  };
  return (
    <FormUI onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.data_container}>
        <h2 className={styles.title}>Eintrag bearbeiten</h2>
        <div className={styles.input_container}>
          <Input placeholder="Vorname*" {...register("firstname", { required: true })} />
          <Input placeholder="Nachname*" {...register("lastname", { required: true })} />
          <Input placeholder="E-Mail*" {...register("email", { required: true })} />
        </div>
      </div>
      <div className={styles.button_container}>
        {contact?.id && (
          <Button type="secondary" onClick={handleDelete}>
            LÖSCHEN
          </Button>
        )}
        <div className={styles.right_section_buttons}>
          <Button type="primary">ABBRECHEN</Button>
          <Button type="default" disabled={!isValid}>
            SPEICHERN
          </Button>
        </div>
      </div>
    </FormUI>
  );
};
