class EventsPage {
    constructor(page) {
        this.page = page;
        this.searchTextBox = page.getByPlaceholder("Search events, venues…");
        this.categoryFilter = page.locator("select:has-text('All Categories')");
        this.cityFilter = page.locator("select:has(option[value='Pune'])");
        this.addEventButton = page.locator("a[href='/admin/events']").first();
        this.categoryTag = page.locator("article[id='event-card'] span[class*='text-amber']");
        this.clearFilterButton = page.locator("button:has-text('Clear filters')");
        this.eventCardDetails = page.locator("div[class*='flex'] span[class='line-clamp-1']");
    }
    async filterEvents(categoryValue = '', cityValue = '') {

        if(await this.clearFilterButton.isVisible())
        {
            await this.clearFilterButton.click();
        }
        await this.categoryFilter.selectOption(categoryValue);
        await this.cityFilter.selectOption(cityValue);
        
        const currentURL=this.page.url();
        let retry=0;

        while(retry<3){
        if (!currentURL.includes('category') && !currentURL.includes('city')) {
            await this.categoryFilter.selectOption(categoryValue);
            await this.cityFilter.selectOption(cityValue);
            await this.categoryFilter.selectOption(categoryValue);
            await this.cityFilter.selectOption(cityValue);
        }
        else{
            break;
        }
        retry=retry+1;
    }
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