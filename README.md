# FastifyContactManagerAPI

## Regras de Negócios 

1. **Cadastro de Usuários:**
   - Para realizar o cadastro, os usuários devem fornecer informações obrigatórias, incluindo nome e email.

2. **Unicidade de Email:**
   - Cada endereço de email de usuário deve ser exclusivo dentro do sistema.

3. **Requisitos para Contatos:**
   - Os contatos devem conter, no mínimo, um nome e uma forma de contato, como número de telefone ou endereço de e-mail.

4. **Operações de Contato Restritas:**
   - A execução de operações, como criação, atualização e exclusão de contatos, é permitida apenas para usuários autenticados.

5. **Autorização Baseada em Funções:**
   - A autorização para operações específicas é determinada pelas funções do usuário, como administrador ou usuário regular.

6. **Segurança dos Dados:**
   - Todos os dados da API são armazenados de forma segura, protegidos contra acesso não autorizado.

7. **Validação de Entrada:**
   - A entrada do usuário é validada para prevenir a inserção de dados incorretos ou maliciosos.

Essas regras de negócios atualizadas visam garantir a integridade, segurança e conformidade do sistema, seguindo boas práticas de desenvolvimento e gestão de dados.
