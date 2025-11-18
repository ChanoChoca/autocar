-- NOTA: no es necesario usar este archivo, leer README

-- =============================
-- CREACIÓN DE TABLAS
-- =============================

-- Tabla Car
CREATE TABLE Car (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(191) NOT NULL,
  model VARCHAR(191) NOT NULL,
  year INT NOT NULL,
  fuel VARCHAR(191) NOT NULL,
  transmission VARCHAR(191) NOT NULL,
  price DOUBLE NOT NULL,
  version VARCHAR(191) NOT NULL,
  type ENUM('VAN', 'SUV', 'Sedán', 'Hatchback', 'Cupé', 'Convertible', 'Camioneta', 'Rural') NOT NULL,
  acceleration DOUBLE NOT NULL,
  horsepower INT NOT NULL,
  cylinders INT NOT NULL,
  gears INT NOT NULL,
  liters DOUBLE NOT NULL,
  grossWeight INT NOT NULL,
  fuelType VARCHAR(191) NOT NULL,
  engineType VARCHAR(191) NOT NULL,
  rimDiameter INT NOT NULL,
  doors INT NOT NULL,
  rimType VARCHAR(191) NOT NULL,
  lowBeamBulb VARCHAR(191) NOT NULL,
  airConditioning BOOLEAN NOT NULL,
  cruiseControl BOOLEAN NOT NULL,
  brakeDiscs INT NOT NULL,
  brakeAssist BOOLEAN NOT NULL,
  frontAirbags BOOLEAN NOT NULL,
  absBrakes BOOLEAN NOT NULL,
  totalAirbags INT NOT NULL,
  kneeAirbag BOOLEAN NOT NULL,
  passengers INT NOT NULL,
  seatMaterial VARCHAR(191) NOT NULL,
  bluetooth BOOLEAN NOT NULL,
  radio VARCHAR(191) NOT NULL,
  PRIMARY KEY (id)
);

-- Tabla CarImage
CREATE TABLE CarImage (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(191) NOT NULL,
  carId INT NOT NULL,
  PRIMARY KEY (id),
  INDEX carId_idx (carId),
  CONSTRAINT CarImage_car_fkey
    FOREIGN KEY (carId)
    REFERENCES Car (id)
    ON DELETE CASCADE
);

-- Tabla Client
CREATE TABLE Client (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(191) NOT NULL,
  lastName VARCHAR(191) NOT NULL,
  email VARCHAR(191) NOT NULL,
  phone VARCHAR(191),
  image VARCHAR(191) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email_unique (email)
);

-- Tabla PaymentMethod
CREATE TABLE PaymentMethod (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(191) NOT NULL,
  PRIMARY KEY (id)
);

-- Tabla Sale
CREATE TABLE Sale (
  id INT NOT NULL AUTO_INCREMENT,
  carId INT NOT NULL,
  clientId INT NOT NULL,
  paymentMethodId INT NOT NULL,
  saleDate DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (id),
  INDEX carId_idx (carId),
  INDEX clientId_idx (clientId),
  INDEX paymentMethodId_idx (paymentMethodId),
  CONSTRAINT Sale_car_fkey
    FOREIGN KEY (carId)
    REFERENCES Car (id),
  CONSTRAINT Sale_client_fkey
    FOREIGN KEY (clientId)
    REFERENCES Client (id),
  CONSTRAINT Sale_paymentMethod_fkey
    FOREIGN KEY (paymentMethodId)
    REFERENCES PaymentMethod (id)
);

-- =============================
-- INSERTS
-- =============================

-- Inserts tabla PaymentMethod
INSERT INTO PaymentMethod (name) VALUES
('Efectivo'),
('Transferencia');

-- Inserts tabla Client
INSERT INTO Client (firstName, lastName, email, phone, image) VALUES
('Juan', 'Perez', 'juan.perez@email.com', '123456789', 'https://i.pravatar.cc/150?u=1'),
('Maria', 'Gomez', 'maria.gomez@email.com', '987654321', 'https://i.pravatar.cc/150?u=2'),
('Carlos', 'Lopez', 'carlos.lopez@email.com', '555123456', 'https://i.pravatar.cc/150?u=3'),
('Ana', 'Martinez', 'ana.martinez@email.com', '444555666', 'https://i.pravatar.cc/150?u=4'),
('Luis', 'Rodriguez', 'luis.rodriguez@email.com', '333222111', 'https://i.pravatar.cc/150?u=5');

