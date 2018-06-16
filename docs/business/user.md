# Usuário

Este documento descreve a entidade do usuário.

| Campo | Tipo | Descrição | Obrigatório | Padrão |
| --- | --- | --- | --- | --- | --- |
| _id | ObjectId | Id único | sim | - |
| eula_accepted | boolean |  Aceitou termo de licença | sim | false |
| investment_profile | boolean | Respondeu questionário de investidor | sim | false |
| investment_profile_ref | [form_output](./form-output.md) | Resultados do questionário de investidor | não | - |

---

[[← Página acima: Entidades]](./readme.md)