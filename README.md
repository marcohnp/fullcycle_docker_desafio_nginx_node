## Desafio Nginx com Node.js ##
Desafio para o módulo Docker do curso FullCycle 3.0

**GitHub**: 

Use **docker-compose up -d --build**.

**NOTA**: As imagens escolhidas, tanto Node(18) quanto MySQL(8.1), foram definidas para uso também na arquitetura arm64, utilizadas pelos MacBook M1 e seus posteriores. Segundo o Docker Hub, tais imagens são compatíveis com as arquiteturas: linux/amd64, linux/arm64/v8. Como sou usuário de um MacBook M1 2021, precisei utilizá-las e também configurar o Node para instalar o "mysql2" que é compatível com tais imagens. Já para o script **index.js**, utilizei a biblioteca **Faker**, para gerar nomes aleatórios e salvar no banco de dados, criando assim uma lista que vai se atualizando a cada atualização da home.


