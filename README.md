Code pour faire le main qui affiche le bleu :

Pour faire apparaître la méthode main() et exécuter ton programme, tu dois simplement suivre les étapes suivantes :

Étape 1 : Crée une nouvelle classe avec une méthode main()
Si tu n'as pas encore une classe principale qui contient le point d'entrée du programme, tu dois en créer une. Voici comment faire :

Crée un fichier Java séparé, par exemple Main.java.

Ajoute une méthode main() dans cette classe, qui servira de point d'entrée pour ton programme.

Voici comment tu peux écrire cette classe principale :

Exemple de code pour Main.java :
java
Copier le code
import java.awt.*;
import java.awt.geom.Rectangle2D;

public class Main {
    public static void main(String[] args) {
        // Obtenez le Canvas (ceci initialise et affiche le canvas)
        Canvas canvas = Canvas.getCanvas();
        
        // Créez un carré gris de 400x400
        Shape graySquare = new Rectangle2D.Double(50, 50, 400, 400);  // Position (50, 50) avec taille 400x400
        
        // Dessinez le carré gris sur le canvas
        canvas.draw("graySquare", "gray", graySquare);
    }
}

et code a rajouté dans le Canva à moins qu'il y soit déja :
else if(colorString.equals("gray")) {
    graphic.setColor(Color.gray);
}
