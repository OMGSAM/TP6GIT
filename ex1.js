# Exercice 1 : Manipulation des branches localement

# 1. Initialisation du projet
git init
echo "<p>Lorem ipsum dolor sit amet.</p>" > index.html
git add index.html
git commit -m "Ajout du fichier index.html avec un paragraphe"

# 2. Création et modification de la branche fn/tab
git checkout -b fn/tab
echo "<h1>Titre principal</h1>" >> index.html
echo "<table><tr><td>Cellule 1</td><td>Cellule 2</td></tr></table>" >> index.html
git add index.html
git commit -m "Ajout d'un titre et d'un tableau dans index.html"

# 3. Création et modification de la branche fn/footer
git checkout master
git checkout -b fn/footer
echo "<span>copyright 2022</span>" >> index.html
git add index.html
git commit -m "Ajout du footer dans index.html"

# 4. Fusion des branches fn/tab et fn/footer
git checkout fn/tab
git merge fn/footer
# Résolution des conflits dans Visual Studio Code (garder toutes les modifications)
git add index.html
git commit -m "Résolution des conflits et fusion des branches fn/tab et fn/footer"

# 5. Fusion avec la branche master
git checkout master
git merge fn/tab
git add index.html
git commit -m "Fusion de fn/tab avec master"

# Exercice 2 : Git / GitLab

# 1. Création d’un projet GitLab et clonage
git clone <URL_DU_PROJET_GITLAB>

# 2. Ajout et validation du fichier default.html
echo "<!DOCTYPE html><html><body>Contenu HTML</body></html>" > default.html
git add default.html
git commit -m "Ajout du fichier default.html"
git push

# 3. Modification dans GitLab et synchronisation
# Modifier default.html directement sur GitLab
git pull

# 4. Création et modification de la branche design
git checkout -b design
echo "body { background-color: lightblue; }" > style.css
echo '<link rel="stylesheet" href="style.css">' >> default.html
git add .
git commit -m "Ajout de style.css et lien avec default.html"
git push -u origin design

# 5. Demande de fusion (Merge Request)
# Faire une Merge Request sur GitLab et accepter/refuser via l'interface.
