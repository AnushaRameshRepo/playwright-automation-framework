class EventsPage {
    constructor(page) {
        this.page = page;
        this.searchTextBox = page.getByPlaceholder("Search events, venues…");
        this.categoryFilter = page.locator("select:has-text('All Categories')");
        this.cityFilter = page.locator("select:has(option[value='Pune'])");
        this.addEventButton = page.locator("a[href='/admin/events']").first();
        this.eventCard=page.locator("article[id='event-card']");
        this.categoryTag = page.locator("article[id='event-card'] span[class*='text-amber']");
        this.clearFilterButton = page.locator("button:has-text('Clear filters')");
        this.eventCardDetails = page.locator("div[class*='flex'] span[class='line-clamp-1']");
    }
    cardsWithoutCategory(category){
        return this.eventCard.filter({hasNot:this.page.getByText(category,{exact:true})});
    }
    async filterEvents(categoryValue = '', cityValue = '') {
      
        if(await this.clearFilterButton.isVisible())
        {
            await this.clearFilterButton.click();
            await this.clearFilterButton.waitFor({ state: 'detached' });
        }
        await this.categoryFilter.selectOption(categoryValue);
        await this.cityFilter.selectOption(cityValue);
    }

    async getEventCardDetails() {
        const details = {
            eventDate: await this.eventCardDetails.nth(0).textContent(),
            eventLocation: await this.eventCardDetails.nth(1).textContent()
        }
        return details;
    }
}
module.exports = { EventsPage };