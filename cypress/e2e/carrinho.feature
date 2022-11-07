Feature: Carrinho

Scenario: Adicionar múltiplos produtos ao carrinho - Verificar preço final
    Given Dado que estou logado na amazon
    When Quando adiciono múltiplos produtos ao carrinho
    Then Então o preço final do seu carrinho é a soma dos ítens adicionados
