exports.HomePage = class HomePage {

    constructor(page) {
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
    }
    async gotoHomePage() {
        await this.page.goto('http://localhost:3000/');
    }
    async gotoShopPage() {
        await this.shop_button.click();
        return this.all_pie.click();
    }
    async gotoFruitPage() {
        await this.shop_button.click();
        return this.fruit_pie.click();
    }
    async gotoCheesePage() {
        await this.shop_button.click();
        return this.cheese_pie.click();
    }
    async gotoSeasonalPage() {
        await this.shop_button.click();
        return this.seasonal_pie.click();
    }
    async gotoCartPage() {
        return this.cart.click();
    }
}