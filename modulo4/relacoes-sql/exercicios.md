# Exercicio 1
a) A chave estrangeira relaciona a chave de uma outra tabela com a tabela em questão.

b)
Uma das avaliações criadas
```
SELECT * FROM `Rating`;
SELECT * FROM `Movie`;
INSERT INTO Rating VALUES
("5555", "Top demais!!", 9.0, "555");
```

c)A FOREIGN KEY impede de criar, pois, não encontra relação entre o id informado.

d) ```ALTER TABLE Movie DROP COLUMN avaliacao;```

# Exercicio 2

a) Irá relacionar o id de um filme com o id de um ator 

b)```INSERT INTO MovieCast VALUES ("555", "1649289802329");```

c) Duas formas que encontrei, uma diz o id referente ao ator conectado ao filme pelo moviecast o outro traz todas as informações atreladas a ambos(ator e filme que estão relacionado)
```
SELECT *
FROM `Movie`
JOIN `MovieCast`
ON MovieCast.movie_id = Movie.id;
```
```
SELECT *
FROM `Movie`
JOIN `Actor`
ON Actor.id = Movie.id;
```
d) Não é possivel apagar pois o mesmo está relacionado ao moviecast através da FOREIGN KEY

# EXERCICIO 3

a) Operador ON diz aonde que ele deve olhar para fazer a relação

b) 
```
SELECT m.id as movie_id, m.titulo as Movie, r.rate as Rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

# DESAFIO
## 4

a)
```
SELECT m.id as movie_id, m.titulo as Movie,
r.rate as rating, r.comment as comment 
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b)
```
SELECT m.id as movie_id, m.titulo, mc.actor_id 
FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c) Não entendi muito bem o que deveria sair dessa query. 
```
SELECT AVG(r.rate), m.id, m.titulo 
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```
# EXERCICIO 5

a) A necessidade um um novo join é exatamente para trazer as informações do Actor juntas.

b)
```
SELECT m.id as movie_id, m.titulo,
a.id as actor_id, a.name
FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) Não estava encontrando o titulo do filme,
Tinha uma virgula no m.title


d) 
```
SELECT  
    m.titulo,  
    a.name as actor, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

# EXERCICIO 6

a) Nesse caso devemos criar uma nova tabela ÓscarFilmes

b) Eu criei 3 query;
Oscar: Armazenará todos os tipos de oscar.

BestActorOscar: Amazenará o Actor e o Filme pelo qual recebeu a query

BestMovieOscar: Armazerá o melhor filme.

Fiz alguns testes e estão funcionando, mas ainda há detalhes a acertar.

eu não salvei como criei, mas é mais ou menos a minha lógica
esse é um modo de chamar.


c) partiu trabalhar 

d) 
```
SELECT m.titulo as title, m.titulo as Movie,
FROM Movie m
JOIN Oscar o
ON Oscar.id = Movie.id
JOIN BestActorOscar
ON BestActorOscar.id = Oscar.id;
```