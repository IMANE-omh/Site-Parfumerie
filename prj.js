
    const form = document.getElementById("commandeForm");
    const resultat = document.getElementById("resultat");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const nom = document.getElementById("nom").value;
      const numero = document.getElementById("num").value;
      const produit = document.getElementById("produit").value;
      const quantite = document.getElementById("quantite").value;
      const adresse = document.getElementById("adresse").value;

      resultat.textContent = `Merci ${nom}, votre Numero de telephone ${numero}, 
       votre Adresse est ${adresse},votre commande de ${quantite} parfum(s) "${produit}" a été enregistrée avec succès ! 🌸`;
      form.reset();
      
    });
