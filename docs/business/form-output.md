# Formulário Saida

Este documento descreve a entidade do Formulário de Saída.

Esta entidade contém os valores do [Formulário Entrada](./form-input.md). Representa os dados salvos no banco de dados.

| Campo | Tipo | Descrição | Obrigatório | Padrão |
| --- | --- | --- | --- | --- | --- |
| _id | ObjectId | Id único | sim | - |
| [form_input](./form-input.md)[key] | any | Dado não-estruturado. Representa o resultado do formulário dinâmico | sim | - |

---

[[← Página acima: Entidades]](./readme.md)