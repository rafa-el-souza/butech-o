export interface LoginInput {
  email: string,
  senha: string,
}

export type LoginOutput = Promise<{ token: string }>;
