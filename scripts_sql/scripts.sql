-- script création DB:

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `phone_number` varchar(15),
  `email` varchar(255) NOT NULL,
  `photo` varchar(255),
  `created_at` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` varchar(50),
  `role` varchar(15),
  UNIQUE (`email`)
);

CREATE TABLE `ads` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `description` text NOT NULL,
  `photo` text NOT NULL,
  `price` int NOT NULL,
  `user_id` int,
  `accessories_id` int,
  `trailer_id` int,
  `cargo_bike_id` int,
  `city` varchar(50)
);

CREATE TABLE `articles` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `photo` varchar(255),
  `created_at` datetime NOT NULL,
  `author_id` int
);

CREATE TABLE `posts` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `user_id` int,
  `articles_id` int
);

CREATE TABLE `favorites` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` int,
  `ad_id` int
);

CREATE TABLE `cargo_bike` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `country` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `brand` varchar(255),
  `model` varchar(255),
  `frame_size` varchar(255),
  `build_year` year,
  `bicycode` varchar(12),
  `kms` int,
  `length` float,
  `general_state` varchar(255) NOT NULL,
  `mecanic_state` varchar(255),
  `esthetic_state` varchar(255),
  `guarantee` boolean,
  `info_guarantee` varchar(255),
  `volume_box` float,
  `electric` boolean NOT NULL,
  `engine_power` int,
  `battery_volt` int
);

CREATE TABLE `trailer` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `country` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `brand` varchar(255),
  `model` varchar(255),
  `build_year` year,
  `bicycode` varchar(12),
  `kms` int,
  `general_state` varchar(255),
  `mecanic_state` varchar(255),
  `esthetic_state` varchar(255),
  `guarantee` boolean,
  `max_load_kg` int,
  `max_children` int,
  `volume_trail` float
);

CREATE TABLE `accessories` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `country` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `rain_tente` varchar(255),
  `protective_cover` varchar(255),
  `bicycle_bag` varchar(255),
  `seat_cushion` varchar(255),
  `footrest_footwedge` varchar(255),
  `crutches` varchar(255),
  `luggage_rack` varchar(255),
  `child_seat` varchar(255),
  `others` varchar(255)
);

ALTER TABLE `favorites` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `favorites` ADD FOREIGN KEY (`ad_id`) REFERENCES `ads` (`id`);

ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `posts` ADD FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`);

ALTER TABLE `ads` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `ads` ADD FOREIGN KEY (`accessories_id`) REFERENCES `accessories` (`id`);

ALTER TABLE `ads` ADD FOREIGN KEY (`trailer_id`) REFERENCES `trailer` (`id`);

ALTER TABLE `ads` ADD FOREIGN KEY (`cargo_bike_id`) REFERENCES `cargo_bike` (`id`);

ALTER TABLE `articles` ADD FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);


-- créer un user:
INSERT INTO users (firstname, lastname, phone_number, email, created_at, password, city, role) VALUES ('Arnaud', 'Clerc', '0733333333', 'arn@gmail.com', now(), 'arnaud123', 'Pessac', 'user');
INSERT INTO users (firstname, lastname, phone_number, email, created_at, password, city, role) VALUES ('Clément', 'Fouillet', '0744444444', 'clem@gmail.com', now(), 'clem123', 'Bordeaux', 'admin');

-- créer un article:

INSERT INTO articles (title, text, photo, created_at) VALUES ("Qu'est-ce qu'un vélo cargo", "Le vélo cargo ou vélo de fret est un véhicule terrestre à deux ou trois roues dérivé de la bicyclette, destiné à transporter des charges plus importantes que sur un vélo classiqueLe vélo cargo est un vélo spécifiquement conçu pour le transport de fret volumineux ou des personnes, particulièrement des enfants. Il utilise pour cela un équipement inamovible.On distingue traditionnellement les vélos biporteurs, à deux roues, des triporteurs à trois roues.Les premiers vélos cargos ont été utilisés par les commerçants pour livrer le courrier, le pain et le lait, entre autres. Au début du xxe siècle, ils étaient couramment utilisés par les professionnels pour les livraisons locales de marchandises, en particulier sous la forme de triporteurs. Au Royaume-Uni, ce type de vélo est encore parfois connu sous les noms de vélo de boucher ou vélo de boulanger, même si les bureaux de poste sont de loin les plus grands utilisateurs du vélo cargo.Avec la domination du moteur à combustion interne dans les pays industrialisés après la Seconde Guerre mondiale, les vélos de fret sont devenus moins populaires. Dans le reste du monde, cependant, ils ont continué à être fabriqués et largement utilisés.Dans les années 1980 en Europe et les années 1990 aux États-Unis, de petits fabricants souvent inspirés par des considérations écologiques ont relancé la fabrication des vélos cargos. Ce nouvel essor répond notamment à la saturation des transports motorisés dans les zones urbaines et à la pollution de l'air qui en découle.", "https://source.unsplash.com/random?bike/6", now());
INSERT INTO articles (title, text, photo, created_at) VALUES ("Comment louer un vélo cargo ?", "Pour louer un vélo cargo...", "https://source.unsplash.com/random?bike/7", now());
INSERT INTO articles (title, text, photo, created_at) VALUES ("Comment acheter un vélo cargo ?", "Pour acheter un vélo cargo...", "https://source.unsplash.com/random?bike/8", now());

-- créer un vélo cargo:

INSERT INTO cargo_bike (country, department, brand, model, frame_size, build_year, bicycode, kms, length, general_state, mecanic_state, esthetic_state, guarantee, info_guarantee, volume_box, electric, engine_power, battery_volt) VALUES ('France', 'Gironde', 'Peugeot', 'veloP15', '40', '2012', '123936789039', 2200, 200.5, 'bon', 'bon', 'bon', true, "", 3.5, true, 120, 140);
INSERT INTO cargo_bike (country, department, brand, model, frame_size, build_year, bicycode, kms, length, general_state, mecanic_state, esthetic_state, guarantee, info_guarantee, volume_box, electric, engine_power, battery_volt) VALUES ('France', 'Landes', 'Peugeot', 'veloP13', '40', '2015', '123936789039', 2500, 200.5, 'mauvais', 'mauvais', 'mauvais', true, "", 3.5, true, 120, 140);

-- créer un accessoire:

INSERT INTO accessories (country, department, rain_tente, protective_cover, bicycle_bag, seat_cushion, footrest_footwedge, crutches, luggage_rack, child_seat, others) VALUES ('France', 'Gironde', '', '', '', 'oui', '', '', '', '', '');
INSERT INTO accessories (country, department, rain_tente, protective_cover, bicycle_bag, seat_cushion, footrest_footwedge, crutches, luggage_rack, child_seat, others) VALUES ('France', 'Landes', '', '', 'oui', '', '', '', '', '', '');


-- créer un remorque:

INSERT INTO trailer (country, department, brand, model, build_year, bicycode, kms, general_state, mecanic_state, esthetic_state, guarantee, max_load_kg, max_children, volume_trail) VALUES ('France', 'Gironde', 'Peugeot', 'veloP1456', '2015', '123456789012', 1380, 'bon', 'bon', 'bon', false, 120, 3, 4.5);
INSERT INTO trailer (country, department, brand, model, build_year, bicycode, kms, general_state, mecanic_state, esthetic_state, guarantee, max_load_kg, max_children, volume_trail) VALUES ('France', 'Landes', 'Peugeot', 'veloP1498', '2018', '123456789012', 1500, 'bon', 'bon', 'bon', true, 120, 3, 4.5);

