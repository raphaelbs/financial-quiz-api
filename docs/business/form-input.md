# Formulário Entrada

Este documento descreve a entidade do Formulário de Entrada.

Esta entidade contém campos e seus tipos para apresentação dinâmica.

```yaml
_id: ObjectId()             # Id único do formulário de entrada.
type: form_input_type       # Tipo do formulário de entrada
label: string               # Descrição do formulário, a pergunta a ser respondida
key: string                 # Chave para identificação do conteúdo deste formulário
required: boolean           # Obrigatoriedade deste formulário de entrada
children: Array<form_input> # Conjunto de formulários de entrada que pertencem a este
```

## Referências

- [form_input_type](./form-input-type.md)