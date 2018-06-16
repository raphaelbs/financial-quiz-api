# Formulário Entrada

Este documento descreve a entidade do Formulário de Entrada.

Esta entidade contém campos e seus tipos para apresentação dinâmica. Representa o cadastro do formulário que será apresentado na tela.

| Campo | Tipo | Descrição | Obrigatório | Padrão |
| --- | --- | --- | --- | --- | --- |
| _id | ObjectId | Id único | sim | - |
| type | [form_input_type](./form-input-type.md) | Tipo do formulário de entrada | sim | - |
| label | string | Descrição do formulário, a pergunta a ser respondida | não | - |
| key | string | Chave para identificação do conteúdo deste formulário | não | - |
| required | boolean | Obrigatoriedade deste formulário de entrada | sim | false |
| children | Array<[form_input](./form-input.md)> | Conjunto de formulários de entrada que pertencem a este | não | - |

---

[[← Página acima: Entidades]](./readme.md)