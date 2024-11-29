<template>
    <div class="app-container">
      <header>
        <h1>Soyez le bienvenue sur notre site de location de voiture :</h1>
      </header>
      <main>
        <p>
          Découvrez notre service de location de matériel, conçu pour répondre à tous vos besoins,
          qu'ils soient professionnels ou personnels. Nous vous proposons une large gamme de matériel
          de qualité, allant des outils de jardinage aux équipements de construction, en passant par
          les appareils électroniques et plus encore. Avec des tarifs compétitifs, une livraison rapide
          et un service client dédié, vous pouvez être sûr que notre matériel sera à la hauteur de vos
          attentes. Louez facilement et efficacement pour tous vos projets, et profitez de la flexibilité
          et de la tranquillité d'esprit que vous méritez.
        </p>
        <div class="icon-sections">
          <div class="icon-section">
            <img :src="require('/src/assets/1.png')" alt="Construction Equipment" />
          </div>
          <div class="icon-section">
            <img :src="require('/src/assets/2.png')" alt="Bike Shop" />
          </div>
          <div class="icon-section">
            <img :src="require('/src/assets/3.png')" alt="Ski Equipment" />
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "RentalPage",
  };
  </script>
  
  <style scoped>
  img {
    border-radius: 50%;
  }
  .app-container {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 20px;
  }
  
  header h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  main p {
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .icon-sections {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .icon-section {
    text-align: center;
    margin: 0 15px;
  }
  
  .icon-section img {
    width: 500px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .icon-section p {
    font-size: 14px;
  }
  </style>  