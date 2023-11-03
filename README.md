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

> These rules are configured at `src/data/deliveryRules.ts`

### Special Offer
Our hot product, **Red Plate** has the special offer.

*Buy one red plate,
get the second half price*

> It's calculated as special offer discount, for code, look into 
```src/modules/cart/hooks/useCart.ts:12```

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
