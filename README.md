# Plates Co
A Shop with 3 Products - Red, Green and Blue Plates. Have a Go at it.

## Cart features

### Catalogue
On the left end of the screen, it shows products available for sale. Below it, you can see `(+)` and `(-)` buttons, to add them into cart.
Quanities being added in the cart will be displayed in between those 2 buttons.

### Delivery Price
For Orders under $50 cost $4.95.
For orders under $90, delivery costs $2.95. Orders of $90
or more have free delivery.

> These rules are configured at [`src/data/deliveryRules.ts`](https://github.com/hirenf14/plates-co-cart/blob/main/src/data/deliveryRules.ts#L1)

### Special Offer
Our hot product, **Red Plate** has the special offer.

*Buy one red plate,
get the second half price*

This discount will be offered for every 2nd plate only.
- 1st Red Plate will be charged full price.
- 2nd Red Plate will be charged half price.
- 3rd Red Plate will be charged full price.
- 4th Red Plate will be charged half price.
- and so on....

Note: Above is applied only for "Red Plate", buying other plates doesn't provide you the discount.

> It's calculated as special offer discount, for code, look into 
[`src/modules/cart/hooks/useCart.ts:12`](https://github.com/hirenf14/plates-co-cart/blob/main/src/modules/cart/hooks/useCart.ts#L12)


## To Run the shop

In the project directory, you can run:

Install dependencies 

```shell
npm install
```

Start the server

```shell
npm start
```
