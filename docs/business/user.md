# Usuário

Este documento descreve a entidade do usuário.

```yaml
_id: ObjectId()                             # Id único do usuário.
eula_accepted: boolean                      # Aceitou termo de licença.
investment_profile: boolean                 # Respondeu questionário de investidor.
investment_profile_ref: investment_profile  # FK para o questionário de investidor.
```

## Referências

- [investment_profile](./investment-profile.md)