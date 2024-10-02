import java.util.*;
import java.awt.*;

/**
 * Décrivez votre classe Déchet ici.
 *
 * @author (votre nom)
 * @version (un numéro de version ou une date)
 */
public class Déchet
{
    // variables d'instance - remplacez l'exemple qui suit par le vôtre
    private int xPos;
    private int yPos;
    private int width;
    private int height;
    private boolean isVisible;
    private boolean isDetruit;

    /**
     * Constructeur d'objets de classe Déchet
     */
    public Déchet()
    {
        Random x = new Random();
        Random y = new Random();
        Random h = new Random();
        // initialisation des variables d'instance
        this.xPos = x.nextInt(500);
        this.yPos = y.nextInt(500);
        this.width = 10+h.nextInt(20);
        this.height = this.width;
        this.isVisible = false;
        this.isDetruit = false;
    }
    
    public void draw()
    {
        Canvas canvas = Canvas.getCanvas();
        canvas.draw(this, "black",
                    new Rectangle(xPos, yPos, width, height));
        canvas.wait(10);
    }
}
