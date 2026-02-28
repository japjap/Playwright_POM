exports.FruitPage = class FruitPage {

    constructor(page) {
        //navigate to shop page
        this.page = page
        this.home_button = page.getByRole('link', { name: 'Home' })
        this.shop_button = page.getByTestId('shop-button')
        this.contact = page.getByRole('link', { name: 'Contact' })
        this.register = page.getByRole('link', { name: 'Register' })
        this.cart = page.getByRole('link', { name: 'Cart' })
        this.all_pie = page.getByRole('link', { name: 'All Pies' })
        this.fruit_pie = page.getByRole('link', { name: 'Fruit Pies' })
        this.cheese_pie = page.getByRole('link', { name: 'Cheesecakes' })
        this.seasonal_pie = page.getByRole('link', { name: 'Seasonal Pies' })
        this.cartcount = page.getByTestId('cart-count')

        this.add_to_cart = page.getByRole('button', { name: 'Add to Cart' }).first()
    }
    addfirstpie() {
        return this.add_to_cart.click();
    }
}