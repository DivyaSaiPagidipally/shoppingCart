import * as promptSync from "prompt-sync";
import { ItemInterface } from "./itemInterface";
const prompt = promptSync();

class ShoppingCart
{
    productName:string ;
    productQunatity: number;
    totalPrice: number;
    //items: {productName:string,productQunatity: number,totalPrice: number}[]=[];
    items:ItemInterface[]=[];
    addItem()
    {
        this.productName = prompt("Name: ");
        this.productQunatity = parseInt(prompt("Quantity: "));
        this.totalPrice= parseInt(prompt("Price: "));
        let newItem:ItemInterface = {
        productName:this.productName,
        productQunatity:this.productQunatity,
        totalPrice:this.totalPrice}
        this.items.push(newItem)
    }

    getItems()
    {
        console.log(this.items);
    }

    removeItem()
    {
        // this.items.pop();
        let name= prompt("enter an item name that need to be deleted: ");
        let remove= this.items.filter(eachItem => {
               if(eachItem.productName !== name)
               {
                return true;
               }
        })
        this.items=remove;
        console.log(this.items);
    }
    updateQunatity()
    {
        let name:string=prompt("enter an item name whose quantity need to be updated: ");
        let quantity:number=parseInt(prompt("enter the quantity: "));
        let update =this.items.map(eachItem => {
            if(eachItem.productName === name)
            {
               eachItem.productQunatity=quantity;
               console.log(eachItem);
            }
        })
    }
    totalPriceValue()
    {
        let total:number=0;
        this.items.map(eachItem => {
            total=total+eachItem.totalPrice*eachItem.productQunatity;
        })
      console.log("Total price is: ",total);
    }

    emptyTheCart()
    {
        this.items=[];
    }
    searchItem()
    {
        let name:string=prompt("search for an item: ");
        let check:Boolean=false;
        this.items.map(eachItem => 
            {
                if(eachItem.productName === name)
                {
                    check=true;
                }
            })
        if(check== true)
        {
            console.log(name, "is available in the cart");
        }
        else
        {
            console.log(name, "is not available in the cart");
        }
    }
}
const Cart = new ShoppingCart();
Cart.addItem();
Cart.addItem();
Cart.addItem();
Cart.getItems();
Cart.removeItem();
Cart.updateQunatity();
Cart.totalPriceValue();
Cart.searchItem();
Cart.emptyTheCart();
Cart.getItems();