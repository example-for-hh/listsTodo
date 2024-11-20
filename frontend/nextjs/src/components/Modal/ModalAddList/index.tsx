import { FC } from 'react';
import { Form, Formik, FieldArray, FormikValues } from 'formik';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import Modal from '..';
import ModalBody from '../ModalBody';
import Button from '@components/ui/Button';
import ModalTitle from '../ModalTitle';
import ModalHeader from '../ModalHeader';
import ModalFooter from '../ModalFooter';

import { useAppSelector, useAppDispatch } from '@src/hooks/redux';
import { selectModalByType } from '@store/modal/selectors';
import { MODAL_ADD_LIST } from '@vars/modal';
import { modalToggle } from '@store/modal/slice';
import FormControl from '@components/ui/FormControl';
import Input from '@components/ui/Input';
import FormError from '@components/ui/FormError';

import { ModalBtnAdd } from '../styled';
import { ADD_LIST } from '@src/graphql/todo';
import { TModal } from '@src/types';

const ModalAddList: FC = () => {
  const dispatch = useAppDispatch();

  const modal: TModal = useAppSelector(
    selectModalByType(MODAL_ADD_LIST)
  ) as TModal;

  const [createList] = useMutation(ADD_LIST, {
    onError: error => console.error('Error creating list:', error),
  });

  const handleClose = () => {
    dispatch(modalToggle({ modalType: MODAL_ADD_LIST }));
  };

  const handleSubmut = async (values: FormikValues) => {
    try {
      const newList = {
        title: values.title,
        todos: values.todos,
      };

      await createList({ variables: { input: newList } });

      setTimeout(() => handleClose(), 200);
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    title: '',
    todos: [{ title: '' }],
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .typeError('Это поле должно быть строкой')
      .required('Это поле обязательно для заполнения'),
    todos: Yup.array()
      .of(
        Yup.object().shape({
          title: Yup.string().required('Это поле обязательно для заполнения'),
        })
      )
      .min(1, 'Минимум одна задача должна быть')
      .required('Это поле обязательно для заполнения'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => handleSubmut(values)}>
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
          } = props;

          return (
            <Modal onCloseModal={handleClose}>
              <Form onSubmit={handleSubmit}>
                <ModalHeader>
                  <ModalTitle title={modal.modalTitle} />
                </ModalHeader>
                <ModalBody>
                  <FormControl>
                    <Input
                      name="title"
                      type="text"
                      placeholder="Заголовок списка"
                      onChange={handleChange}
                      value={values['title']}
                      error={touched['title'] && errors['title'] ? true : false}
                    />
                    {touched['title'] && errors['title'] && (
                      <FormError name="title" />
                    )}
                  </FormControl>
                  <FieldArray name="todos">
                    {({ push, remove }) => (
                      <>
                        {values.todos.map((todo, index) => (
                          <FormControl key={index}>
                            <Input
                              name={`todos.${index}.title`}
                              type="text"
                              placeholder={`Задача ${index + 1}`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={todo.title}
                              error={
                                touched.todos &&
                                touched.todos[index] &&
                                errors.todos &&
                                errors.todos[index]
                                  ? true
                                  : false
                              }
                            />
                            {touched.todos &&
                              touched.todos[index] &&
                              errors.todos &&
                              errors.todos[index] && (
                                <FormError name={`todos.${index}.title`} />
                              )}
                            <Button
                              onClick={() => remove(index)}
                              typeText={true}>
                              Удалить
                            </Button>
                          </FormControl>
                        ))}

                        <ModalBtnAdd>
                          <Button onClick={() => push({ title: '' })}>
                            Добавить задачу
                          </Button>
                        </ModalBtnAdd>
                      </>
                    )}
                  </FieldArray>
                </ModalBody>
                <ModalFooter>
                  <Button
                    type="submit"
                    text="Сохранить"
                    onSubmit={() => handleSubmit}
                  />

                  <Button text="Закрыть" onClick={handleClose} />
                </ModalFooter>
              </Form>
            </Modal>
          );
        }}
      </Formik>
    </>
  );
};

export default ModalAddList;
