Code pour faire le main qui affiche le bleu :

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
