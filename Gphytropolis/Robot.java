
/**
* La tortue du programme LOGO. Dans cet exemple, il n'y a pas les accesseurs des attributs.
* On peut visualiser l'?tat, mais pas le reste.
*
* @author PG
* @version 15/08/2006
*/
public class Robot {
    // Position de la tortue
    private int x;
    private int y;

    // Direction de la tortue
    private int direction;

    // Mode de la tortue
    private boolean trace;

    /**
    * Constructor for objects of class Tortue
    */
    public Robot() {
        // initialise uniquement la direction et la trace
        direction = 3;
        trace = true;
    }

    /**
     * Accesseur de la direction
     *
     * @return     la valeur de la direction
     */
    public int getDirection() {
        return direction;
    }

    /**
     * M?thode permettant ? la tortue d'avancer dans la direction fix?e
     */
    public void avancer() {
        int ox, oy;
        ox = x;
        oy = y;
        switch(direction) {
            case 0:
                x++;
                break;
            case 1:
                y++;
                break;
            case 2:
                x--;
                break;
            case 3:
                y--;
        }
        afficherEtat();
    }

    /**
     * M?thode permettant de tourner, dans le sens des aiguilles d'une montre
     */
    public void tourner() {
        direction++;
        if(direction == 4)
            direction = 0;
        afficherEtat();
    }

    /**
     * Affichage de l'état de la tortue
     */
    public void afficherEtat() {
        System.out.println("La tortue est en x:" + x + ", y:" + y + ", et en direction : " + direction);
    }

    public void afficherTortue() {
        switch(direction) {
            case 0:
                Canvas_WallE_Eve.tortueEst(x, y);
                break;
            case 1:
                Canvas_WallE_Eve.tortueSud(x, y);
                break;
            case 2:
                Canvas_WallE_Eve.tortueOuest(x, y);
                 break;
            case 3:
                Canvas_WallE_Eve.tortueNord(x, y);
        }
    }

}
