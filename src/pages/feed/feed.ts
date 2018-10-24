import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Marden Macedo codigo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somadoisnumeros(n1:number,n2:number): void{
    //alert("minha função funcionou");
    //alert("A soma de " + "("+n1+ "+" + n2+")" + " = " + (n1 + n2) );
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.somadoisnumeros(1,2);

  }

}
