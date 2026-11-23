// Dades del catàleg: un objecte per producte.
const PRODUCTES = [
  {
    id: "flipper-zero",
    titol: "Flipper Zero",
    genere: "Electrònica",
    caracteristiques: ["Multieina portàtil", "RFID", "NFC", "GPIO"],
    preu: 199.99,
    valoracio: 4.8,
    estoc: 10,
    imatge: "img/flipper.png",
    descripcio: "Dispositiu multifuncional per a hackers. RFID, infrarojos, GPIO i tot el necessari."
  },
  {
    id: "arduino-uno",
    titol: "Arduino Uno",
    genere: "Electrònica",
    caracteristiques: ["Placa de desenvolupament", "Microcontrolador", "Entrades/sortides digitals"],
    preu: 499.99,
    valoracio: 4.8,
    estoc: 15,
    imatge: "img/arduino.png",
    descripcio: "Placa electrònica programable ideal per crear projectes de robòtica, automatització i electrònica."
  },
  {
    id: "modul-gps",
    titol: "Mòdul GPS",
    genere: "Accesoris",
    caracteristiques: ["Geolocalització", "Navegació", "Posicionament per satèl·lit"],
    preu: 299.99,
    valoracio: 4.8,
    estoc: 8,
    imatge: "img/flipper.png",
    descripcio: "Mòdul GPS per obtenir dades de localització i integrar sistemes de navegació en projectes electrònics. Característica destacada: Compatible amb múltiples dispositius."
  },
  {
    id: "esp32-devkit",
    titol: "ESP32 DevKit",
    genere: "Electrònica",
    caracteristiques: ["Wi-Fi", "Bluetooth", "Microcontrolador integrat"],
    preu: 59.99,
    valoracio: 4.8,
    estoc: 20,
    imatge: "img/esp32.jpg",
    descripcio: "Placa de desenvolupament ideal per a projectes IoT, domòtica i sistemes electrònics connectats."
  },
  {
    id: "kit-robotica-educativa",
    titol: "Kit Robòtica Educativa",
    genere: "Electrònica",
    caracteristiques: ["Peces de muntatge", "Motors", "Components electrònics"],
    preu: 29.99,
    valoracio: 4.8,
    estoc: 25,
    imatge: "img/kitrobotica.jpg",
    descripcio: "Kit educatiu per aprendre els conceptes bàsics de robòtica, programació i electrònica."
  },
  {
    id: "kit-cablejat-electronic",
    titol: "Kit de cablejat electrònic",
    genere: "Accesoris",
    caracteristiques: ["Cables", "Connectors", "Accessoris per a circuits electrònics"],
    preu: 89.99,
    valoracio: 4.8,
    estoc: 12,
    imatge: "img/kitcables.jpg",
    descripcio: "Kit de cablejat amb diferents components per connectar i muntar circuits electrònics. Característica destacada: Compatible amb múltiples dispositius."
  },
  {
    id: "raspberry-pi-5",
    titol: "Raspberry Pi 5",
    genere: "Electrònica",
    caracteristiques: ["Miniordinador", "Processador potent", "Connectivitat múltiple"],
    preu: 199.99,
    valoracio: 4.8,
    estoc: 10,
    imatge: "img/pi5.jpg",
    descripcio: "Ordinador de mida reduïda ideal per a projectes de programació, servidors i automatització."
  },
  {
    id: "teclat-rgb",
    titol: "Teclat RGB",
    genere: "Perifèrics",
    caracteristiques: ["Il·luminació RGB", "Tecles ergonòmiques", "Connexió USB"],
    preu: 49.99,
    valoracio: 4.8,
    estoc: 18,
    imatge: "img/teclatrgb.jpg",
    descripcio: "Teclat amb il·luminació RGB ideal per escriure, jugar i personalitzar l'escriptori."
  },
  {
    id: "ssd-1tb",
    titol: "SSD 1TB",
    genere: "Dispositius",
    caracteristiques: ["Emmagatzematge d'1 TB", "Alta velocitat de transferència"],
    preu: 129.99,
    valoracio: 4.8,
    estoc: 14,
    imatge: "img/ssd1tb.jpg",
    descripcio: "Unitat d'emmagatzematge SSD ràpida i eficient per guardar fitxers, programes i documents."
  },
  {
    id: "monitor-24",
    titol: "Monitor 24\"",
    genere: "Dispositius",
    caracteristiques: ["Pantalla de 24 polzades", "Alta qualitat d'imatge"],
    preu: 349.99,
    valoracio: 4.8,
    estoc: 7,
    imatge: "img/monitor.jpg",
    descripcio: "Monitor ideal per treballar, estudiar, jugar i gaudir de continguts multimèdia."
  },
  {
    id: "adaptador-usbc",
    titol: "Adaptador USB-C",
    genere: "Perifèrics",
    caracteristiques: ["Connexió USB-C", "Compatibilitat amb diferents dispositius"],
    preu: 119.99,
    valoracio: 4.8,
    estoc: 16,
    imatge: "img/adaptadorusbc.jpg",
    descripcio: "Adaptador per ampliar les opcions de connexió i connectar perifèrics a dispositius compatibles."
  },
  {
    id: "bateria-portatil",
    titol: "Bateria portàtil",
    genere: "Accesoris",
    caracteristiques: ["Alimentació portàtil", "Càrrega de dispositius electrònics"],
    preu: 79.99,
    valoracio: 4.8,
    estoc: 13,
    imatge: "img/bateriaportatil.jpg",
    descripcio: "Bateria externa ideal per carregar dispositius electrònics quan no tens accés a una presa de corrent."
  }
];