-- Inserts tabla Car
INSERT INTO Car (brand, model, year, fuel, transmission, price, version, type, acceleration, horsepower, cylinders, gears, liters, grossWeight, fuelType, engineType, rimDiameter, doors, rimType, lowBeamBulb, airConditioning, cruiseControl, brakeDiscs, brakeAssist, frontAirbags, absBrakes, totalAirbags, kneeAirbag, passengers, seatMaterial, bluetooth, radio) VALUES
('Toyota', 'Corolla', 2022, 'Gasolina', 'Automático', 25000.0, 'LE', 'Sedán', 8.5, 169, 4, 6, 1.8, 1800, 'Nafta', 'En línea', 16, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Tela', true, 'AM/FM'),
('Ford', 'F-150', 2023, 'Gasolina', 'Automático', 45000.0, 'XL', 'Camioneta', 6.2, 325, 6, 10, 3.3, 3200, 'Nafta', 'V6', 17, 4, 'Acero', 'Halógeno', true, true, 4, true, true, true, 6, false, 6, 'Tela', true, 'AM/FM/CD'),
('Honda', 'Civic', 2021, 'Gasolina', 'Manual', 22000.0, 'Sport', 'Sedán', 7.8, 180, 4, 6, 2.0, 1700, 'Nafta', 'En línea', 18, 4, 'Aleación', 'LED', true, false, 4, true, true, true, 4, false, 5, 'Tela', true, 'AM/FM'),
('BMW', 'X5', 2023, 'Diesel', 'Automático', 65000.0, 'xDrive40i', 'SUV', 5.5, 375, 6, 8, 3.0, 2500, 'Diesel', 'En línea', 19, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 8, true, 5, 'Cuero', true, 'Sonido Premium'),
('Chevrolet', 'Camaro', 2022, 'Gasolina', 'Manual', 35000.0, 'SS', 'Cupé', 4.0, 455, 8, 6, 6.2, 1900, 'Nafta', 'V8', 20, 2, 'Aleación', 'LED', true, false, 4, true, true, true, 4, false, 4, 'Cuero', true, 'AM/FM'),
('Volkswagen', 'Golf', 2021, 'Gasolina', 'Automático', 24000.0, 'GTI', 'Hatchback', 6.9, 220, 4, 7, 2.0, 1600, 'Nafta', 'En línea', 17, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Tela', true, 'AM/FM'),
('Mercedes-Benz', 'Sprinter', 2023, 'Diesel', 'Automático', 55000.0, '2500', 'VAN', 9.5, 188, 4, 7, 2.0, 3500, 'Diesel', 'En línea', 16, 4, 'Acero', 'Halógeno', true, true, 4, true, true, true, 4, false, 12, 'Tela', true, 'AM/FM'),
('Mazda', 'MX-5', 2022, 'Gasolina', 'Manual', 28000.0, 'Miata', 'Convertible', 6.5, 181, 4, 6, 2.0, 1100, 'Nafta', 'En línea', 17, 2, 'Aleación', 'LED', true, false, 4, true, true, true, 2, false, 2, 'Cuero', true, 'AM/FM'),
('Subaru', 'Outback', 2023, 'Gasolina', 'Automático', 32000.0, 'Limited', 'Sedán', 8.0, 250, 4, 8, 2.5, 2100, 'Nafta', 'Flat', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 8, true, 5, 'Cuero', true, 'Sonido Premium'),
('Jeep', 'Wrangler', 2022, 'Gasolina', 'Manual', 38000.0, 'Sport', 'SUV', 8.9, 285, 6, 6, 3.6, 2400, 'Nafta', 'V6', 17, 4, 'Aleación', 'Halógeno', true, false, 4, true, true, true, 4, false, 5, 'Tela', true, 'AM/FM'),
('Audi', 'A4', 2023, 'Gasolina', 'Automático', 42000.0, 'Premium', 'Sedán', 7.1, 201, 4, 7, 2.0, 1800, 'Nafta', 'En línea', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Cuero', true, 'Bang & Olufsen'),
('Nissan', 'Titan', 2021, 'Gasolina', 'Automático', 40000.0, 'SV', 'Camioneta', 7.5, 375, 8, 9, 3.5, 3300, 'Nafta', 'V8', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 6, 'Tela', true, 'AM/FM/CD'),
('Hyundai', 'Tucson', 2022, 'Gasolina', 'Automático', 27000.0, 'SEL', 'SUV', 8.2, 187, 4, 6, 2.5, 2000, 'Nafta', 'En línea', 17, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Tela', true, 'AM/FM'),
('Porsche', '911', 2023, 'Gasolina', 'Manual', 120000.0, 'Carrera', 'Cupé', 4.2, 379, 6, 7, 3.0, 1600, 'Nafta', 'Flat', 20, 2, 'Aleación', 'LED', true, false, 4, true, true, true, 4, false, 4, 'Cuero', true, 'Sonido Premium'),
('Kia', 'Soul', 2021, 'Gasolina', 'Automático', 20000.0, 'EX', 'Hatchback', 8.8, 147, 4, 6, 2.0, 1500, 'Nafta', 'En línea', 16, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Tela', true, 'AM/FM'),
('Ram', '1500', 2023, 'Gasolina', 'Automático', 48000.0, 'Tradesman', 'Camioneta', 6.8, 395, 8, 8, 5.7, 3400, 'Nafta', 'V8', 17, 4, 'Acero', 'Halógeno', true, true, 4, true, true, true, 6, false, 6, 'Tela', true, 'AM/FM/CD'),
('Lexus', 'RX', 2022, 'Híbrido', 'Automático', 60000.0, '350h', 'SUV', 7.9, 275, 6, 8, 3.5, 2300, 'Híbrido', 'V6', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 8, true, 5, 'Cuero', true, 'Mark Levinson'),
('Tesla', 'Model 3', 2023, 'Eléctrico', 'Automático', 50000.0, 'Long Range', 'Sedán', 5.8, 283, 0, 1, 0.0, 1800, 'Eléctrico', 'Eléctrico', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 8, false, 5, 'Cuero Vegano', true, 'Premium Audio'),
('Volvo', 'XC90', 2023, 'Gasolina', 'Automático', 55000.0, 'T6 Momentum', 'SUV', 6.5, 316, 4, 8, 2.0, 2500, 'Nafta', 'En línea', 19, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 7, false, 7, 'Cuero', true, 'Harman Kardon'),
('Mitsubishi', 'Outlander', 2022, 'Gasolina', 'Automático', 30000.0, 'SE', 'SUV', 8.0, 181, 4, 8, 2.5, 2200, 'Nafta', 'En línea', 18, 4, 'Aleación', 'LED', true, true, 4, true, true, true, 6, false, 5, 'Tela', true, 'AM/FM/CD');

-- Inserts tabla CarImage
INSERT INTO CarImage (url, carId) VALUES
('https://picsum.photos/seed/car1-1/600/400', 1),
('https://picsum.photos/seed/car1-2/600/400', 1),
('https://picsum.photos/seed/car1-3/600/400', 1),
('https://picsum.photos/seed/car1-4/600/400', 1),
('https://picsum.photos/seed/car1-5/600/400', 1),
('https://picsum.photos/seed/car1-6/600/400', 1),
('https://picsum.photos/seed/car1-7/600/400', 1),
('https://picsum.photos/seed/car1-8/600/400', 1),
('https://picsum.photos/seed/car1-9/600/400', 1),
('https://picsum.photos/seed/car1-10/600/400', 1),
('https://picsum.photos/seed/car2-1/600/400', 2),
('https://picsum.photos/seed/car2-2/600/400', 2),
('https://picsum.photos/seed/car2-3/600/400', 2),
('https://picsum.photos/seed/car2-4/600/400', 2),
('https://picsum.photos/seed/car2-5/600/400', 2),
('https://picsum.photos/seed/car2-6/600/400', 2),
('https://picsum.photos/seed/car2-7/600/400', 2),
('https://picsum.photos/seed/car2-8/600/400', 2),
('https://picsum.photos/seed/car2-9/600/400', 2),
('https://picsum.photos/seed/car2-10/600/400', 2),
('https://picsum.photos/seed/car3-1/600/400', 3),
('https://picsum.photos/seed/car3-2/600/400', 3),
('https://picsum.photos/seed/car3-3/600/400', 3),
('https://picsum.photos/seed/car3-4/600/400', 3),
('https://picsum.photos/seed/car3-5/600/400', 3),
('https://picsum.photos/seed/car3-6/600/400', 3),
('https://picsum.photos/seed/car3-7/600/400', 3),
('https://picsum.photos/seed/car3-8/600/400', 3),
('https://picsum.photos/seed/car3-9/600/400', 3),
('https://picsum.photos/seed/car3-10/600/400', 3),
('https://picsum.photos/seed/car4-1/600/400', 4),
('https://picsum.photos/seed/car4-2/600/400', 4),
('https://picsum.photos/seed/car4-3/600/400', 4),
('https://picsum.photos/seed/car4-4/600/400', 4),
('https://picsum.photos/seed/car4-5/600/400', 4),
('https://picsum.photos/seed/car4-6/600/400', 4),
('https://picsum.photos/seed/car4-7/600/400', 4),
('https://picsum.photos/seed/car4-8/600/400', 4),
('https://picsum.photos/seed/car4-9/600/400', 4),
('https://picsum.photos/seed/car4-10/600/400', 4),
('https://picsum.photos/seed/car5-1/600/400', 5),
('https://picsum.photos/seed/car5-2/600/400', 5),
('https://picsum.photos/seed/car5-3/600/400', 5),
('https://picsum.photos/seed/car5-4/600/400', 5),
('https://picsum.photos/seed/car5-5/600/400', 5),
('https://picsum.photos/seed/car5-6/600/400', 5),
('https://picsum.photos/seed/car5-7/600/400', 5),
('https://picsum.photos/seed/car5-8/600/400', 5),
('https://picsum.photos/seed/car5-9/600/400', 5),
('https://picsum.photos/seed/car5-10/600/400', 5),
('https://picsum.photos/seed/car6-1/600/400', 6),
('https://picsum.photos/seed/car6-2/600/400', 6),
('https://picsum.photos/seed/car6-3/600/400', 6),
('https://picsum.photos/seed/car6-4/600/400', 6),
('https://picsum.photos/seed/car6-5/600/400', 6),
('https://picsum.photos/seed/car6-6/600/400', 6),
('https://picsum.photos/seed/car6-7/600/400', 6),
('https://picsum.photos/seed/car6-8/600/400', 6),
('https://picsum.photos/seed/car6-9/600/400', 6),
('https://picsum.photos/seed/car6-10/600/400', 6),
('https://picsum.photos/seed/car7-1/600/400', 7),
('https://picsum.photos/seed/car7-2/600/400', 7),
('https://picsum.photos/seed/car7-3/600/400', 7),
('https://picsum.photos/seed/car7-4/600/400', 7),
('https://picsum.photos/seed/car7-5/600/400', 7),
('https://picsum.photos/seed/car7-6/600/400', 7),
('https://picsum.photos/seed/car7-7/600/400', 7),
('https://picsum.photos/seed/car7-8/600/400', 7),
('https://picsum.photos/seed/car7-9/600/400', 7),
('https://picsum.photos/seed/car7-10/600/400', 7),
('https://picsum.photos/seed/car8-1/600/400', 8),
('https://picsum.photos/seed/car8-2/600/400', 8),
('https://picsum.photos/seed/car8-3/600/400', 8),
('https://picsum.photos/seed/car8-4/600/400', 8),
('https://picsum.photos/seed/car8-5/600/400', 8),
('https://picsum.photos/seed/car8-6/600/400', 8),
('https://picsum.photos/seed/car8-7/600/400', 8),
('https://picsum.photos/seed/car8-8/600/400', 8),
('https://picsum.photos/seed/car8-9/600/400', 8),
('https://picsum.photos/seed/car8-10/600/400', 8),
('https://picsum.photos/seed/car9-1/600/400', 9),
('https://picsum.photos/seed/car9-2/600/400', 9),
('https://picsum.photos/seed/car9-3/600/400', 9),
('https://picsum.photos/seed/car9-4/600/400', 9),
('https://picsum.photos/seed/car9-5/600/400', 9),
('https://picsum.photos/seed/car9-6/600/400', 9),
('https://picsum.photos/seed/car9-7/600/400', 9),
('https://picsum.photos/seed/car9-8/600/400', 9),
('https://picsum.photos/seed/car9-9/600/400', 9),
('https://picsum.photos/seed/car9-10/600/400', 9),
('https://picsum.photos/seed/car10-1/600/400', 10),
('https://picsum.photos/seed/car10-2/600/400', 10),
('https://picsum.photos/seed/car10-3/600/400', 10),
('https://picsum.photos/seed/car10-4/600/400', 10),
('https://picsum.photos/seed/car10-5/600/400', 10),
('https://picsum.photos/seed/car10-6/600/400', 10),
('https://picsum.photos/seed/car10-7/600/400', 10),
('https://picsum.photos/seed/car10-8/600/400', 10),
('https://picsum.photos/seed/car10-9/600/400', 10),
('https://picsum.photos/seed/car10-10/600/400', 10),
('https://picsum.photos/seed/car11-1/600/400', 11),
('https://picsum.photos/seed/car11-2/600/400', 11),
('https://picsum.photos/seed/car11-3/600/400', 11),
('https://picsum.photos/seed/car11-4/600/400', 11),
('https://picsum.photos/seed/car11-5/600/400', 11),
('https://picsum.photos/seed/car11-6/600/400', 11),
('https://picsum.photos/seed/car11-7/600/400', 11),
('https://picsum.photos/seed/car11-8/600/400', 11),
('https://picsum.photos/seed/car11-9/600/400', 11),
('https://picsum.photos/seed/car11-10/600/400', 11),
('https://picsum.photos/seed/car12-1/600/400', 12),
('https://picsum.photos/seed/car12-2/600/400', 12),
('https://picsum.photos/seed/car12-3/600/400', 12),
('https://picsum.photos/seed/car12-4/600/400', 12),
('https://picsum.photos/seed/car12-5/600/400', 12),
('https://picsum.photos/seed/car12-6/600/400', 12),
('https://picsum.photos/seed/car12-7/600/400', 12),
('https://picsum.photos/seed/car12-8/600/400', 12),
('https://picsum.photos/seed/car12-9/600/400', 12),
('https://picsum.photos/seed/car12-10/600/400', 12),
('https://picsum.photos/seed/car13-1/600/400', 13),
('https://picsum.photos/seed/car13-2/600/400', 13),
('https://picsum.photos/seed/car13-3/600/400', 13),
('https://picsum.photos/seed/car13-4/600/400', 13),
('https://picsum.photos/seed/car13-5/600/400', 13),
('https://picsum.photos/seed/car13-6/600/400', 13),
('https://picsum.photos/seed/car13-7/600/400', 13),
('https://picsum.photos/seed/car13-8/600/400', 13),
('https://picsum.photos/seed/car13-9/600/400', 13),
('https://picsum.photos/seed/car13-10/600/400', 13),
('https://picsum.photos/seed/car14-1/600/400', 14),
('https://picsum.photos/seed/car14-2/600/400', 14),
('https://picsum.photos/seed/car14-3/600/400', 14),
('https://picsum.photos/seed/car14-4/600/400', 14),
('https://picsum.photos/seed/car14-5/600/400', 14),
('https://picsum.photos/seed/car14-6/600/400', 14),
('https://picsum.photos/seed/car14-7/600/400', 14),
('https://picsum.photos/seed/car14-8/600/400', 14),
('https://picsum.photos/seed/car14-9/600/400', 14),
('https://picsum.photos/seed/car14-10/600/400', 14),
('https://picsum.photos/seed/car15-1/600/400', 15),
('https://picsum.photos/seed/car15-2/600/400', 15),
('https://picsum.photos/seed/car15-3/600/400', 15),
('https://picsum.photos/seed/car15-4/600/400', 15),
('https://picsum.photos/seed/car15-5/600/400', 15),
('https://picsum.photos/seed/car15-6/600/400', 15),
('https://picsum.photos/seed/car15-7/600/400', 15),
('https://picsum.photos/seed/car15-8/600/400', 15),
('https://picsum.photos/seed/car15-9/600/400', 15),
('https://picsum.photos/seed/car15-10/600/400', 15),
('https://picsum.photos/seed/car16-1/600/400', 16),
('https://picsum.photos/seed/car16-2/600/400', 16),
('https://picsum.photos/seed/car16-3/600/400', 16),
('https://picsum.photos/seed/car16-4/600/400', 16),
('https://picsum.photos/seed/car16-5/600/400', 16),
('https://picsum.photos/seed/car16-6/600/400', 16),
('https://picsum.photos/seed/car16-7/600/400', 16),
('https://picsum.photos/seed/car16-8/600/400', 16),
('https://picsum.photos/seed/car16-9/600/400', 16),
('https://picsum.photos/seed/car16-10/600/400', 16),
('https://picsum.photos/seed/car17-1/600/400', 17),
('https://picsum.photos/seed/car17-2/600/400', 17),
('https://picsum.photos/seed/car17-3/600/400', 17),
('https://picsum.photos/seed/car17-4/600/400', 17),
('https://picsum.photos/seed/car17-5/600/400', 17),
('https://picsum.photos/seed/car17-6/600/400', 17),
('https://picsum.photos/seed/car17-7/600/400', 17),
('https://picsum.photos/seed/car17-8/600/400', 17),
('https://picsum.photos/seed/car17-9/600/400', 17),
('https://picsum.photos/seed/car17-10/600/400', 17),
('https://picsum.photos/seed/car18-1/600/400', 18),
('https://picsum.photos/seed/car18-2/600/400', 18),
('https://picsum.photos/seed/car18-3/600/400', 18),
('https://picsum.photos/seed/car18-4/600/400', 18),
('https://picsum.photos/seed/car18-5/600/400', 18),
('https://picsum.photos/seed/car18-6/600/400', 18),
('https://picsum.photos/seed/car18-7/600/400', 18),
('https://picsum.photos/seed/car18-8/600/400', 18),
('https://picsum.photos/seed/car18-9/600/400', 18),
('https://picsum.photos/seed/car18-10/600/400', 18),
('https://picsum.photos/seed/car19-1/600/400', 19),
('https://picsum.photos/seed/car19-2/600/400', 19),
('https://picsum.photos/seed/car19-3/600/400', 19),
('https://picsum.photos/seed/car19-4/600/400', 19),
('https://picsum.photos/seed/car19-5/600/400', 19),
('https://picsum.photos/seed/car19-6/600/400', 19),
('https://picsum.photos/seed/car19-7/600/400', 19),
('https://picsum.photos/seed/car19-8/600/400', 19),
('https://picsum.photos/seed/car19-9/600/400', 19),
('https://picsum.photos/seed/car19-10/600/400', 19),
('https://picsum.photos/seed/car20-1/600/400', 20),
('https://picsum.photos/seed/car20-2/600/400', 20),
('https://picsum.photos/seed/car20-3/600/400', 20),
('https://picsum.photos/seed/car20-4/600/400', 20),
('https://picsum.photos/seed/car20-5/600/400', 20),
('https://picsum.photos/seed/car20-6/600/400', 20),
('https://picsum.photos/seed/car20-7/600/400', 20),
('https://picsum.photos/seed/car20-8/600/400', 20),
('https://picsum.photos/seed/car20-9/600/400', 20),
('https://picsum.photos/seed/car20-10/600/400', 20);

-- Inserts tabla Sale
INSERT INTO Sale (carId, clientId, paymentMethodId) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 1),
(4, 4, 2),
(5, 5, 1);

-- =============================
-- CONSULTAS SOLICITADAS
-- =============================

-- 1. Todas las ventas realizadas por un mismo cliente (ejemplo cliente 1)
SELECT * FROM Sale WHERE clientId = 1;

-- 2. Todos los vehículos con año mayor a 2020
SELECT * FROM Car WHERE year > 2020;

-- 3. Todas las ventas pagadas en Efectivo
SELECT v.*
FROM Sale v
JOIN PaymentMethod pm ON pm.id = v.paymentMethodId
WHERE pm.name = 'Efectivo';
