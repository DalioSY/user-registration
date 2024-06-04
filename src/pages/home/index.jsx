import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { Article, Container, Form, H1, Main, Section } from "./style";

export const Home = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Main>
      <Container>
        <Form>
          <H1>User Registration</H1>
          <input placeholder="Nome" name="Name" type="text" ref={inputName} />
          <input placeholder="Idade" name="Age" type="text" ref={inputAge} />
          <input
            placeholder="E-mail"
            name="E-mail"
            type="email"
            ref={inputEmail}
          />
          <button type="button" onClick={createUsers}>
            Cadastrar
          </button>
        </Form>
        <div>
          {users.map((user) => (
            <Section key={user.id}>
              <Article>
                <p>
                  Nome: <span>{user.name} </span>
                </p>
                <p>
                  Idade: <span>{user.age} </span>
                </p>
                <p>
                  email: <span>{user.email} </span>
                </p>
              </Article>
              <button onClick={() => deleteUsers(user.id)}>Excluir</button>
            </Section>
          ))}
        </div>
      </Container>
    </Main>
  );
};
