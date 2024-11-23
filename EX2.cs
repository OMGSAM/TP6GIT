# 1. Création d’un projet GitLab et clonage
# Allez sur GitLab, créez un nouveau projet, et récupérez son URL.
git clone <URL_DU_PROJET_GITLAB>

# 2. Ajout et validation du fichier default.html
echo "<!DOCTYPE html><html><body>Contenu HTML</body></html>" > default.html
git add default.html
git commit -m "Ajout du fichier default.html"
git push

# 3. Modification dans GitLab et synchronisation
# Modifier le fichier default.html directement sur GitLab via l’interface.
# Ensuite, synchronisez les modifications en local.
git pull

# 4. Création et modification de la branche design
git checkout -b design
echo "body { background-color: lightblue; }" > style.css
echo '<link rel="stylesheet" href="style.css">' >> default.html
git add .
git commit -m "Ajout de style.css et lien avec default.html"
git push -u origin design

# 5. Demande de fusion (Merge Request)
# Accédez à GitLab et faites une Merge Request (MR) depuis la branche `design` vers `main`.
# Acceptez ou refusez la MR selon vos besoins via l’interface GitLab.
