import { gql } from '@apollo/client';
import { client } from '../apollo-client';

export const LOGIN_MUTATION = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: {
      username: $username
      password: $password
    }) {
      authToken
      user {
        id
        name
        email
        roles
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation RegisterUser($username: String!, $email: String!, $password: String!) {
    registerUser(input: {
      username: $username
      email: $email
      password: $password
    }) {
      user {
        id
        name
        email
      }
    }
  }
`;

export async function loginUser(username: string, password: string) {
  try {
    const { data } = await client.mutate({
      mutation: LOGIN_MUTATION,
      variables: { username, password },
    });
    
    if (data?.login?.authToken) {
      localStorage.setItem('authToken', data.login.authToken);
      return data.login.user;
    }
    throw new Error('Login failed');
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function registerUser(username: string, email: string, password: string) {
  try {
    const { data } = await client.mutate({
      mutation: REGISTER_MUTATION,
      variables: { username, email, password },
    });
    
    if (data?.registerUser?.user) {
      return data.registerUser.user;
    }
    throw new Error('Registration failed');
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}