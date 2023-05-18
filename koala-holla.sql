CREATE TABLE "koala" (
"id" serial PRIMARY KEY,
"name" VARCHAR (20) NOT NULL,
"gender" VARCHAR (5),
"age" INT,
"ready_to_transfer" BOOLEAN,
"notes" VARCHAR (100) );

INSERT INTO "koala" ( "name", "gender", "age", "ready_to_transfer", "notes")
VALUES ('Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
('Jean', 'F', 5, TRUE, 'Allergic to lots of lava'),
('Ororo', 'F',7, FALSE, 'Loves listening to Paula (Abdula)'),
('Logan', 'M', 15, FALSE, 'Loves the sauna'),
('Charlie', 'M', 9, TRUE, 'Favorite band is Nirvana'),
('Betsy', 'F', 4, TRUE, 'Has a pet iguana');



