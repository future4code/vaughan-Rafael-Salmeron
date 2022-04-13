### Exercício 1
a) Aqui altera a tabela Actor removendo a coluna salary

b) Aqui altera a tabela Actor mudando o gender to sex com alocação de (6)

c) Aqui altera a tabela Actor e tenta mudar o gender para alocação de (255), porém se o código de cima foi rodado vai dar erro pois agora o gender é sex

d)Tinha rodado os comandos sem ler o enunciado e alterei tudo kkk
então saiu esse código:
```ALTER TABLE Actor CHANGE sex gender VARCHAR(100);```

### Exercício 2
a) 
```
UPDATE Actor SET name = "F Montenegro"
WHERE id = "003";
UPDATE Actor SET birth_date = "1930-10-04"
WHERE id = "003";
```

b) Tive um erro ao tentar executar esse código:
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";
```
c) 
```
UPDATE Actor
SET 
name = "Jim Carrie",
birth_date = "1962-01-17",
salary = 600000000,
gender = "male"
WHERE id = "005";
```

d) Deu sucesso!? kk Coloquei id="000"
acredito que não da erro porque se as informações estão corretas em relação ao tipo

