import React, { useState, useCallback, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import getValidationErros from '~/utils/getValidationsErrors';

import { Container } from './styles';
import Input from '~/components/Input';
import Textarea from '~/components/Textarea';

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => setShow(false), []);
  const handleShow = useCallback(() => setShow(true), []);

  const handleSubmit = useCallback(async (data, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Deve ser um e-mail válido')
          .required('O e-mail é obrigatório'),
        celphone: Yup.string().required('O celular é obrigatório'),
        message: Yup.string().required('A mensagem é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      Swal.fire('Tudo certo!', 'Aguarde nosso retorno.', 'success').then(() =>
        reset()
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErros(error);
        formRef.current?.setErrors(errors);
      } else {
        Swal.fire('Opss...', 'Tente novamente, por favor', 'error');
      }
    }
  }, []);

  return (
    <Container>
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-12 px-0">
            <img
              src="https://via.placeholder.com/1920x680?text=Banner"
              alt="Banner"
              className="w-100 mb-3"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-4">
            <img
              src="https://via.placeholder.com/640x400"
              alt="Imagem 1"
              className="w-100 mb-3"
            />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleShow}
            >
              Ver mais
            </button>
          </div>
          <div className="col-lg-4">
            <img
              src="https://via.placeholder.com/640x400"
              alt="Imagem 2"
              className="w-100 mb-3"
            />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleShow}
            >
              Ver mais
            </button>
          </div>
          <div className="col-lg-4">
            <img
              src="https://via.placeholder.com/640x400"
              alt="Imagem 3"
              className="w-100"
            />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleShow}
            >
              Ver mais
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/960x400"
              alt="Imagem 4"
              className="w-100 mb-3"
            />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://via.placeholder.com/960x400"
              alt="Imagem 5"
              className="w-100 mb-3"
            />
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum
              qui tempora? Modi non tempora enim impedit perspiciatis veritatis
              quas earum nulla, sint nemo eveniet magni. Explicabo deleniti ad
              incidunt!
            </p>
          </div>
        </div>
        <div id="contato" className="row mt-2 mb-4">
          <div className="col-lg-6">
            <h3>Contato</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              unde nostrum velit culpa commodi nesciunt, voluptatum ipsa maiores
              aperiam sunt animi delectus, itaque quo asperiores odit quam quas
              eius. Molestias?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              unde nostrum velit culpa commodi nesciunt, voluptatum ipsa maiores
              aperiam sunt animi delectus, itaque quo asperiores odit quam quas
              eius. Molestias?
            </p>
          </div>
          <div className="col-lg-6">
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" placeholder="Nome" />
              <Input type="email" name="email" placeholder="E-mail" />
              <Input name="celphone" placeholder="Celular" />
              <Textarea name="message" placeholder="Mensagem" />
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Enviar
              </button>
            </Form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <button type="button" className="btn-close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Home;
