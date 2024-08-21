"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from "@/services/api";

export function RegisterUser() {
  const inputName = React.useRef<HTMLInputElement>(null);
  const inputEmail = React.useRef<HTMLInputElement>(null);

  async function addNewUser() {
    await api.post("/", {
      name: inputName.current?.value ?? "",
      email: inputEmail.current?.value ?? "",
    });

    inputName.current!.value = "";
    inputEmail.current!.value = "";
  }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastrar Usuário</CardTitle>
        <CardDescription>Seja um desenvolvedor de Sucesso!</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name Completo</Label>
              <Input
                className="bg-background"
                id="name"
                ref={inputName}
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                ref={inputEmail}
                placeholder="Digite o sua e-mail"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="button" onClick={addNewUser}>
          Enviar
        </Button>
      </CardFooter>
    </Card>
  );
}
