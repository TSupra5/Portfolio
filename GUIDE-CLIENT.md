# Guide de Modification du Site Web TLM Racing

*Guide simple pour modifier le contenu de votre site web sans connaissances techniques*

---

## 📋 Table des Matières

1. [Introduction](#introduction)
2. [Comment Ouvrir et Modifier les Fichiers](#comment-ouvrir-et-modifier-les-fichiers)
3. [Modifier le Contenu Principal](#modifier-le-contenu-principal)
4. [Modifier les Informations de Contact](#modifier-les-informations-de-contact)
5. [Modifier les Championnats](#modifier-les-championnats)
6. [Modifier la Section TLM Experience](#modifier-la-section-tlm-experience)
7. [Conseils Importants](#conseils-importants)
8. [Dépannage](#dépannage)

---

## 🚀 Introduction

Ce guide vous permettra de modifier facilement le contenu de votre site web. Vous pourrez changer les textes, les informations de contact, et les descriptions sans avoir besoin de connaissances en programmation.

**Fichier principal à modifier :** `index.html`

---

## 📁 Comment Ouvrir et Modifier les Fichiers

### Méthode Recommandée :
1. **Clic droit** sur le fichier `index.html`
2. Sélectionnez **"Ouvrir avec"**
3. Choisissez **"Bloc-notes"** ou **"Notepad++"** (recommandé)

### ⚠️ IMPORTANT :
- **NE PAS** ouvrir avec Word ou LibreOffice
- **TOUJOURS** faire une sauvegarde avant de modifier
- **TESTER** le site après chaque modification

---

## 🏠 Modifier le Contenu Principal

### Section d'Accueil (Hero)

**Localiser cette partie :**
```html
<h1 class="hero-title">Thibaut Rouard</h1>
<p class="hero-description">Freelance mécanique</p>
```

**Pour modifier :**
- Remplacez `Thibaut Rouard` par votre nom
- Remplacez `Freelance mécanique` par votre spécialité

**Exemple :**
```html
<h1 class="hero-title">Jean Dupont</h1>
<p class="hero-description">Expert mécanique automobile</p>
```

---

### Section L'Équipe

**Localiser cette partie :**
```html
<h2 class="section-title">UNE ÉQUIPE D'EXPÉRIENCE</h2>
<div class="team-content">
    <p class="team-description">
        Dès sa première saison en compétition, le team TLM Racing...
    </p>
```

**Pour modifier :**
- Changez le titre `UNE ÉQUIPE D'EXPÉRIENCE`
- Remplacez tout le texte dans `<p class="team-description">`

**Exemple :**
```html
<h2 class="section-title">MON EXPERTISE</h2>
<div class="team-content">
    <p class="team-description">
        Fort de 15 ans d'expérience dans la mécanique automobile, 
        je propose mes services pour l'entretien et la réparation 
        de tous types de véhicules...
    </p>
```

---

## 📞 Modifier les Informations de Contact

**Localiser cette section :**
```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <span>contact@tlmracing.fr</span>
</div>
<div class="contact-item">
    <span class="contact-icon">📱</span>
    <span>+33 6 12 34 56 78</span>
</div>
<div class="contact-item">
    <span class="contact-icon">📍</span>
    <span>Circuit de Nevers Magny-Cours<br>58470 Magny-Cours, France</span>
</div>
```

**Pour modifier :**
- Remplacez `contact@tlmracing.fr` par votre email
- Remplacez `+33 6 12 34 56 78` par votre numéro
- Remplacez l'adresse par la vôtre

**Exemple :**
```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <span>jean.dupont@garage-expert.fr</span>
</div>
<div class="contact-item">
    <span class="contact-icon">📱</span>
    <span>+33 6 98 76 54 32</span>
</div>
<div class="contact-item">
    <span class="contact-icon">📍</span>
    <span>123 Rue de la Mécanique<br>75001 Paris, France</span>
</div>
```

---

## 🏆 Modifier les Championnats

### Changer les Titres et Descriptions

**Localiser une carte de championnat :**
```html
<div class="championship-card" data-modal="gt-world">
    <div class="championship-content">
        <h3>GT WORLD CHALLENGE</h3>
        <p>En 2025, TLM Racing s'engage dans le GT World Challenge...</p>
        <button class="championship-link modal-trigger" data-modal="gt-world">En savoir plus</button>
    </div>
</div>
```

**Pour modifier :**
- Changez `GT WORLD CHALLENGE` par votre service
- Remplacez le texte de description

**Exemple - Transformer en Services :**
```html
<div class="championship-card" data-modal="gt-world">
    <div class="championship-content">
        <h3>ENTRETIEN COMPLET</h3>
        <p>Service complet d'entretien pour tous véhicules. Vidange, freins, distribution et diagnostic complet.</p>
        <button class="championship-link modal-trigger" data-modal="gt-world">En savoir plus</button>
    </div>
</div>
```

### Modifier les Détails dans les Modales

**Localiser le contenu détaillé :**
```html
<div id="gt-world-modal" class="championship-modal">
    <div class="modal-header">
        <h2>GT WORLD CHALLENGE</h2>
    </div>
    <div class="modal-content">
        <div class="modal-details">
            <h3>Défi Technique et Sportif</h3>
            <p>En 2025, TLM Racing s'engage...</p>
```

**Pour modifier :**
- Changez tous les titres et textes
- Modifiez les listes de caractéristiques

**Exemple :**
```html
<div id="gt-world-modal" class="championship-modal">
    <div class="modal-header">
        <h2>ENTRETIEN COMPLET</h2>
    </div>
    <div class="modal-content">
        <div class="modal-details">
            <h3>Service Professionnel</h3>
            <p>Un entretien complet pour maintenir votre véhicule en parfait état.</p>
            
            <h4>Services Inclus</h4>
            <ul>
                <li><strong>Vidange:</strong> Huile moteur et filtres</li>
                <li><strong>Freinage:</strong> Plaquettes et disques</li>
                <li><strong>Diagnostic:</strong> Électronique complète</li>
            </ul>
```

---

## 🚗 Modifier la Section TLM Experience

**Localiser cette section :**
```html
<h2 class="section-title">TLM EXPERIENCE</h2>
<p class="experience-intro">
    Le team TLM Racing affirme sa volonté...
</p>
```

**Pour modifier :**
- Changez `TLM EXPERIENCE` par votre titre
- Remplacez le texte d'introduction

**Exemple :**
```html
<h2 class="section-title">MES SERVICES</h2>
<p class="experience-intro">
    Je propose une gamme complète de services mécaniques 
    adaptés à tous vos besoins automobiles.
</p>
```

### Modifier les Cartes de Service

**Localiser une carte :**
```html
<div class="experience-card">
    <div class="experience-icon">🏎️</div>
    <h3>Journée Incentive</h3>
    <p>Une journée sur-mesure pour découvrir...</p>
</div>
```

**Pour modifier :**
- Changez l'emoji `🏎️` 
- Remplacez le titre `Journée Incentive`
- Changez la description

**Exemples d'emojis :**
- 🔧 pour Réparation
- ⚙️ pour Entretien  
- 🚗 pour Diagnostic
- 🛠️ pour Mécanique

**Exemple de modification :**
```html
<div class="experience-card">
    <div class="experience-icon">🔧</div>
    <h3>Réparation Express</h3>
    <p>Service de réparation rapide pour remettre votre véhicule en route dans les plus brefs délais.</p>
</div>
```

---

## ⚠️ Conseils Importants

### À FAIRE :
✅ **Toujours faire une sauvegarde** avant modification  
✅ **Tester le site** après chaque changement  
✅ **Garder la même structure** des balises HTML  
✅ **Vérifier l'orthographe** avant de sauvegarder  

### À NE PAS FAIRE :
❌ **Ne pas supprimer** les balises `<div>`, `<h1>`, `<p>`, etc.  
❌ **Ne pas modifier** les `class="..."` et `data-modal="..."`  
❌ **Ne pas toucher** aux balises `<script>` en bas du fichier  
❌ **Ne pas utiliser** Word ou LibreOffice pour modifier  

---

## 🎨 Modifier la Navigation

**Localiser le menu :**
```html
<ul class="nav-menu">
    <li><a href="#home">Accueil</a></li>
    <li><a href="#team">L'Équipe</a></li>
    <li><a href="#championships">Championnats</a></li>
    <li><a href="#experience">TLM Experience</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
```

**Pour modifier les noms des sections :**
- Changez `L'Équipe` par `Mon Expertise`
- Changez `Championnats` par `Mes Services`
- Changez `TLM Experience` par `Prestations`

**ATTENTION :** Ne modifiez PAS les `href="#..."` !

---

## 🆘 Dépannage

### Problème : Le site ne s'affiche plus correctement
**Solution :**
1. Vérifiez que vous n'avez pas supprimé de balises
2. Restaurez votre sauvegarde
3. Recommencez les modifications

### Problème : Les accents ne s'affichent pas
**Solution :**
1. Utilisez Notepad++ au lieu du Bloc-notes
2. Sauvegardez en UTF-8

### Problème : Les boutons ne fonctionnent plus
**Solution :**
- Vérifiez que vous n'avez pas modifié les `data-modal="..."`
- Restaurez la sauvegarde si nécessaire

---

## 📞 Support

Si vous rencontrez des difficultés :

1. **Faire une capture d'écran** du problème
2. **Noter** exactement ce que vous avez modifié
3. **Contacter** votre développeur avec ces informations

---

## ✅ Checklist de Modification

Avant de publier vos modifications :

- [ ] Sauvegarde effectuée
- [ ] Textes modifiés et relus
- [ ] Informations de contact mises à jour
- [ ] Site testé dans le navigateur
- [ ] Aucune erreur d'affichage
- [ ] Tous les boutons fonctionnent

---

**Bonne modification ! 🚀**

*Ce guide vous permet de personnaliser facilement votre site web. En cas de doute, n'hésitez pas à faire appel à votre développeur.*
