

#  **ÉNONCÉ DU PROJET — Car Manager App (React Class Components)**

##  **Objectif du projet**

Vous allez développer une petite application React qui permet de **gérer une liste de voitures**.
L’objectif principal est de pratiquer :

* Les **composants de type classe**
* Le **cycle de vie React** (lifecycle)
* Les **événements** (onClick, onChange, onSubmit…)
* Le **fetch** (GET)
* La **gestion du state**
* Le **CRUD local** (Create / Read / Update / Delete) directement sur le state

Vous utiliserez une API publique pour charger les données initiales, puis toutes les modifications (CRUD) se feront **uniquement dans le state**, sans renvoi vers l’API.

---

#  **1. Description générale**

L’application devra :

1. **Charger une liste de voitures** depuis l’API suivante :

   ```
   https://myfakeapi.com/api/cars/
   ```
2. **Afficher** les premières voitures (ex : les 10 premières)
3. Permettre de :

   * **Ajouter** une voiture
   * **Modifier** une voiture
   * **Supprimer** une voiture
4. Chaque voiture contient les informations suivantes :

   * `id`
   * `car` (marque)
   * `car_model`
   * `car_color`
   * `car_model_year`
   * `price`
   * `availability`
5. Les opérations doivent mettre à jour **uniquement le state React**.

---

#  **2. Structure recommandée du projet**

```
src/
 ├── components/
 │    ├── CarList.js        → Liste des voitures
 │    ├── CarItem.js        → Une voiture avec ses actions
 │    ├── CarForm.js        → Formulaire d’ajout / édition
 │    └── Loader.js         → chargement
 │
 ├── services/
 │    └── carsApi.js        → Appeler l'API (fetch GET)
 │
 ├── App.js                 → Logique principale + lifecycle
 └── index.js
```

---

#  **3. Cycle de vie React à utiliser**

L'application doit obligatoirement utiliser les méthodes suivantes :

###  `componentDidMount()`

* Appeler l’API
* Stocker les voitures dans le state
* Simuler un "loading" avant l’affichage

### `componentDidUpdate(prevProps, prevState)`

* Afficher un message en console lorsqu’une voiture est :

  * ajoutée
  * modifiée
  * supprimée

### `componentWillUnmount()`

* Nettoyer un setInterval ou une écoute d’événement

Un `setInterval` simple suffira :

```js
this.timer = setInterval(() => console.log("App active"), 2000);
```

---

# **4. Événements à intégrer dans l’application**

Votre application doit utiliser plusieurs types d’événements React :

###  **Événements souris**

* `onClick` (ajouter, supprimer, éditer)
* `onDoubleClick` (éditer un champ directement)
* `onMouseEnter` et `onMouseLeave` (survol d’une voiture)

### **Événements clavier**

* `onKeyUp` (valider une modification quand on appuie sur Enter)
* `onKeyDown` (prévenir si l’utilisateur tape une mauvaise valeur)
* `onKeyPress`

### **Événements formulaire**

* `onChange` (inputs contrôlés)
* `onSubmit` (envoi du formulaire)
* `onFocus` / `onBlur` (validation des champs)

---

#  **5. Fonctionnalités demandées (CRUD)**

### ✔ A. **Afficher les voitures**

Afficher la liste récupérée depuis l’API (ex : les 10 premières voitures).

### ✔ B. **Ajouter une voiture**

Un formulaire permettra d'ajouter une nouvelle voiture :

* id généré automatiquement (`Date.now()` par exemple)
* marque (car)
* année
* couleur
* modèle

Ajoutée via :

```js
this.setState({ })
```

###  C. **Modifier une voiture**

Deux options possibles (au choix) :

1. Ouvrir un formulaire d’édition
   **ou**
2. Double-cliquer (`onDoubleClick`) sur la marque pour la modifier inline

### ✔ D. **Supprimer une voiture**

En cliquant sur un bouton :

```js
this.setState({ })
```

---

#  **6. Test de l’API dans la console (obligatoire)**

Avant d’utiliser React, vous devez tester l’API dans la console du navigateur :

```js
fetch("https://myfakeapi.com/api/cars/")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

# **7. Livrables attendus**

* Une application React fonctionnelle en **Class Components**
* Un CRUD complet sur le state
* Une gestion correcte du lifecycle
* L’utilisation d’au moins **8 types d’événements**
* Une interface simple mais propre
* Un code structuré par composants

